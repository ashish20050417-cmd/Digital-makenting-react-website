import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const location = useLocation();
  const firstRow = [
    {
      slug: "web-development",
      title: "Web Development",
      icon: "💻",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
      desc: "Custom responsive websites built with modern technologies.",

      points: [
        "Responsive Design",
        "React Development",
        "Admin Panel",
        "Maintenance",
      ],

      details: {
        features: [
          "React, Next.js & Vue.js Development",
          "Progressive Web Apps (PWA)",
          "RESTful & GraphQL API Integration",
          "Server-Side Rendering (SSR)",
        ],

        technologies: [
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
          "Tailwind CSS",
        ],
      },
    },

    {
      slug: "e-commerce",
      title: "E-Commerce",
      icon: "🛒",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900",

      desc: "Professional online stores with secure payment integration.",

      points: [
        "Shopping Cart",
        "Payment Gateway",
        "Order Tracking",
        "Inventory",
      ],

      details: {
        features: [
          "iOS & Android Native Apps",
          "React Native & Flutter",
          "Cross-Platform Development",
          "App Store Deployment",
        ],

        technologies: [
          "React Native",
          "Flutter",
          "Swift",
          "Kotlin",
          "Firebase",
        ],
      },
    },
    {
      slug: "app-development",
      title: "App Development",
      icon: "📱",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900",

      desc: "Android & iOS applications with beautiful UI/UX.",

      points: ["Android", "iOS", "Flutter", "Maintenance"],

      details: {
        features: [
          "User Research & Analysis",
          "Wireframing & Prototyping",
          "Visual Design & Branding",
          "Design Systems",
        ],

        technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer"],
      },
    },
  ];
  const secondRow = [
    {
      slug: "seo-services",
      title: "SEO Services",
      icon: "📈",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",

      desc: "Boost your Google rankings and increase organic traffic.",

      points: [
        "On-Page SEO",
        "Off-Page SEO",
        "Keyword Research",
        "Technical SEO",
      ],

      details: {
        features: [
          "On-Page Optimization",
          "Technical SEO Audit",
          "Keyword Research",
          "Competitor Analysis",
        ],

        technologies: [
          "Google Search Console",
          "Google Analytics",
          "Ahrefs",
          "SEMrush",
          "Screaming Frog",
        ],
      },
    },

    {
      slug: "local-seo",
      title: "Local SEO",
      icon: "📍",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900",

      desc: "Get discovered by customers in your local area.",

      points: [
        "Google Business",
        "Local Citations",
        "Location Ranking",
        "Monthly Reports",
      ],

      details: {
        features: [
          "Google Business Profile",
          "Location Optimization",
          "Citation Building",
          "Review Management",
        ],

        technologies: [
          "Google Maps",
          "Google Business",
          "BrightLocal",
          "Whitespark",
          "Moz Local",
        ],
      },
    },

    {
      slug: "graphic-designing",
      title: "Graphic Designing",
      icon: "🎨",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",

      desc: "Creative branding and eye-catching visual designs.",

      points: [
        "Logo Design",
        "Banner Design",
        "Social Media Posts",
        "Brand Identity",
      ],

      details: {
        features: [
          "Logo & Branding",
          "Social Media Creatives",
          "Marketing Materials",
          "Print Design",
        ],

        technologies: [
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Figma",
          "Canva Pro",
          "CorelDRAW",
        ],
      },
    },
  ];
  useEffect(() => {
  if (location.state?.service) {
    const allServices = [
      ...firstRow,
      ...secondRow,
      {
        slug: "saas-applications",
        title: "SaaS Applications",
      },
    ];

    const service = allServices.find(
      (item) => item.slug === location.state.service
    );

    if (service) {
      setSelectedService(service);
    }
  }
}, [location.state]);
  if (selectedService) {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-16">
        <button
          onClick={() => setSelectedService(null)}
          className="text-blue-600 font-semibold mb-8"
        >
          ← Back to Services
        </button>

        <img
          src={selectedService.image}
          alt={selectedService.title}
          className="w-full h-[450px] object-cover rounded-3xl"
        />

        <h1 className="text-5xl font-bold text-[#071B52] mt-8">
          {selectedService.title}
        </h1>

        <p className="text-xl text-gray-600 mt-5">
          {selectedService.desc}
        </p>

        <h2 className="text-3xl font-bold mt-10">
          Key Features
        </h2>

        <div className="mt-5 space-y-3">
          {selectedService.details?.features.map((item, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-green-600">✔</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-10">
          Technologies
        </h2>

        <div className="flex flex-wrap gap-3 mt-5">
          {selectedService.details?.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="max-w-[1450px] mx-auto px-8 pt-20 pb-16 text-center">
        <div className="inline-flex items-center px-6 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold">
          🚀 Professional Digital Solutions
        </div>

        <h1 className="text-[72px] font-extrabold text-[#071B52] leading-none mt-8">
          Our Services
        </h1>

        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>

        <p className="max-w-4xl mx-auto mt-8 text-[22px] leading-10 text-gray-600">
          We provide modern web development, mobile applications, SEO, graphic
          designing and digital marketing services that help businesses grow
          faster.
        </p>
      </section>
      {/* ================= FIRST ROW ================= */}

      <section className="max-w-[1450px] mx-auto px-8 pb-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {firstRow.map((item, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-8 bg-white rounded-[28px] overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl mb-6">
                  {item.icon}
                </div>

                <h2 className="text-3xl font-bold text-[#071B52]">
                  {item.title}
                </h2>

                <p className="text-gray-600 mt-4 leading-8">{item.desc}</p>

                <div className="mt-6 space-y-3">
                  {item.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-green-500">✔</span>

                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <button
  onClick={() => setSelectedService(item)}
  className="mt-8 text-blue-600 font-semibold hover:text-blue-800 transition"
>
  Learn More →
</button>
        
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ================= SECOND ROW ================= */}

      <section className="max-w-[1450px] mx-auto px-8 pb-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {secondRow.map((item, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-8 bg-white rounded-[28px] overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center text-3xl mb-6">
                  {item.icon}
                </div>

                <h2 className="text-3xl font-bold text-[#071B52]">
                  {item.title}
                </h2>

                <p className="text-gray-600 mt-4 leading-8">{item.desc}</p>

                <div className="mt-6 space-y-3">
                  {item.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-green-500">✔</span>

                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <button
  onClick={() => setSelectedService(item)}
  className="mt-8 text-blue-600 font-semibold hover:text-blue-800 transition"
>
  Learn More →
</button>
                
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ================= SAAS APPLICATION ================= */}

      <section className="max-w-[1450px] mx-auto px-8 pb-24">
        <div className="bg-white rounded-[30px] shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center gap-10">
            {/* Left Content */}

            <div className="p-12">
              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl">
                ☁️
              </div>

              <h2 className="text-[48px] font-bold text-[#071B52] mt-8">
                SaaS Applications
              </h2>

              <p className="text-gray-600 text-xl leading-9 mt-6">
                We build secure, scalable and cloud-based SaaS applications that
                help businesses automate their workflow and grow faster.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-8">
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✔</span>
                  <span>Cloud Based</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✔</span>
                  <span>Admin Dashboard</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✔</span>
                  <span>API Integration</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✔</span>
                  <span>Secure Login</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✔</span>
                  <span>Analytics</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✔</span>
                  <span>24×7 Support</span>
                </div>
              </div>

              <Link to="/contact">
                <button className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:scale-105 duration-300">
                  Learn More →
                </button>
              </Link>
            </div>

            {/* Right Image */}

            <div className="p-8">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200"
                alt="SaaS"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ================= WHY CHOOSE OUR SERVICES ================= */}

      <section className="max-w-[1450px] mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold">
            WHY CHOOSE US
          </span>

          <h2 className="text-[58px] font-extrabold text-[#071B52] mt-6">
            Why Businesses Choose Us
          </h2>

          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-9">
            We combine creativity, technology and strategy to deliver
            exceptional digital experiences for every client.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left */}

          <div className="space-y-8">
            <div className="flex gap-6 bg-white rounded-[28px] p-8 shadow-lg hover:shadow-2xl duration-300">
              <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl">
                ⚡
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#071B52]">
                  Fast Delivery
                </h3>

                <p className="text-gray-600 mt-3 leading-8">
                  We deliver projects quickly without compromising quality.
                </p>
              </div>
            </div>

            <div className="flex gap-6 bg-white rounded-[28px] p-8 shadow-lg hover:shadow-2xl duration-300">
              <div className="w-20 h-20 rounded-full bg-purple-600 text-white flex items-center justify-center text-4xl">
                💡
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#071B52]">
                  Creative Ideas
                </h3>

                <p className="text-gray-600 mt-3 leading-8">
                  Every project is designed with creativity and innovation.
                </p>
              </div>
            </div>

            <div className="flex gap-6 bg-white rounded-[28px] p-8 shadow-lg hover:shadow-2xl duration-300">
              <div className="w-20 h-20 rounded-full bg-orange-500 text-white flex items-center justify-center text-4xl">
                🛡️
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#071B52]">
                  Trusted Support
                </h3>

                <p className="text-gray-600 mt-3 leading-8">
                  We provide long-term maintenance and dedicated support.
                </p>
              </div>
            </div>
          </div>

          {/* Right */}

          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
              alt=""
              className="rounded-[30px] shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* ================= CTA ================= */}

      <section className="max-w-[1450px] mx-auto px-8 pb-24">
        <div className="rounded-[24px] bg-gradient-to-r from-blue-700 via-blue-600 to-purple-600 px-10 py-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          {/* Left */}

          <div className="flex items-center gap-8">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg text-5xl">
              🎯
            </div>

            <div>
              <h2 className="text-[42px] font-bold text-white">
                Ready to Grow Your Business?
              </h2>

              <p className="text-blue-100 text-xl mt-2">
                Let's build digital solutions that drive traffic, generate leads
                and increase revenue.
              </p>
            </div>
          </div>

          {/* Right */}

          <button className="bg-white text-[#1D4ED8] px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 duration-300 shadow-lg whitespace-nowrap">
            Get a Free Quote →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
