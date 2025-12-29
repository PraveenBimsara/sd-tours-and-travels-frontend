import { Link } from "react-router-dom";
import {
  FaPlane,
  FaUmbrellaBeach,
  FaMountain,
  FaHiking,
  FaWhatsapp,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 30, 61, 0.7), rgba(10, 30, 61, 0.7)), url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            SD Tours & Travel
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4">
            Discover Sri Lanka in Comfort, Culture & Style
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            <span className="text-sunsetYellow">SD Tours & Travel</span> is a
            Sri Lanka–based travel company offering carefully crafted cultural,
            adventure, luxury, and customized tours. We focus on authentic
            experiences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/tours"
              className="bg-sunsetYellow hover:bg-sunsetOrange text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 shadow-2xl hover:scale-105"
            >
              Explore Tours
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div>
              <h3 className="text-sunsetYellow font-semibold text-lg mb-2">
                About SD Tours & Travel
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Discover the Soul of Sri Lanka
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                SD Tours & Travel invites you to experience the true beauty of
                Sri Lanka — from ancient heritage sites and lush green mountains
                to breathtaking beaches and rich wildlife. Travel with comfort,
                safety, and local expertise while we turn every journey into a
                memorable story.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We are a Sri Lanka–based travel company offering carefully
                crafted cultural, adventure, luxury, and customized tours. Our
                deep local knowledge and personalized service ensure authentic
                experiences that showcase the best of our beautiful island.
              </p>
              <Link
                to="/about"
                className="inline-block bg-sunsetYellow hover:bg-sunsetOrange text-white px-8 py-3 rounded-full font-semibold transition duration-300 hover:scale-105 shadow-lg"
              >
                Learn More About Us
              </Link>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                  alt="Sri Lankan Cultural Festival"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sunsetYellow rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-skyBlue rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-navy mb-4">
            Why Travel With Us
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide authentic Sri Lankan experiences with personalized
            service and local expertise
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-xl transition duration-300 hover:scale-105">
              <div className="bg-skyBlue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPlane className="text-4xl text-skyBlue" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Local Experts
              </h3>
              <p className="text-gray-600">
                Sri Lanka-based travel company with deep local knowledge
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-xl transition duration-300 hover:scale-105">
              <div className="bg-sunsetOrange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUmbrellaBeach className="text-4xl text-sunsetOrange" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Customized Tours
              </h3>
              <p className="text-gray-600">
                Every journey designed to match your interests and budget
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-xl transition duration-300 hover:scale-105">
              <div className="bg-sunsetYellow/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMountain className="text-4xl text-sunsetYellow" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Comfort & Safety
              </h3>
              <p className="text-gray-600">
                Travel in clean vehicles with experienced, friendly drivers
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-xl transition duration-300 hover:scale-105">
              <div className="bg-skyBlue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHiking className="text-4xl text-skyBlue" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Our team is always available to assist you whenever needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Things To Do Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sunsetYellow font-semibold text-lg mb-2">
              Where will you go next
            </h3>
            <h2 className="text-4xl font-bold text-navy mb-4">Things To Do</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Adventure */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 cursor-pointer">
              <div className="relative h-80">
                <img
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80"
                  alt="Adventure"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Adventure</h3>
                  <p className="text-sm text-white/90">
                    Experience thrilling adventures across Sri Lanka — from
                    scenic hiking trails and waterfall explorations
                  </p>
                </div>
              </div>
            </div>

            {/* Wildlife & Safari */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 cursor-pointer">
              <div className="relative h-80">
                <img
                  src="https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&q=80"
                  alt="Wildlife Safari"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Wildlife & Safari</h3>
                  <p className="text-sm text-white/90">
                    Exclusive wildlife safaris offering close encounters with
                    Sri Lanka's most iconic animals
                  </p>
                </div>
              </div>
            </div>

            {/* Relaxation */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 cursor-pointer">
              <div className="relative h-80">
                <img
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80"
                  alt="Relaxation"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Relaxation Holidays
                  </h3>
                  <p className="text-sm text-white/90">
                    Luxury stays, soothing spa experiences, and calm coastal
                    escapes for pure relaxation
                  </p>
                </div>
              </div>
            </div>

            {/* Train Ride */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 cursor-pointer">
              <div className="relative h-80">
                <img
                  src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80"
                  alt="Train Ride"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Train Ride</h3>
                  <p className="text-sm text-white/90">
                    A relaxing and iconic train journey through Sri Lanka's most
                    beautiful landscapes
                  </p>
                </div>
              </div>
            </div>

            {/* Culture */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 cursor-pointer">
              <div className="relative h-80">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                  alt="Culture"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Culture</h3>
                  <p className="text-sm text-white/90">
                    A cultural journey through ancient heritage, sacred sites,
                    and authentic local traditions
                  </p>
                </div>
              </div>
            </div>

            {/* Beach */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 cursor-pointer">
              <div className="relative h-80">
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
                  alt="Beach"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Beach Escapes</h3>
                  <p className="text-sm text-white/90">
                    Pristine beaches with golden sands and crystal-clear waters
                    perfect for relaxation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Tours Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sunsetYellow font-semibold text-lg mb-2">
              Tour Packages
            </h3>
            <h2 className="text-4xl font-bold text-navy mb-4">
              Trending Tours
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our most popular tour packages designed to give you the
              best Sri Lankan experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Tour Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <span className="absolute top-4 right-4 bg-sunsetOrange text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Featured
                </span>
                <img
                  src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80"
                  alt="Coast Explorer"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-navy mb-2">
                  Coast Explorer
                </h3>
                <p className="text-gray-600 mb-4">
                  9 days (8 Nights) journey offers the perfect blend of Sri
                  Lanka's rich culture, scenic hill country, wildlife, and
                  golden beaches.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sunsetOrange font-semibold text-lg">
                    9 Days / 8 Nights
                  </span>
                  <div className="flex items-center">
                    <span className="text-sunsetYellow">★★★★</span>
                    <span className="text-gray-400">★</span>
                    <span className="text-gray-600 text-sm ml-2">(4.0)</span>
                  </div>
                </div>
                <Link
                  to="/tours/coast-explorer"
                  className="block w-full bg-sunsetYellow hover:bg-sunsetOrange text-white text-center py-3 rounded-full font-semibold transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Tour Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  New
                </span>
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                  alt="Romantic Escape"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-navy mb-2">
                  Romantic Escape
                </h3>
                <p className="text-gray-600 mb-4">
                  8-day(7 Nights) couple tour specially designed for partners
                  seeking romance, nature, adventure, and relaxation.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sunsetOrange font-semibold text-lg">
                    8 Days / 7 Nights
                  </span>
                  <div className="flex items-center">
                    <span className="text-sunsetYellow">★★★★★</span>
                    <span className="text-gray-600 text-sm ml-2">(5.0)</span>
                  </div>
                </div>
                <Link
                  to="/tours/romantic-escape"
                  className="block w-full bg-sunsetYellow hover:bg-sunsetOrange text-white text-center py-3 rounded-full font-semibold transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Tour Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80"
                  alt="Hidden Sri Lanka"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-navy mb-2">
                  Hidden Sri Lanka
                </h3>
                <p className="text-gray-600 mb-4">
                  9-day(8 Nights) journey takes you deep into Sri Lanka's
                  lesser-known landscapes, far from busy tourist routes.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sunsetOrange font-semibold text-lg">
                    9 Days / 8 Nights
                  </span>
                  <div className="flex items-center">
                    <span className="text-sunsetYellow">★★★★</span>
                    <span className="text-gray-400">☆</span>
                    <span className="text-gray-600 text-sm ml-2">(4.1)</span>
                  </div>
                </div>
                <Link
                  to="/tours/hidden-sri-lanka"
                  className="block w-full bg-sunsetYellow hover:bg-sunsetOrange text-white text-center py-3 rounded-full font-semibold transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/tours"
              className="inline-block bg-navy hover:bg-navy/90 text-white px-10 py-4 rounded-full font-semibold transition duration-300 hover:scale-105 shadow-lg"
            >
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sunsetYellow font-semibold text-lg mb-2">
              Guest Testimonials
            </h3>
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Travelers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <span className="text-sunsetYellow text-2xl">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Our 9-day luxury tour was perfectly planned. From cultural
                sites and scenic hills to private safaris and beach resorts,
                everything was seamless and stress-free. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sunsetOrange rounded-full flex items-center justify-center text-white font-bold text-xl">
                  D
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-navy">Daniel R</h4>
                  <p className="text-gray-600 text-sm">Australia</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <span className="text-sunsetYellow text-2xl">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Professional, reliable, and extremely attentive. SD Tours &
                Travel made our Sri Lanka holiday unforgettable with excellent
                service and beautiful locations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-skyBlue rounded-full flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-navy">Maria & Luca</h4>
                  <p className="text-gray-600 text-sm">Italy</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <span className="text-sunsetYellow text-2xl">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "SD Tours delivered an exceptional luxury experience from start
                to finish. Every hotel was stunning, the transport was
                comfortable, and the service was truly personalized."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sunsetYellow rounded-full flex items-center justify-center text-white font-bold text-xl">
                  R
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-navy">Rani</h4>
                  <p className="text-gray-600 text-sm">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
