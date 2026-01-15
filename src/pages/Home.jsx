import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaPlane, FaUmbrellaBeach, FaMountain, FaHiking } from "react-icons/fa";
import background_video from "../assets/background video.mp4";
import { tourAPI, dayTourAPI } from "../services/api";
import { motion } from "framer-motion";
import adventure_img from "../assets/adventure.jpg";
import wildlife_img from "../assets/wildlife.jpg";
import holiday_img from "../assets/hoildays.jpg";
import train_img from "../assets/train.jpg";
import culture_img from "../assets/culture.jpeg";
import beach_img from "../assets/beach.jpg";
import soul_sri_lanka_img from "../assets/soul sri lanka.png";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Home = () => {
  const [trendingTours, setTrendingTours] = useState([]);
  const [dayTours, setDayTours] = useState([]);
  const [loadingTours, setLoadingTours] = useState(true);
  const [loadingDayTours, setLoadingDayTours] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchTrendingTours();
    fetchDayTours();
  }, []);

  const fetchTrendingTours = async () => {
    try {
      const response = await tourAPI.getFeaturedTours();
      setTrendingTours(response.data.data.slice(0, 6)); // Get only 3 tours
    } catch (error) {
      console.error("Error fetching trending tours:", error);
    } finally {
      setLoadingTours(false);
    }
  };

  const fetchDayTours = async () => {
    try {
      const response = await dayTourAPI.getAllDayTours();
      setDayTours(response.data.data.slice(0, 6)); // Get only 6 day tours
    } catch (error) {
      console.error("Error fetching day tours:", error);
    } finally {
      setLoadingDayTours(false);
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={background_video}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            SD Tours & Travel
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4">
            Discover Sri Lanka in Comfort, Culture & Style
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            <span className="text-sunsetYellow">SD Tours & Travel</span> is a
            Sri Lanka–based travel company offering carefully crafted cultural,
            adventure, luxury, and customized tours.
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
                  src={soul_sri_lanka_img}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Travel With Us Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-navy to-navy/90"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Why Travel With Us
          </h2>
          <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
            We provide authentic Sri Lankan experiences with personalized
            service and local expertise
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              variants={fadeUp}
              className="text-center p-6 rounded-xl bg-white/95 hover:shadow-2xl transition duration-300 hover:scale-105"
            >
              <div className="bg-skyBlue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPlane className="text-4xl text-skyBlue" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Local Experts
              </h3>
              <p className="text-gray-600">
                Sri Lanka-based travel company with deep local knowledge
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="text-center p-6 rounded-xl bg-white/95 hover:shadow-2xl transition duration-300 hover:scale-105"
            >
              <div className="bg-sunsetOrange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUmbrellaBeach className="text-4xl text-sunsetOrange" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Customized Tours
              </h3>
              <p className="text-gray-600">
                Every journey designed to match your interests and budget
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="text-center p-6 rounded-xl bg-white/95 hover:shadow-2xl transition duration-300 hover:scale-105"
            >
              <div className="bg-sunsetYellow/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMountain className="text-4xl text-sunsetYellow" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Comfort & Safety
              </h3>
              <p className="text-gray-600">
                Travel in clean vehicles with experienced, friendly drivers
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="text-center p-6 rounded-xl bg-white/95 hover:shadow-2xl transition duration-300 hover:scale-105"
            >
              <div className="bg-skyBlue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHiking className="text-4xl text-skyBlue" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Our team is always available to assist you whenever needed
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Things To Do Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sunsetYellow font-semibold text-lg mb-2">
              Where will you go next
            </h3>
            <h2 className="text-4xl font-bold text-navy mb-4">Things To Do</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Adventure */}
            <motion.div
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 cursor-pointer"
            >
              <div className="relative h-80">
                <img
                  src={adventure_img}
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
            </motion.div>

            {/* Wildlife & Safari */}
            <motion.div
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 cursor-pointer"
            >
              <div className="relative h-80">
                <img
                  src={wildlife_img}
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
            </motion.div>

            {/* Relaxation */}
            <motion.div
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 cursor-pointer"
            >
              <div className="relative h-80">
                <img
                  src={holiday_img}
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
            </motion.div>

            {/* Train Ride */}
            <motion.div
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 cursor-pointer"
            >
              <div className="relative h-80">
                <img
                  src={train_img}
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
            </motion.div>

            {/* Culture */}
            <motion.div
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 cursor-pointer"
            >
              <div className="relative h-80">
                <img
                  src={culture_img}
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
            </motion.div>

            {/* Beach */}
            <motion.div
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 cursor-pointer"
            >
              <div className="relative h-80">
                <img
                  src={beach_img}
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
            </motion.div>
          </div>
        </div>
      </motion.section>

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

          {loadingTours ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-sunsetOrange"></div>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {trendingTours.map((tour) => (
                  <div
                    key={tour._id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      {/* {tour.featured && (
                        <span className="absolute top-4 right-4 bg-sunsetOrange text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                          Featured
                        </span>
                      )} */}
                      <img
                        src={tour.mainImage}
                        alt={tour.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-navy mb-2">
                        {tour.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {tour.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        {/* <span className="text-sunsetOrange font-semibold text-lg">
                          {tour.duration?.days} Days / {tour.duration?.nights}{" "}
                          Nights
                        </span> */}
                        <div className="flex items-center">
                          <span className="text-sunsetYellow">
                            {"★".repeat(Math.floor(tour.rating || 0))}
                          </span>
                          <span className="text-gray-400">
                            {"★".repeat(5 - Math.floor(tour.rating || 0))}
                          </span>
                          <span className="text-gray-600 text-sm ml-2">
                            ({tour.rating?.toFixed(1)})
                          </span>
                        </div>
                      </div>
                      <Link
                        to={`/tours/${tour._id}`}
                        className="block w-full bg-sunsetYellow hover:bg-sunsetOrange text-white text-center py-3 rounded-full font-semibold transition duration-300"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  to="/tours"
                  className="inline-block bg-navy hover:bg-navy/90 text-white px-10 py-4 rounded-full font-semibold transition duration-300 hover:scale-105 shadow-lg"
                >
                  View All Tours
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Day Tours Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sunsetYellow font-semibold text-lg mb-2">
              Day Tours in Sri Lanka
            </h3>
            <h2 className="text-4xl font-bold text-navy mb-4">
              Explore Sri Lanka in a Day
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our day tours are designed for travelers who want to explore Sri
              Lanka without rushing.
            </p>
          </div>

          {loadingDayTours ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-sunsetOrange"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dayTours.map((dayTour) => (
                <div
                  key={dayTour._id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={dayTour.mainImage}
                      alt={dayTour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-2">
                      {dayTour.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {dayTour.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sunsetOrange font-semibold">
                        {dayTour.duration}
                      </span>
                      <div className="flex items-center">
                        <span className="text-sunsetYellow">
                          {"★".repeat(Math.floor(dayTour.rating || 0))}
                        </span>
                        <span className="text-gray-400">
                          {"★".repeat(5 - Math.floor(dayTour.rating || 0))}
                        </span>
                        <span className="text-gray-600 text-sm ml-2">
                          ({dayTour.rating?.toFixed(1)})
                        </span>
                      </div>
                      {/* <span className="text-gray-600 text-sm">
                        From ${dayTour.price}
                      </span> */}
                    </div>
                    <Link
                      to={`/day-tours/${dayTour._id}`}
                      className="block w-full bg-sunsetYellow hover:bg-sunsetOrange text-white text-center py-2.5 rounded-full font-semibold transition duration-300 text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-navy to-navy/90"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
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
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
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
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
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
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
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
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Transportation Section */}
      {/* <section className="py-20 bg-gradient-to-br from-navy to-navy/90">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h3 className="text-sunsetYellow font-semibold text-lg mb-2">
        Our Transportation
      </h3>
      <h2 className="text-4xl font-bold text-white mb-4">
        Reliable Transportation for a Smooth Journey
      </h2>
      <p className="text-white/80 max-w-3xl mx-auto">
        We provide clean, modern, air-conditioned vehicles with professional,
        experienced drivers to ensure safe and comfortable travel throughout
        Sri Lanka.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white/95 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300 text-center">
        <div className="bg-skyBlue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-12 h-12 text-skyBlue" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-navy mb-2">
          Sedan Cars
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          Perfect for couples or small families (1–3 people)
        </p>
        <p className="text-sunsetOrange font-semibold">Air-conditioned</p>
      </div>

      <div className="bg-white/95 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300 text-center">
        <div className="bg-sunsetOrange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-12 h-12 text-sunsetOrange" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-navy mb-2">SUVs</h3>
        <p className="text-gray-600 text-sm mb-3">
          Ideal for families or groups (4–6 people)
        </p>
        <p className="text-sunsetOrange font-semibold">
          Spacious & Comfortable
        </p>
      </div>

      <div className="bg-white/95 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300 text-center">
        <div className="bg-sunsetYellow/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-12 h-12 text-sunsetYellow" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-navy mb-2">Vans</h3>
        <p className="text-gray-600 text-sm mb-3">
          Best for larger groups (7–10 people)
        </p>
        <p className="text-sunsetOrange font-semibold">
          Extra Luggage Space
        </p>
      </div>

      <div className="bg-white/95 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300 text-center">
        <div className="bg-navy/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-12 h-12 text-navy" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-navy mb-2">
          Luxury Coaches
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          For large groups (15+ people)
        </p>
        <p className="text-sunsetOrange font-semibold">
          Premium Experience
        </p>
      </div>
    </div>
  </div>
      </section> */}
    </div>
  );
};

export default Home;
