import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAllSimple, setShowAllSimple] = useState(false);

  const simpleWebsites = [
    {
      title: "Minimal Interiors",
      category: "Interior Design",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
    },
    {
      title: "HealthPlus Clinic",
      category: "Healthcare",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900",
    },
    {
      title: "BizGrow Solutions",
      category: "Business Consulting",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900",
    },
    {
      title: "QuickBite",
      category: "Food & Restaurant",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900",
    },
    {
      title: "Creative Studio",
      category: "Portfolio",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
    },
    {
      title: "Law Firm",
      category: "Legal",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900",
    },
    {
      title: "Hotel Booking",
      category: "Hospitality",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900",
    },
    {
      title: "Education Hub",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <Navbar />

      {/* ================= HERO SECTION ================= */}

      <section className="max-w-[1450px] mx-auto px-8 pt-16 pb-10 text-center">
        <h1 className="text-[72px] font-extrabold leading-none text-[#071B52]">
          Our Work Gallery
        </h1>

        <p className="text-gray-600 text-[22px] mt-6 max-w-4xl mx-auto leading-10">
          Explore some of our recent projects. Each website is designed with
          creativity, performance and user experience in mind.
        </p>

        {/* Categories */}

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-7 py-3 rounded-full font-semibold ${
              activeCategory === "all"
                ? "bg-blue-600 text-white"
                : "border border-gray-300 bg-white hover:bg-blue-50"
            }`}
          >
            All Projects
          </button>

          <button
            onClick={() => setActiveCategory("simple")}
            className={`px-7 py-3 rounded-full font-semibold ${
              activeCategory === "simple"
                ? "bg-blue-600 text-white"
                : "border border-gray-300 bg-white hover:bg-blue-50"
            }`}
          >
            Simple Websites
          </button>

          <button
            onClick={() => setActiveCategory("animated")}
            className={`px-7 py-3 rounded-full font-semibold ${
              activeCategory === "animated"
                ? "bg-blue-600 text-white"
                : "border border-gray-300 bg-white hover:bg-blue-50"
            }`}
          >
            Animated Websites
          </button>

          <button
            onClick={() => setActiveCategory("cinematic")}
            className={`px-7 py-3 rounded-full font-semibold ${
              activeCategory === "cinematic"
                ? "bg-blue-600 text-white"
                : "border border-gray-300 bg-white hover:bg-blue-50"
            }`}
          >
            Cinematic Websites
          </button>

          <button
            onClick={() => setActiveCategory("ecommerce")}
            className={`px-7 py-3 rounded-full font-semibold ${
              activeCategory === "ecommerce"
                ? "bg-blue-600 text-white"
                : "border border-gray-300 bg-white hover:bg-blue-50"
            }`}
          >
            E-commerce
          </button>

          <button
            onClick={() => setActiveCategory("webapp")}
            className={`px-7 py-3 rounded-full font-semibold ${
              activeCategory === "webapp"
                ? "bg-blue-600 text-white"
                : "border border-gray-300 bg-white hover:bg-blue-50"
            }`}
          >
            Web Applications
          </button>
        </div>
      </section>
      {/* ================= SIMPLE WEBSITES ================= */}
      {(activeCategory === "all" || activeCategory === "simple") && (
        <section className="max-w-[1450px] mx-auto px-8 py-12">
          {/* Heading */}

          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="text-3xl">🖥️</div>

                <div>
                  <h2 className="text-[32px] font-bold text-[#071B52]">
                    Simple Websites
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Clean, modern and responsive websites for businesses.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowAllSimple(!showAllSimple)}
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              {showAllSimple ? "Show Less ←" : "View All →"}
            </button>
          </div>

          {/* Cards */}

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {[
              {
                title: "Minimal Interiors",
                category: "Interior Design",
                image:
                  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
              },

              {
                title: "HealthPlus Clinic",
                category: "Healthcare",
                image:
                  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900",
              },

              {
                title: "BizGrow Solutions",
                category: "Business Consulting",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900",
              },

              {
                title: "QuickBite",
                category: "Food & Restaurant",
                image:
                  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[180px] object-cover"
                />

                <div className="p-5">
                  <h3 className="text-[22px] font-bold text-[#071B52]">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-1">{item.category}</p>

                  <button className="mt-5 flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
                    View Website →<span>↗</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* ================= ANIMATED WEBSITES ================= */}
      {(activeCategory === "all" || activeCategory === "animated") && (
        <section className="max-w-[1450px] mx-auto px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="text-3xl">✨</div>

              <div>
                <h2 className="text-[32px] font-bold text-[#071B52]">
                  Animated Websites
                </h2>

                <p className="text-gray-500">
                  Engaging websites with smooth animations and interactions.
                </p>
              </div>
            </div>

            <button className="text-blue-600 font-semibold hover:text-blue-700">
              View All →
            </button>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {[
              {
                title: "TechNova",
                category: "Technology",
                image:
                  "https://images.unsplash.com/photo-1516321318423-f06f85e504b?w=900",
              },

              {
                title: "CreativeFlow Agency",
                category: "Digital Agency",
                image:
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
              },

              {
                title: "Wanderlust Travels",
                category: "Travel & Tourism",
                image:
                  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
              },

              {
                title: "EduSmart",
                category: "Education",
                image:
                  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-2 duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[180px] object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#071B52]">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-1">{item.category}</p>

                  <button className="mt-5 text-blue-600 font-semibold">
                    View Website →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* ================= CINEMATIC WEBSITES ================= */}
      {(activeCategory === "all" || activeCategory === "cinematic") && (
        <section className="max-w-[1450px] mx-auto px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🎬</div>

              <div>
                <h2 className="text-[32px] font-bold text-[#071B52]">
                  Cinematic Websites
                </h2>

                <p className="text-gray-500">
                  High-end, visually stunning websites with cinematic
                  experience.
                </p>
              </div>
            </div>

            <button className="text-blue-600 font-semibold hover:text-blue-700">
              View All →
            </button>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {[
              {
                title: "Chronos Watches",
                category: "Luxury Watches",
                image:
                  "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=900",
              },
              {
                title: "Skyline Residences",
                category: "Real Estate",
                image:
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900",
              },
              {
                title: "AutoDrive",
                category: "Automotive",
                image:
                  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900",
              },
              {
                title: "Visionary Films",
                category: "Film Production",
                image:
                  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-2 duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[180px] object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#071B52]">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-1">{item.category}</p>

                  <button className="mt-5 text-blue-600 font-semibold hover:text-blue-700">
                    View Website →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* ================= E-COMMERCE WEBSITES ================= */}
      {(activeCategory === "all" || activeCategory === "ecommerce") && (
        <section className="max-w-[1450px] mx-auto px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🛒</div>

              <div>
                <h2 className="text-[32px] font-bold text-[#071B52]">
                  E-commerce Websites
                </h2>

                <p className="text-gray-500">
                  Powerful online stores that drive sales and business growth.
                </p>
              </div>
            </div>

            <button className="text-blue-600 font-semibold">View All →</button>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {[
              {
                title: "StyleHub",
                category: "Fashion Store",
                image:
                  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900",
              },
              {
                title: "GadgetMart",
                category: "Electronics",
                image:
                  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900",
              },
              {
                title: "FurniCasa",
                category: "Furniture",
                image:
                  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
              },
              {
                title: "Organic Life",
                category: "Organic Products",
                image:
                  "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-2 duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[180px] object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#071B52]">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-1">{item.category}</p>

                  <button className="mt-5 text-blue-600 font-semibold">
                    View Website →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* ================= WEB APPLICATIONS ================= */}
      {(activeCategory === "all" || activeCategory === "webapp") && (
        <section className="max-w-[1450px] mx-auto px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="text-3xl">📦</div>

              <div>
                <h2 className="text-[32px] font-bold text-[#071B52]">
                  Web Applications
                </h2>

                <p className="text-gray-500">
                  Robust and scalable web applications built for performance.
                </p>
              </div>
            </div>

            <button className="text-blue-600 font-semibold">View All →</button>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {[
              {
                title: "Sales Dashboard",
                category: "Analytics",
                image: "https://picsum.photos/600/400?1",
              },
              {
                title: "TaskPro",
                category: "Project Management",
                image: "https://picsum.photos/600/400?2",
              },
              {
                title: "ClientFlow CRM",
                category: "CRM",
                image: "https://picsum.photos/600/400?3",
              },
              {
                title: "SchoolHub",
                category: "Education",
                image: "https://picsum.photos/600/400?4",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-2 duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[180px] object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#071B52]">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-1">{item.category}</p>

                  <button className="mt-5 text-blue-600 font-semibold">
                    View Website →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* ================= CTA ================= */}

      <section className="max-w-[1450px] mx-auto px-8 py-20">
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700 rounded-[28px] px-12 py-10 flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-5xl shadow-lg">
              🚀
            </div>

            <div>
              <h2 className="text-white text-4xl font-bold">
                Let's Build Something Amazing Together
              </h2>

              <p className="text-blue-100 mt-3 text-lg">
                We're ready to help you take your business to the next level.
              </p>
            </div>
          </div>

          <button className="mt-8 lg:mt-0 bg-white text-blue-700 px-10 py-4 rounded-xl font-bold hover:scale-105 duration-300">
            Get a Free Quote →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
