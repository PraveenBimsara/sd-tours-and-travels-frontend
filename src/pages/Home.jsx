import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaPlane, FaUmbrellaBeach, FaMountain, FaHiking } from "react-icons/fa";
import background_video from "../assets/background video.mp4";
import { tourAPI, dayTourAPI, testimonialAPI } from "../services/api";
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
  const { t } = useTranslation();
  const [trendingTours, setTrendingTours] = useState([]);
  const [dayTours, setDayTours] = useState([]);
  const [loadingTours, setLoadingTours] = useState(true);
  const [loadingDayTours, setLoadingDayTours] = useState(true);
  const [testimonials, setTestimonials] = useState([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchTrendingTours();
    fetchDayTours();
    fetchTestimonials();
  }, []);

  const fetchTrendingTours = async () => {
    try {
      const response = await tourAPI.getFeaturedTours();
      setTrendingTours(response.data.data.slice(0, 6));
    } catch (error) {
      console.error("Error fetching trending tours:", error);
    } finally {
      setLoadingTours(false);
    }
  };

  const fetchDayTours = async () => {
    try {
      const response = await dayTourAPI.getAllDayTours();
      setDayTours(response.data.data.slice(0, 8));
    } catch (error) {
      console.error("Error fetching day tours:", error);
    } finally {
      setLoadingDayTours(false);
    }
  };

  const fetchTestimonials = async () => {
    try {
      setLoadingTestimonials(true);
      const response = await testimonialAPI.getTestimonials({
        status: "approved",
        featured: "true",
      });
      setTestimonials(response.data.data.slice(0, 3));
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      setTestimonials([]);
    } finally {
      setLoadingTestimonials(false);
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={background_video}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4">
            {t('home.hero.subtitle')}
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            {t('home.hero.description')}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/tours"
              className="bg-sunsetYellow hover:bg-sunsetOrange text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 shadow-2xl hover:scale-105"
            >
              {t('home.hero.exploreTours')}
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 hover:scale-105"
            >
              {t('home.hero.contactUs')}
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-sunsetYellow font-semibold text-lg mb-2">
                {t('home.about.badge')}
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                {t('home.about.title')}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t('home.about.description1')}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t('home.about.description2')}
              </p>
              <Link
                to="/about"
                className="inline-block bg-sunsetYellow hover:bg-sunsetOrange text-white px-8 py-3 rounded-full font-semibold transition duration-300 hover:scale-105 shadow-lg"
              >
                {t('home.about.learnMore')}
              </Link>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
                <img
                  src={soul_sri_lanka_img}
                  className="w-full h-[600px] object-cover"
                  alt="Soul of Sri Lanka"
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
            {t('home.features.title')}
          </h2>
          <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
            {t('home.features.subtitle')}
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
                {t('home.features.localExperts.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.features.localExperts.description')}
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
                {t('home.features.customized.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.features.customized.description')}
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
                {t('home.features.comfort.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.features.comfort.description')}
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
                {t('home.features.support.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.features.support.description')}
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
              {t('home.thingsToDo.badge')}
            </h3>
            <h2 className="text-4xl font-bold text-navy mb-4">
              {t('home.thingsToDo.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <h3 className="text-2xl font-bold mb-2">
                    {t('home.thingsToDo.adventure.title')}
                  </h3>
                  <p className="text-sm text-white/90">
                    {t('home.thingsToDo.adventure.description')}
                  </p>
                </div>
              </div>
            </motion.div>

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
                  <h3 className="text-2xl font-bold mb-2">
                    {t('home.thingsToDo.wildlife.title')}
                  </h3>
                  <p className="text-sm text-white/90">
                    {t('home.thingsToDo.wildlife.description')}
                  </p>
                </div>
              </div>
            </motion.div>

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
                    {t('home.thingsToDo.relaxation.title')}
                  </h3>
                  <p className="text-sm text-white/90">
                    {t('home.thingsToDo.relaxation.description')}
                  </p>
                </div>
              </div>
            </motion.div>

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
                  <h3 className="text-2xl font-bold mb-2">
                    {t('home.thingsToDo.train.title')}
                  </h3>
                  <p className="text-sm text-white/90">
                    {t('home.thingsToDo.train.description')}
                  </p>
                </div>
              </div>
            </motion.div>

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
                  <h3 className="text-2xl font-bold mb-2">
                    {t('home.thingsToDo.culture.title')}
                  </h3>
                  <p className="text-sm text-white/90">
                    {t('home.thingsToDo.culture.description')}
                  </p>
                </div>
              </div>
            </motion.div>

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
                  <h3 className="text-2xl font-bold mb-2">
                    {t('home.thingsToDo.beach.title')}
                  </h3>
                  <p className="text-sm text-white/90">
                    {t('home.thingsToDo.beach.description')}
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
              {t('home.trendingTours.badge')}
            </h3>
            <h2 className="text-4xl font-bold text-navy mb-4">
              {t('home.trendingTours.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('home.trendingTours.subtitle')}
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
                        {t('home.trendingTours.viewDetails')}
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
                  {t('home.trendingTours.viewAll')}
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
              {t('home.dayTours.badge')}
            </h3>
            <h2 className="text-4xl font-bold text-navy mb-4">
              {t('home.dayTours.title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('home.dayTours.subtitle')}
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
                    </div>
                    <Link
                      to={`/day-tours/${dayTour._id}`}
                      className="block w-full bg-sunsetYellow hover:bg-sunsetOrange text-white text-center py-2.5 rounded-full font-semibold transition duration-300 text-sm"
                    >
                      {t('home.trendingTours.viewDetails')}
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
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="py-20 bg-gradient-to-br from-navy to-navy/90"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sunsetYellow font-semibold text-lg mb-2">
              {t('home.testimonials.badge')}
            </h3>
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('home.testimonials.title')}
            </h2>
          </div>

          {loadingTestimonials ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-sunsetYellow"></div>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/80 text-lg">
                No testimonials available at the moment.
              </p>
            </div>
          ) : (
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <motion.div
                  variants={fadeUp}
                  key={testimonial._id}
                  className="bg-white rounded-2xl p-8 shadow-xl"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-sunsetYellow text-2xl">
                      {"★".repeat(testimonial.rating)}
                      {"☆".repeat(5 - testimonial.rating)}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.review}"
                  </p>
                  {testimonial.tourName && (
                    <p className="text-sm text-sunsetOrange font-semibold mb-4">
                      Tour: {testimonial.tourName}
                    </p>
                  )}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-sunsetOrange to-sunsetYellow rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-navy">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.country}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/reviews"
              className="inline-block bg-sunsetYellow hover:bg-sunsetOrange text-white px-10 py-4 rounded-full font-semibold transition duration-300 hover:scale-105 shadow-lg"
            >
              {t('home.trendingTours.viewAll')} Reviews
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;