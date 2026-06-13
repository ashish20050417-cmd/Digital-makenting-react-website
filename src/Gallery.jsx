import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Gallery() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    "https://images.unsplash.com/photo-1552664730-d307ca884978",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-medium mb-6">
          Our Gallery
        </div>

        <h1 className="text-6xl font-extrabold mb-6">
          Explore Our
          <span className="text-orange-500"> Gallery</span>
        </h1>

        <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-8">
          Take a look at our training sessions, student projects, workshops,
          classroom environment, placements and success stories.
        </p>
      </section>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
            <h2 className="text-4xl font-bold text-orange-500">5000+</h2>
            <p className="text-gray-600 mt-2">Students Trained</p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
            <h2 className="text-4xl font-bold text-orange-500">100+</h2>
            <p className="text-gray-600 mt-2">Live Projects</p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
            <h2 className="text-4xl font-bold text-orange-500">95%</h2>
            <p className="text-gray-600 mt-2">Placement Rate</p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
            <h2 className="text-4xl font-bold text-orange-500">20+</h2>
            <p className="text-gray-600 mt-2">Courses</p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Our Activities & Events</h2>

          <p className="text-gray-600 text-lg">
            Explore moments from our institute.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={`${image}?q=80&w=1200&auto=format&fit=crop`}
                  alt="Gallery"
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Training Session</h3>

                <p className="text-gray-600">
                  Practical learning and hands-on project experience.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-[40px] p-12 text-white text-center shadow-xl">
          <h2 className="text-5xl font-extrabold mb-6">
            Join Our Learning Community
          </h2>

          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Become part of a growing community of students building successful
            careers in Design & Drafting.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">
            <button className="bg-white text-orange-500 font-bold px-8 py-4 rounded-full hover:scale-105 transition">
              Enroll Now
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
