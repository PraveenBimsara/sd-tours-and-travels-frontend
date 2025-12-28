import { Link } from 'react-router-dom';
import { FaPlane, FaUmbrellaBeach, FaMountain, FaHiking } from 'react-icons/fa';

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
            SD Tours & Travels
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4">
            Discover Sri Lanka in Comfort, Culture & Style
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            <span className='text-sunsetYellow'>SD Tours & Travels</span> is a Sri Lanka–based travel company offering carefully crafted cultural, adventure, luxury, and customized tours. We focus on authentic experiences.
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-navy mb-4">
            Why Travel With Us
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide authentic Sri Lankan experiences with personalized service and local expertise
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-xl transition duration-300 hover:scale-105">
              <div className="bg-skyBlue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPlane className="text-4xl text-skyBlue" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Local Experts</h3>
              <p className="text-gray-600">
                Sri Lanka-based travel company with deep local knowledge
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-xl transition duration-300 hover:scale-105">
              <div className="bg-sunsetOrange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUmbrellaBeach className="text-4xl text-sunsetOrange" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Customized Tours</h3>
              <p className="text-gray-600">
                Every journey designed to match your interests and budget
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-xl transition duration-300 hover:scale-105">
              <div className="bg-sunsetYellow/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMountain className="text-4xl text-sunsetYellow" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Comfort & Safety</h3>
              <p className="text-gray-600">
                Travel in clean vehicles with experienced, friendly drivers
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-xl transition duration-300 hover:scale-105">
              <div className="bg-skyBlue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHiking className="text-4xl text-skyBlue" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our team is always available to assist you whenever needed
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;