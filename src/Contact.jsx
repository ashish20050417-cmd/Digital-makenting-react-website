import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div className="bg-[#f8f9fc] min-h-screen">
      <Navbar />

      {/* Hero Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div>
            <p className="text-blue-600 font-semibold uppercase mb-4">
              Get In Touch
            </p>

            <h1 className="text-6xl font-bold leading-tight text-slate-900">
              Let's Build Something
              <br />
              Amazing{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Together
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Have a project in mind or need expert advice? We're here to help
              you grow your business with innovative digital solutions.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
                  📍
                </div>

                <div>
                  <h3 className="font-bold text-xl">Our Office</h3>
                  <p className="text-gray-600">
                    123 Business Street, New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
                  📞
                </div>

                <div>
                  <h3 className="font-bold text-xl">Call Us</h3>
                  <p className="text-gray-600">+1 (234) 567-8900</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
                  ✉️
                </div>

                <div>
                  <h3 className="font-bold text-xl">Email Us</h3>
                  <p className="text-gray-600">info@digitalgrowthagency.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
                  ⏰
                </div>

                <div>
                  <h3 className="font-bold text-xl">Working Hours</h3>

                  <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>

                  <p className="text-gray-600">Sat - Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-4xl font-bold mb-3">Send Us a Message</h2>

            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="border rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  placeholder="Your Email *"
                  className="border rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border rounded-xl px-4 py-4 outline-none"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="border rounded-xl px-4 py-4 outline-none"
                />
              </div>

              <select className="w-full border rounded-xl px-4 py-4">
                <option>Services You're Interested In</option>
                <option>Web Development</option>
                <option>SEO Services</option>
                <option>Graphic Design</option>
                <option>App Development</option>
              </select>

              <textarea
                rows="6"
                placeholder="Your Message *"
                className="w-full border rounded-xl px-4 py-4"
              ></textarea>

              <div className="flex items-center gap-3">
                <input type="checkbox" />

                <span className="text-gray-600">
                  I agree to the Privacy Policy and Terms & Conditions.
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
