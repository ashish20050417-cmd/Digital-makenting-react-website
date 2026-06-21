import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#031B4E] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Logo */}
          <div>
            <img src="/logo.png" alt="Digital Growth" className="h-12 mb-6" />

            <p className="text-gray-300 leading-8">
              We provide end-to-end digital solutions to help businesses build a
              strong online presence and achieve lasting growth.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com/hyy_ashi_ydv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/_sharad_gupta_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/ashish-yadav-b0257239a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.youtube.com/@goluyaduvanshirao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5">QUICK LINKS</h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-5">OUR SERVICES</h3>

            <ul className="space-y-3 text-gray-300">
              <li>Web Development</li>
              <li>E-commerce Development</li>
              <li>App Development</li>
              <li>SEO Services</li>
              <li>Local SEO</li>
              <li>Graphic Designing</li>
              <li>SaaS Applications</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-5">CONTACT US</h3>

            <div className="space-y-5 text-gray-300">
              <p>📍 123, Business Street, New York, NY 10001, USA</p>

              <p>📞 +1 (234) 567-8900</p>

              <p>✉ info@digitalgrowthagency.com</p>

              <p>🌐 www.digitalgrowthagency.com</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-5">NEWSLETTER</h3>

            <p className="text-gray-300 mb-5">
              Subscribe to get the latest updates and offers.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border border-gray-500 rounded-lg px-4 py-3 mb-4"
            />

            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-lg font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-900 mt-12 pt-6 flex flex-col md:flex-row justify-between text-gray-400">
          <p>© 2024 Digital Growth Agency. All Rights Reserved.</p>

          <div className="flex gap-8 mt-4 md:mt-0">
            <Link to="/privacy">Privacy Policy</Link>

            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
