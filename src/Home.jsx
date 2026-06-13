import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      desc: "Modern responsive websites built for performance.",
    },
    {
      icon: "🛒",
      title: "E-Commerce",
      desc: "Online stores that convert visitors into customers.",
    },
    {
      icon: "📱",
      title: "App Development",
      desc: "Android & iOS applications for growing businesses.",
    },
    {
      icon: "🔍",
      title: "SEO Services",
      desc: "Improve rankings and increase organic traffic.",
    },
    {
      icon: "📍",
      title: "Local SEO",
      desc: "Get discovered by nearby customers.",
    },
    {
      icon: "🎨",
      title: "Graphic Design",
      desc: "Creative visuals that strengthen your brand.",
    },
    {
      icon: "☁️",
      title: "SaaS Solutions",
      desc: "Cloud-based tools to scale your business.",
    },
  ];

  return (
    <div className="bg-[#f8f9fc] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-5 py-2 rounded-full bg-blue-50 border text-blue-600 font-medium mb-6">
            We Build Brands. Drive Traffic. Deliver Results.
          </div>

          <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900">
            Smart Solutions For
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Success
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Complete digital marketing, development and growth solutions
            designed to help businesses dominate online.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold">
              Our Services →
            </button>

            <button className="border border-blue-300 text-blue-600 px-8 py-4 rounded-xl font-semibold">
              Contact Us →
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-14">
            <div>
              <h3 className="text-4xl font-bold text-blue-600">250+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">500+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">5+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
<div className="relative flex justify-center">
  <img
    src="/hero.png"
    alt="Digital Growth Agency"
    className="w-full max-w-3xl"
   
  />
</div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-blue-600 uppercase font-semibold">
            Our Services
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Complete Digital Solutions Under One Roof
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="/team.jpg"
            alt="Team"
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-5xl font-bold mb-6">
              Why Choose Digital Growth?
            </h2>

            <div className="space-y-6">
              <div>✅ Experienced Team</div>
              <div>✅ Data Driven Marketing</div>
              <div>✅ Transparent Reporting</div>
              <div>✅ Result Focused Strategy</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold mb-12">
            What Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Amit", "Rahul", "Priya"].map((name) => (
              <div
                key={name}
                className="bg-gray-50 rounded-3xl p-8"
              >
                <div className="text-yellow-500 text-xl mb-4">
                  ★★★★★
                </div>

                <p className="text-gray-600">
                  Excellent service and great results for our business.
                </p>

                <h4 className="font-bold mt-4">
                  {name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 text-center">
          <h2 className="text-5xl font-bold">
            Ready To Grow Your Business?
          </h2>

          <p className="mt-4 text-lg">
            Let's build something amazing together.
          </p>

          <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}