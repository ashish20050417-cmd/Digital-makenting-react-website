import Navbar from "./Navbar";
import Footer from "./Footer";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <Navbar />

      {/* ================= HERO SECTION ================= */}

      <section className="max-w-[1450px] mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}

        <div>
          <p className="uppercase text-blue-600 font-bold tracking-wider text-sm mb-5">
            ABOUT US
          </p>

          <h1 className="text-[64px] leading-[72px] font-extrabold text-[#071B52]">
            We Are Digital Growth
            <br />
            Your Growth Is
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Our Mission.
            </span>
          </h1>

          <p className="mt-8 text-[20px] leading-9 text-gray-600 max-w-xl">
            At Digital Growth Agency, we help businesses establish a powerful
            online presence and achieve measurable growth through innovative
            digital solutions. We combine creativity, technology and data-driven
            strategies to deliver results that matter.
          </p>

          {/* Feature Icons */}

          <div className="grid grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-4xl mx-auto">
                🚀
              </div>

              <h3 className="font-bold mt-5">Results Driven</h3>

              <p className="text-gray-500 text-sm mt-2">
                We focus on strategies that deliver real growth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-4xl mx-auto">
                👥
              </div>

              <h3 className="font-bold mt-5">Client Focused</h3>

              <p className="text-gray-500 text-sm mt-2">
                Your success is our priority.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center text-4xl mx-auto">
                🏆
              </div>

              <h3 className="font-bold mt-5">Transparent</h3>

              <p className="text-gray-500 text-sm mt-2">
                Clear communication & honest reporting.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-4xl mx-auto">
                🛡️
              </div>

              <h3 className="font-bold mt-5">Reliable Support</h3>

              <p className="text-gray-500 text-sm mt-2">
                We're with you at every step.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}

        <div>
          <img
            src="/about-team.jpg"
            alt="About Team"
            className="rounded-[28px] shadow-2xl w-full"
          />
        </div>
      </section>

      {/* ================= OUR STORY ================= */}

      <section className="max-w-[1450px] mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 items-center">
          {/* Left */}

          <div>
            <h2 className="text-[48px] font-bold text-[#071B52] relative inline-block">
              Our Story
              <span className="absolute left-0 -bottom-3 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h2>

            <p className="mt-10 text-gray-600 leading-9 text-[19px]">
              Digital Growth Agency was founded with a simple idea — to help
              businesses succeed in the digital world. What started as a small
              team of passionate professionals has grown into a full-service
              digital agency trusted by clients worldwide.
            </p>

            <p className="mt-8 text-gray-600 leading-9 text-[19px]">
              We believe every business has a unique story, and our goal is to
              tell that story through powerful websites, smart marketing,
              stunning designs and scalable applications.
            </p>
          </div>

          {/* Right Stats */}

          <div className="bg-white rounded-[30px] shadow-lg p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl mx-auto">
                  👥
                </div>

                <h3 className="text-4xl font-bold text-blue-600 mt-5">250+</h3>

                <p className="text-gray-600 mt-2">Happy Clients</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-3xl mx-auto">
                  💼
                </div>

                <h3 className="text-4xl font-bold text-blue-600 mt-5">500+</h3>

                <p className="text-gray-600 mt-2">Projects Completed</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-3xl mx-auto">
                  🏆
                </div>

                <h3 className="text-4xl font-bold text-blue-600 mt-5">5+</h3>

                <p className="text-gray-600 mt-2">Years Experience</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl mx-auto">
                  🌍
                </div>

                <h3 className="text-4xl font-bold text-blue-600 mt-5">20+</h3>

                <p className="text-gray-600 mt-2">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= OUR VALUES ================= */}

      <section className="max-w-[1450px] mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-[50px] font-bold text-[#071B52] relative inline-block">
            Our Values
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-24 h-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Card 1 */}

          <div className="bg-white rounded-[28px] p-8 text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-4xl mx-auto">
              💡
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#071B52]">
              Innovation
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              We embrace new ideas and technologies to build better solutions.
            </p>
          </div>

          {/* Card 2 */}

          <div className="bg-white rounded-[28px] p-8 text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-4xl mx-auto">
              🎯
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#071B52]">
              Excellence
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              We are committed to delivering the highest quality in everything.
            </p>
          </div>

          {/* Card 3 */}

          <div className="bg-white rounded-[28px] p-8 text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center text-4xl mx-auto">
              🤝
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#071B52]">
              Integrity
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              Honest communication and long-term trusted relationships.
            </p>
          </div>

          {/* Card 4 */}

          <div className="bg-white rounded-[28px] p-8 text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-4xl mx-auto">
              ❤️
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#071B52]">
              Collaboration
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              We work closely with our clients as partners.
            </p>
          </div>

          {/* Card 5 */}

          <div className="bg-white rounded-[28px] p-8 text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center text-4xl mx-auto">
              📈
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#071B52]">Growth</h3>

            <p className="mt-4 text-gray-600 leading-8">
              Helping our clients scale their businesses successfully.
            </p>
          </div>
        </div>
      </section>
      {/* ================= MEET OUR TEAM ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#071B52]">Meet Our Team</h2>

          <p className="text-gray-600 mt-4 text-lg">
            Meet the professionals behind our success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "John Anderson",
              role: "Founder & CEO",
              img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500",
            },

            {
              name: "Sarah Wilson",
              role: "Creative Director",
              img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
            },

            {
              name: "Michael Brown",
              role: "Lead Developer",
              img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
            },

            {
              name: "Emily Davis",
              role: "Marketing Manager",
              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-36 h-36 rounded-full object-cover mx-auto border-4 border-blue-100"
              />

              <h3 className="mt-6 text-2xl font-bold text-[#071B52]">
                {member.name}
              </h3>

              <p className="text-blue-600 mt-2">{member.role}</p>

              <div className="flex justify-center gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 duration-300"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center hover:scale-110 duration-300"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:scale-110 duration-300"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ================= CTA BANNER ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700 rounded-3xl px-12 py-10 flex flex-col lg:flex-row items-center justify-between shadow-2xl">
          {/* Left Side */}

          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-xl">
              <span className="text-5xl">🚀</span>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">
                Let's Build Something Amazing Together
              </h2>

              <p className="text-blue-100 mt-3 text-lg">
                We're ready to help you take your business to the next level.
              </p>
            </div>
          </div>

          {/* Right Side */}

          <button className="mt-8 lg:mt-0 bg-white text-blue-700 font-semibold px-10 py-4 rounded-xl shadow-lg hover:scale-105 duration-300">
            Get a Free Quote →
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
