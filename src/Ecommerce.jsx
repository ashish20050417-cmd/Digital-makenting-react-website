import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ecommerceServices = [
  {
    title: "Reconciliation",
    icon: "📊",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700",

    description:
      "Accurate reconciliation of orders, payments, returns, and settlements across all marketplaces.",

    features: [
      "Order Reconciliation",
      "Settlement Reports",
      "Payment Verification",
      "GST Reports",
    ],

    details: {
      features: [
        "Daily Order Matching",
        "Settlement Verification",
        "Return & Refund Tracking",
        "GST Invoice Matching",
      ],

      technologies: [
        "Amazon Seller Central",
        "Flipkart Seller Hub",
        "Excel",
        "Tally Prime",
        "Zoho Books",
      ],
    },
  },
  {
    title: "Sales Management",
    icon: "📈",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700",
    description:
      "Increase sales with performance tracking and marketplace optimization.",
    features: [
      "Sales Reports",
      "Business Growth",
      "Performance Analysis",
      "Marketing Strategy",
    ],
    details: {
      features: [
        "Sales Dashboard",
        "Business Reports",
        "Campaign Analysis",
        "Inventory Planning",
      ],

      technologies: [
        "Amazon Ads",
        "Flipkart Ads",
        "Google Analytics",
        "Power BI",
        "Excel",
      ],
    },
  },

  {
    title: "Products Listing",
    icon: "📦",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700",
    description:
      "Professional product listing with SEO optimized titles and descriptions.",
    features: [
      "SEO Title",
      "Description Writing",
      "Keyword Research",
      "Category Optimization",
    ],
    details: {
      features: [
        "SEO Optimized Titles",
        "A+ Content",
        "Keyword Research",
        "Variation Listing",
      ],

      technologies: ["Amazon", "Flipkart", "Meesho", "Canva", "Helium10"],
    },
  },

  {
    title: "Product Photoshoot",
    icon: "📸",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700",

    description:
      "High-quality product photography for better customer engagement.",

    features: [
      "White Background",
      "Lifestyle Images",
      "Infographics",
      "Editing",
    ],

    details: {
      features: [
        "Professional Product Photography",
        "White Background Images",
        "Lifestyle & Creative Shoots",
        "Premium Image Editing",
      ],

      technologies: [
        "Adobe Photoshop",
        "Lightroom",
        "Canva Pro",
        "DSLR Camera",
        "Studio Lighting",
      ],
    },
  },

  {
    title: "E-commerce Account Re-launch",
    icon: "🚀",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=700",

    description:
      "Restart inactive or low-performing seller accounts with complete optimization.",

    features: [
      "Account Audit",
      "Optimization",
      "Growth Plan",
      "Marketplace Setup",
    ],

    details: {
      features: [
        "Complete Account Audit",
        "Listing Optimization",
        "Performance Improvement",
        "Marketplace Growth Strategy",
      ],

      technologies: [
        "Amazon Seller Central",
        "Flipkart Seller Hub",
        "Meesho Seller Panel",
        "Excel",
        "Power BI",
      ],
    },
  },

  {
    title: "Suspended Account Activation",
    icon: "🔓",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700",

    description:
      "Recover suspended seller accounts with expert documentation and appeals.",

    features: [
      "Appeal Letter",
      "Documentation",
      "Policy Compliance",
      "Account Recovery",
    ],

    details: {
      features: [
        "Appeal Letter Preparation",
        "Complete Documentation",
        "Policy Compliance Review",
        "Fast Account Recovery",
      ],

      technologies: [
        "Amazon Seller Central",
        "Flipkart Seller Hub",
        "Meesho",
        "Microsoft Word",
        "PDF Documentation",
      ],
    },
  },
];

export default function Ecommerce() {
  const [selectedService, setSelectedService] = useState(null);
  if (selectedService) {
    return (
      <div className="bg-[#F8FAFC] min-h-screen">
        <Navbar />

        <div className="max-w-7xl mx-auto px-8 py-16">
          <button
            onClick={() => setSelectedService(null)}
            className="mb-8 text-blue-500 font-semibold hover:underline"
          >
            ← Back to E-commerce Services
          </button>

          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="w-full h-[450px] object-cover rounded-3xl"
          />

          <h1 className="text-5xl font-bold text-[#071B52] mt-8">
            {selectedService.title}
          </h1>

          <p className="text-xl text-gray-600 mt-6 leading-9">
            {selectedService.description}
          </p>

          <h2 className="text-3xl font-bold text-[#071B52] mt-10">
            Key Features
          </h2>

          <div className="mt-5 space-y-4">
            {selectedService.details?.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✔</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-[#071B52] mt-10">
            Technologies
          </h2>

          <div className="flex flex-wrap gap-3 mt-5">
            {selectedService.details?.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link to="/contact">
            <button className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
              Contact Us →
            </button>
          </Link>
        </div>

        <Footer />
      </div>
    );
  }
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-bold text-slate-900">
              Our E-commerce Services
            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
              We help sellers grow their business on Amazon, Flipkart, Meesho,
              Myntra and other marketplaces with complete account management
              services.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {ecommerceServices.map((service, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-8 bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <div className="text-6xl mb-5">{service.icon}</div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="text-green-600 font-bold">✔</span>

                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedService(service)}
                  className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
