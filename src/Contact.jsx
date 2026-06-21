import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  FaHeadset,
  FaWhatsapp,
  FaCalendarAlt,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      alert("Please enter a valid phone number");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        service: "",
        message: "",
      });

    } catch (err) {
      console.log(err);
      alert("Failed to send message");
    }
  };

  return (
    <div className="bg-[#f8f9fc] min-h-screen">
      <Navbar />

      {/* ================= HERO CONTACT ================= */}

      <section className="max-w-[1450px] mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}

          <div>
            <p className="uppercase text-blue-600 font-semibold tracking-wider mb-6">
              GET IN TOUCH
            </p>

            <h1 className="text-[72px] leading-[78px] font-extrabold text-[#071B52]">
              Let's Build Something
              <br />
              Amazing
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Together
              </span>
            </h1>

            <p className="mt-8 text-[21px] leading-10 text-gray-600 max-w-xl">
              Have a project in mind or need expert advice? We're here to help
              you grow your business with innovative digital solutions.
            </p>

            {/* CONTACT INFO */}

            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
                  📍
                </div>

                <div>
                  <h3 className="font-bold text-2xl text-[#071B52]">
                    Our Office
                  </h3>

                  <p className="text-gray-600 mt-1">
                    123, Business Street,
                    <br />
                    New York, NY 10001, USA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
                  📞
                </div>

                <div>
                  <h3 className="font-bold text-2xl text-[#071B52]">Call Us</h3>

                  <p className="text-gray-600 mt-1">+1 (234) 567-8900</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
                  ✉️
                </div>

                <div>
                  <h3 className="font-bold text-2xl text-[#071B52]">
                    Email Us
                  </h3>

                  <p className="text-gray-600 mt-1">
                    info@digitalgrowthagency.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
                  🕒
                </div>

                <div>
                  <h3 className="font-bold text-2xl text-[#071B52]">
                    Working Hours
                  </h3>

                  <p className="text-gray-600 mt-1">
                    Mon - Fri : 9:00 AM - 6:00 PM
                  </p>

                  <p className="text-gray-600">Sat - Sun : Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="bg-white rounded-[30px] shadow-xl p-10 border">
            <h2 className="text-[42px] font-bold text-[#071B52]">
              Send Us a Message
            </h2>

            <p className="text-gray-600 mt-3 mb-8">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <form
  className="space-y-6"
  onSubmit={handleSubmit}
>
              {/* Row 1 */}

              <div className="grid md:grid-cols-2 gap-5">
                <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your Name *"
  className="w-full h-16 border border-gray-200 rounded-xl px-5 outline-none focus:border-blue-600"
/>

                <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Your Email *"
  className="w-full h-16 border border-gray-200 rounded-xl px-5 outline-none focus:border-blue-600"
/>
              </div>

              {/* Row 2 */}

              <div className="grid md:grid-cols-2 gap-5">
              <input
  type="tel"
  name="phone"
  value={formData.phone}
  maxLength={10}
  onChange={handleChange}
  placeholder="Phone Number"
  className="w-full h-16 border border-gray-200 rounded-xl px-5 outline-none focus:border-blue-600"
/>

                <input
  type="text"
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  placeholder="Subject"
  className="w-full h-16 border border-gray-200 rounded-xl px-5 outline-none focus:border-blue-600"
/>
              </div>

              {/* Services */}

             <select
  name="service"
  value={formData.service}
  onChange={handleChange}
  className="w-full h-16 border border-gray-200 rounded-xl px-5 outline-none focus:border-blue-600"
>
                <option value="">Services You're Interested In</option>

                <option>Web Development</option>

                <option>App Development</option>

                <option>SEO Services</option>

                <option>Graphic Designing</option>

                <option>SaaS Applications</option>
              </select>

              {/* Message */}

             <textarea
  rows="6"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Your Message *"
  className="w-full border border-gray-200 rounded-xl p-5 outline-none resize-none focus:border-blue-600"
></textarea>

              {/* Checkbox */}

              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5" />

                <p className="text-gray-600">
                  I agree to the
                  <span className="text-blue-600 font-medium">
                    {" "}
                    Privacy Policy
                  </span>{" "}
                  and
                  <span className="text-blue-600 font-medium">
                    {" "}
                    Terms & Conditions.
                  </span>
                </p>
              </div>

              {/* Button */}

            <button
  type="submit"
  className="w-full h-16 rounded-xl text-white text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl duration-300"
>
  Send Message →
</button>
            </form>
          </div>
        </div>
      </section>
      {/* ================= CONTACT OPTIONS ================= */}

      <section className="max-w-[1450px] mx-auto px-8 py-20">
        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            WE ARE HERE TO HELP
          </p>

          <h2 className="text-[46px] font-bold text-[#071B52] mt-3 relative inline-block">
            Choose the best way to reach us
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-24 h-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">
          {/* Live Chat */}

          <div className="bg-white rounded-[28px] p-10 shadow hover:shadow-xl duration-300 text-center">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
              <FaHeadset className="text-4xl text-blue-600" />
            </div>

            <h3 className="text-2xl font-bold mt-6 text-[#071B52]">
              Live Chat
            </h3>

            <p className="text-gray-600 mt-4 leading-8">
              Chat with our support team in real-time for instant help.
            </p>

            <button className="mt-6 text-blue-600 font-semibold">
              Start Live Chat →
            </button>
          </div>

          {/* WhatsApp */}

          <div className="bg-white rounded-[28px] p-10 shadow hover:shadow-xl duration-300 text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
              <FaWhatsapp className="text-4xl text-green-600" />
            </div>

            <h3 className="text-2xl font-bold mt-6 text-[#071B52]">WhatsApp</h3>

            <p className="text-gray-600 mt-4 leading-8">
              Message us on WhatsApp for quick assistance.
            </p>

            <button className="mt-6 text-green-600 font-semibold">
              +1 (234) 567-8900
            </button>
          </div>

          {/* Meeting */}

          <div className="bg-white rounded-[28px] p-10 shadow hover:shadow-xl duration-300 text-center">
            <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mx-auto">
              <FaCalendarAlt className="text-4xl text-purple-600" />
            </div>

            <h3 className="text-2xl font-bold mt-6 text-[#071B52]">
              Schedule a Meeting
            </h3>

            <p className="text-gray-600 mt-4 leading-8">
              Book a free consultation with our experts.
            </p>

            <button className="mt-6 text-blue-600 font-semibold">
              Schedule Now →
            </button>
          </div>

          {/* General */}

          <div className="bg-white rounded-[28px] p-10 shadow hover:shadow-xl duration-300 text-center">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
              <FaTelegramPlane className="text-4xl text-blue-600" />
            </div>

            <h3 className="text-2xl font-bold mt-6 text-[#071B52]">
              General Inquiries
            </h3>

            <p className="text-gray-600 mt-4 leading-8">
              For any general questions or information.
            </p>

            <button className="mt-6 text-blue-600 font-semibold break-all">
              info@digitalgrowthagency.com
            </button>
          </div>
        </div>
      </section>
      {/* ================= MAP SECTION ================= */}

      <section className="max-w-[1450px] mx-auto px-8 pb-20">
        <div className="relative rounded-[30px] overflow-hidden shadow-lg">
          {/* Map Image */}

          <img
            src="/map-india.png"
            alt="India Map"
            className="w-full h-[520px] object-cover"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
