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

      {/* ================= HERO SECTION ================= */}

      <section className="bg-[#f8f9fc] border-t">
        <div className="max-w-[1450px] mx-auto px-8 py-14 grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}

          <div>
            {/* Badge */}

            <div className="inline-flex items-center px-6 py-3 rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
              <span className="text-blue-700 font-medium">
                We Build Brands.
              </span>

              <span className="mx-2 text-gray-400">•</span>

              <span className="text-blue-700 font-medium">Drive Traffic.</span>

              <span className="mx-2 text-gray-400">•</span>

              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                Deliver Results.
              </span>
            </div>

            {/* Heading */}

            <h1 className="mt-8 text-[72px] leading-[78px] font-extrabold text-[#071B52]">
              Smart Solutions For
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Success
              </span>
            </h1>

            {/* Description */}

            <p className="mt-8 text-[22px] leading-10 text-gray-600 max-w-xl">
              We are a full-service digital marketing agency offering Web
              Development, E-commerce, App Development, SEO, Local SEO, Graphic
              Designing and SaaS Applications to help your business grow online.
            </p>

            {/* Buttons */}

            <div className="flex gap-5 mt-10">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-9 py-4 rounded-xl font-semibold shadow-lg">
                Our Services →
              </button>

              <button className="border border-blue-300 text-blue-700 px-9 py-4 rounded-xl font-semibold">
                Contact Us →
              </button>
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex justify-end">
            <img src="/hero.png" alt="Hero" className="w-full max-w-[760px]" />
          </div>
        </div>
      </section>
      {/* ================= STATS ================= */}

      <section className="max-w-[1450px] mx-auto px-8 pb-12">
        <div className="flex flex-wrap items-center justify-start gap-20">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
              👥
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-600">250+</h2>

              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-300"></div>

          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-3xl">
              🏆
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-600">500+</h2>

              <p className="text-gray-600">Projects Completed</p>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-300"></div>

          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-3xl">
              🎖️
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-600">5+</h2>

              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= SERVICES TITLE ================= */}

      <section className="max-w-[1450px] mx-auto px-8 pt-10 pb-6 text-center">
        <p className="uppercase tracking-widest text-blue-600 font-semibold">
          OUR SERVICES
        </p>

        <h2 className="text-[52px] font-bold text-[#071B52] mt-3">
          Complete Digital Solutions Under One Roof
        </h2>

        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-5"></div>
      </section>
      {/* ================= SERVICES ================= */}

      <section className="max-w-[1450px] mx-auto px-8 pb-16">
        <div className="grid lg:grid-cols-7 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-[22px] p-7 text-center hover:-translate-y-2 hover:shadow-xl duration-300"
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-6 bg-blue-100 flex items-center justify-center text-4xl">
                {service.icon}
              </div>

              <h3 className="text-[22px] font-bold text-[#071B52]">
                {service.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-7 text-[15px]">
                {service.desc}
              </p>

              <button className="mt-6 text-blue-600 font-semibold">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* ================= WHY CHOOSE US ================= */}

      <section className="max-w-[1450px] mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}

          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
              alt="Team"
              className="rounded-[30px] shadow-xl w-full"
            />
          </div>

          {/* Right Content */}

          <div>
            <span className="text-blue-600 uppercase font-semibold tracking-wider">
              Why Choose Us
            </span>

            <h2 className="text-[52px] font-bold text-[#071B52] mt-4 leading-tight">
              We Build Digital Experiences That Drive Results
            </h2>

            <p className="text-gray-600 text-xl leading-9 mt-6">
              We combine creativity, technology and strategy to deliver
              websites, applications and marketing solutions that help
              businesses grow faster.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">
                  ✔
                </div>

                <span className="text-xl font-semibold text-[#071B52]">
                  Experienced Professionals
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">
                  ✔
                </div>

                <span className="text-xl font-semibold text-[#071B52]">
                  Creative & Modern Designs
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">
                  ✔
                </div>

                <span className="text-xl font-semibold text-[#071B52]">
                  Result Driven Strategy
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">
                  ✔
                </div>

                <span className="text-xl font-semibold text-[#071B52]">
                  Dedicated Customer Support
                </span>
              </div>
            </div>

            <button className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:scale-105 duration-300">
              Learn More →
            </button>
          </div>
        </div>
      </section>
      {/* ================= WHY CHOOSE US STRIP ================= */}

      <section className="max-w-[1450px] mx-auto px-8 pb-20">
        <div className="bg-[#051B5A] rounded-[24px] px-10 py-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Item 1 */}

            <div className="flex items-center gap-5">
              <div className="text-6xl text-blue-500">🛡️</div>

              <div>
                <h3 className="text-white text-2xl font-bold">
                  Quality & Reliability
                </h3>

                <p className="text-blue-100 mt-2 leading-7">
                  We deliver high-quality solutions you can rely on.
                </p>
              </div>
            </div>

            {/* Item 2 */}

            <div className="flex items-center gap-5 border-l border-blue-800 pl-8">
              <div className="text-6xl text-blue-500">🚀</div>

              <div>
                <h3 className="text-white text-2xl font-bold">
                  Performance Driven
                </h3>

                <p className="text-blue-100 mt-2 leading-7">
                  We focus on performance to maximize your growth.
                </p>
              </div>
            </div>

            {/* Item 3 */}

            <div className="flex items-center gap-5 border-l border-blue-800 pl-8">
              <div className="text-6xl text-blue-500">🎧</div>

              <div>
                <h3 className="text-white text-2xl font-bold">
                  Dedicated Support
                </h3>

                <p className="text-blue-100 mt-2 leading-7">
                  Our support team is always here to help you.
                </p>
              </div>
            </div>

            {/* Item 4 */}

            <div className="flex items-center gap-5 border-l border-blue-800 pl-8">
              <div className="text-6xl text-green-400">✅</div>

              <div>
                <h3 className="text-white text-2xl font-bold">
                  On-Time Delivery
                </h3>

                <p className="text-blue-100 mt-2 leading-7">
                  We value time and deliver projects on schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
