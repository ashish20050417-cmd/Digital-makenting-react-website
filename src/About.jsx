import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <Navbar />
     
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-medium">
            About Our Company
          </span>

          <h1 className="text-6xl font-bold mt-6 leading-tight">
            Helping Businesses
            <br />
            Grow With
            <span className="text-blue-600"> Digital Innovation</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We are a passionate digital agency focused on delivering
            high-quality web development, app development, SEO, graphic design,
            and SaaS solutions that help businesses succeed online.
          </p>

          <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition">
            Learn More →
          </button>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Team"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-3xl shadow">
            <h2 className="text-4xl font-bold text-blue-600">250+</h2>
            <p className="mt-2 text-gray-600">Happy Clients</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <h2 className="text-4xl font-bold text-blue-600">500+</h2>
            <p className="mt-2 text-gray-600">Projects Completed</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <h2 className="text-4xl font-bold text-blue-600">5+</h2>
            <p className="mt-2 text-gray-600">Years Experience</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <h2 className="text-4xl font-bold text-blue-600">24/7</h2>
            <p className="mt-2 text-gray-600">Support</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow">
            <div className="text-5xl mb-5">🎯</div>

            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>

            <p className="text-gray-600 leading-8">
              To empower businesses with innovative digital solutions that drive
              growth, improve visibility, and maximize customer engagement.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow">
            <div className="text-5xl mb-5">🚀</div>

            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>

            <p className="text-gray-600 leading-8">
              To become a globally trusted digital partner recognized for
              creativity, innovation, and measurable business success.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">Why Choose Us</h2>

            <p className="text-gray-600 mt-4">
              We provide complete digital solutions under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Experienced Team",
              "Innovative Solutions",
              "Client Focused",
              "24/7 Support",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#f8f9fc] p-8 rounded-3xl text-center shadow-sm hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">⭐</div>

                <h3 className="text-xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready To Grow Your Business?
          </h2>

          <p className="text-xl mb-8">
            Let's create something amazing together.
          </p>

          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold">
            Contact Us →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
