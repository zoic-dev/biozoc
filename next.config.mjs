/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "biozoc.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "*.biozoc.com", // allows cms., cdn., media., files., etc.
        pathname: "/wp-content/uploads/**",
      }
    ],
  },

  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about",
        permanent: true
      },
      {
        source: "/shop-page",
        destination: "/products",
        permanent: true
      },
      {
        source: "/order-tracking",
        destination: "/",
        permanent: true
      },
      {
        source: "/checkout",
        destination: "/",
        permanent: true
      },
      {
        source: "/my-account",
        destination: "/",
        permanent: true
      },
      {
        source: "/cart",
        destination: "/",
        permanent: true
      },
      {
        source: "/privacy-policy-2",
        destination: "/privacy-policy",
        permanent: true
      },
      {
        source: "/terms-conditions",
        destination: "/terms-and-conditions",
        permanent: true
      },
      {
        source: "/faq",
        destination: "/frequently-asked-questions",
        permanent: true
      },
      {
        source: "/support-page",
        destination: "/contact",
        permanent: true
      },
      {
        source: "/payment-method",
        destination: "/contact",
        permanent: true
      },
      {
        source: "/shipping-method",
        destination: "/contact",
        permanent: true
      },
      {
        source: "/tablets",
        destination: "/product/category/tablets/38",
        permanent: true
      },
      {
        source: "/capsules",
        destination: "/product/category/capsules/37",
        permanent: true
      },
      {
        source: "/syrup",
        destination: "/product/category/syrup/36",
        permanent: true
      },
      {
        source: "/injectables",
        destination: "/products",
        permanent: true
      },
      {
        source: "/ointments",
        destination: "/product/category/ointments/39",
        permanent: true
      },
      {
        source: "/protein",
        destination: "/product/category/protein/40",
        permanent: true
      },
      {
        source: "/energy-drink",
        destination: "/product/category/energy-drink/49",
        permanent: true
      },
      {
        source: "/gynaec-range",
        destination: "/product/category/gynae/52",
        permanent: true
      },
      {
        source: "/herbal",
        destination: "/product/category/herbal/48",
        permanent: true
      },
      {
        source: "/soap",
        destination: "/product/category/soap/43",
        permanent: true
      },
      {
        source: "/lotions",
        destination: "/product/category/lotion/44",
        permanent: true
      },
      {
        source: "/sachets",
        destination: "/product/category/sachets/41",
        permanent: true
      },
      {
        source: "/third-party-manufacturing-company",
        destination: "/third-party-manufacturing",
        permanent: true
      },
      {
        source: "/pcd-pharma-franchise-company-chandigarh",
        destination: "/pcd-franchise",
        permanent: true
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true
      },
      {
        source: "/product-category/injectables",
        destination: "/products",
        permanent: true
      },
      {
        source: "/product-category/syrup/antibiotic",
        destination: "/product/category/antibiotic/58",
        permanent: true
      },
      {
        source: "/product-category/capsules",
        destination: "/product/category/capsules/37",
        permanent: true
      },
      {
        source: "/product-category/syrup/cardic",
        destination: "/product/category/cardic/59",
        permanent: true
      },
      {
        source: "/product-category/tablets/dental",
        destination: "/product/category/dental/53",
        permanent: true
      },
      {
        source: "/product-category/tablets/derma",
        destination: "/product/category/derma/55",
        permanent: true
      },
      {
        source: "/product-category/syrup/diabetic",
        destination: "/product/category/diabetic/60",
        permanent: true
      },
      {
        source: "/product-category/drug",
        destination: "/product/category/drug/63",
        permanent: true
      },
      {
        source: "/product-category/energy-drink",
        destination: "/product/category/energy-drink/49",
        permanent: true
      },
      {
        source: "/product-category/tablets/ent",
        destination: "/product/category/ent/54",
        permanent: true
      },
      {
        source: "/product-category/food",
        destination: "/product/category/food/64",
        permanent: true
      },
      {
        source: "/product-category/tablets/gp",
        destination: "/product/category/gp/51",
        permanent: true
      },
      {
        source: "/product-category/tablets/gynae",
        destination: "/product/category/gynae/52",
        permanent: true
      },
      {
        source: "/product-category/gynaec-range",
        destination: "/product/category/gynaec-range/42",
        permanent: true
      },
      {
        source: "/product-category/herbal",
        destination: "/product/category/herbal/48",
        permanent: true
      },
      {
        source: "/product-category/injectables/injectable",
        destination: "/product/category/injectable/61",
        permanent: true
      },
      {
        source: "/product-category/tablets/neuro",
        destination: "/product/category/neuro/56",
        permanent: true
      },
      {
        source: "/product-category/ointments",
        destination: "/product/category/ointment/39",
        permanent: true
      },
      {
        source: "/product-category/capsules/ortho",
        destination: "/product/category/ortho/50",
        permanent: true
      },
      {
        source: "/product-category/syrup/paediatric",
        destination: "/product/category/paediatric/57",
        permanent: true
      },
      {
        source: "/product-category/protein-powder",
        destination: "/product/category/protein-powder/40",
        permanent: true
      },
      {
        source: "/product-category/sachets",
        destination: "/product/category/sachets/41",
        permanent: true
      },
      {
        source: "/product-category/soap",
        destination: "/product/category/soap/43",
        permanent: true
      },
      {
        source: "/product-category/syrup",
        destination: "/product/category/syrup/36",
        permanent: true
      },
      {
        source: "/product-category/tablets",
        destination: "/product/category/tablets/38",
        permanent: true
      },
      {
        source: "/shop",
        destination: "/products",
        permanent: true
      },
    ]
  }
};

export default nextConfig;
