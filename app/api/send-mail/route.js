import nodemailer from "nodemailer";
import generateEmailTemplate from "../../../utils/generateEmailTemplate";

export async function POST(request) {
    try {
        const body = await request.json();

        const {
            name,
            phone,
            email,
            location,
            message,
            captchaToken
        } = body;

        // =========================
        // 1. CAPTCHA VALIDATION
        // =========================
        if (!captchaToken) {
            return Response.json(
                { message: "Captcha token missing" },
                { status: 400 }
            );
        }

        const captchaResponse = await fetch(
            "https://www.google.com/recaptcha/api/siteverify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
            }
        );

        const captchaResult = await captchaResponse.json();

        if (!captchaResult.success) {
            return Response.json(
                { message: "Captcha verification failed" },
                { status: 403 }
            );
        }

        // =========================
        // 2. SEND TO LMS (NEW)
        // =========================
        let lmsSuccess = true;
        let lmsError = null;

        try {
            const lmsParams = new URLSearchParams({
                company: "zoicpharmaceuticals",
                name,
                email,
                phone,
                location: location || "",
                message,
                lead_source: "163",
                division: "72",
            });

            const lmsUrl = `${process.env.LMS_URL}?${lmsParams.toString()}`;

            const lmsResponse = await fetch(lmsUrl, {
                method: "GET",
            });

            const lmsResult = await lmsResponse.text();

            if (!lmsResponse.ok) {
                lmsSuccess = false;
                lmsError = lmsResult;
                console.error("LMS ERROR:", lmsResult);
            }

        } catch (err) {
            lmsSuccess = false;
            lmsError = err.message;
            console.error("LMS EXCEPTION:", err);
        }

        // =========================
        // 3. EMAIL SENDING (EXISTING)
        // =========================
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const html = generateEmailTemplate(name, email, phone, location, message);

        const mailOptions = {
            from: `"Biozoc INC" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            cc: email,
            bcc: "seo.zoicpharma@gmail.com",
            subject: "We’ve received your enquiry | Biozoc INC",
            html: html,
        };

        await transporter.sendMail(mailOptions);

        // =========================
        // 4. FINAL RESPONSE
        // =========================
        if (!lmsSuccess) {
            // Email sent but LMS failed
            return Response.json({
                message: "Email sent, but LMS submission failed",
                lmsError,
            });
        }

        return Response.json({
            message: "Email and LMS submission successful",
        });

    } catch (error) {
        console.error("API ERROR:", error);

        return Response.json(
            { message: "Failed to send email.", error: error.message },
            { status: 500 }
        );
    }
}