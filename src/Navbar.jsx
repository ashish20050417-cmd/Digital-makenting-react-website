import { Link, NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          {/* Replace with your logo */}
          <img
            src="digit.png"
            className="h-40"
            alt="logo"
          />

          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-wide">
              DIGITAL GROWTH
            </h1>

            <p className="text-xs tracking-[7px] text-slate-700 uppercase">
              Agency
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-[16px] font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-slate-700 hover:text-blue-600 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-slate-700 hover:text-blue-600 transition"
            }
          >
            About
          </NavLink>

          <div className="relative group">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "flex items-center gap-2 text-slate-700 hover:text-blue-600 transition"
              }
            >
              Services
              {/* <FaChevronDown className="text-xs" /> */}
            </NavLink>

            <div className=" ">
              {/* <Link
      to="/services"
      className="block px-5 py-2 hover:bg-gray-100"
    >
      Web Development
    </Link>

    <Link
      to="/services"
      className="block px-5 py-2 hover:bg-gray-100"
    >
      App Development
    </Link>

    <Link
      to="/services"
      className="block px-5 py-2 hover:bg-gray-100"
    >
      SEO Services
    </Link> */}
            </div>
          </div>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-slate-700 hover:text-blue-600 transition"
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-slate-700 hover:text-blue-600 transition"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/ecommerce"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-slate-700 hover:text-blue-600 transition"
            }
          >
            E-Commerce
          </NavLink>
        </nav>

        {/* CTA Button */}

        <Link to="/contact">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-7 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
            Get a Free Quote →
          </button>
        </Link>
      </div>
    </header>
  );
}
