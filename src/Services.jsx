
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: "💻",
      desc: "Modern, responsive and high-performance websites for businesses.",
    },
    {
      title: "E-Commerce Development",
      icon: "🛒",
      desc: "Professional online stores with secure payment integration.",
    },
    {
      title: "App Development",
      icon: "📱",
      desc: "Android and iOS applications with modern UI/UX.",
    },
    {
      title: "SEO Optimization",
      icon: "📈",
      desc: "Improve rankings and drive more organic traffic.",
    },
    {
      title: "Graphic Designing",
      icon: "🎨",
      desc: "Creative branding, social media and marketing designs.",
    },
    {
      title: "Digital Marketing",
      icon: "🚀",
      desc: "Increase reach, engagement and conversions online.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-medium mb-6">
          Our Services
        </div>

        <h1 className="text-6xl font-extrabold mb-6">
          Professional
          <span className="text-orange-500"> Digital Services</span>
        </h1>

        <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-8">
          We provide complete digital solutions designed to help businesses
          grow, attract customers and achieve success.
        </p>
      </section>

      {/* Service Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-8 shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center text-5xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-3xl font-bold mb-4">{service.title}</h3>

              <p className="text-gray-600 leading-8 text-lg">{service.desc}</p>

              <button className="mt-6 text-orange-500 font-bold hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-[40px] shadow-lg p-12">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Why Choose Us?</h2>

            <p className="text-gray-600 text-lg">
              We focus on quality, innovation and customer success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-bold text-xl">Fast Delivery</h3>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-bold text-xl">Expert Team</h3>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="font-bold text-xl">Innovative Ideas</h3>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="font-bold text-xl">24/7 Support</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">Our Working Process</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {["Consultation", "Planning", "Development", "Launch"].map(
            (step, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] p-8 text-center shadow-sm"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold mb-5">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold">{step}</h3>
              </div>
            ),
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-[40px] p-12 text-center text-white shadow-xl">
          <h2 className="text-5xl font-extrabold mb-6">
            Ready To Start Your Project?
          </h2>

          <p className="text-xl mb-8">
            Let's create something amazing together.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">
            <button className="bg-white text-orange-500 font-bold px-8 py-4 rounded-full hover:scale-105 transition">
              Get Started
            </button>

            <button className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-orange-500 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
