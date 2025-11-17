import nodemailer from "nodemailer";
import generateEmailTemplate from "../../../utils/generateEmailTemplate";

export async function POST(request) {
    try {
        const body = await request.json();

        const {
            name,
            phone,
            email,
            city,
            message
        } = body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        });

        const html = generateEmailTemplate(name, email, phone, city, message);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            cc: process.env.EMAIL_CC,
            subject: "Biozoc Inc. - Contact Us",
            html: html,
        };

        await transporter.sendMail(mailOptions);

        return Response.json({ message: "Email sent successfully." });
    } catch (error) {
        console.error(error);
        return Response.json(
            { message: "Failed to send email.", error: error.message },
            { status: 500 }
        );
    }
}
