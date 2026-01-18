import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaUsers,
  FaGlobe,
  FaHeart,
  FaShieldAlt,
  FaCar,
  FaMapMarkedAlt,
  FaHandshake,
  FaLeaf,
} from "react-icons/fa";
import { testimonialAPI } from "../services/api";
import wildlife_img from "../assets/wildlife.jpg";
import culture_img from "../assets/culture.jpeg";
import beach_img from "../assets/beach.jpg";
import adventure_img from "../assets/adventure.jpg";

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

const AboutUs = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  
  const stats = [
    { number: 3, suffix: "+", label: t('about.stats.experience') },
    { number: 40, suffix: "+", label: t('about.stats.travelers') },
    { number: 50, suffix: "+", label: t('about.stats.tours') },
  ];

  const [activeValue, setActiveValue] = useState(0);
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const [testimonials, setTestimonials] = useState([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const startCountUp = () => {
    setAnimatedStats(stats.map(() => 0));

    const duration = 2000;
    const interval = 30;
    const steps = duration / interval;

    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.number / steps;

      const counter = setInterval(() => {
        current += increment;

        setAnimatedStats((prev) => {
          const updated = [...prev];
          updated[index] =
            current >= stat.number ? stat.number : Math.ceil(current);
          return updated;
        });

        if (current >= stat.number) {
          clearInterval(counter);
        }
      }, interval);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCountUp();
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  const values = [
    {
      icon: <FaHeart className="text-4xl" />,
      title: t('about.values.passion.title'),
      description: t('about.values.passion.description'),
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: t('about.values.safety.title'),
      description: t('about.values.safety.description'),
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: t('about.values.service.title'),
      description: t('about.values.service.description'),
    },
    {
      icon: <FaLeaf className="text-4xl" />,
      title: t('about.values.sustainable.title'),
      description: t('about.values.sustainable.description'),
    },
  ];

  const whyChooseUs = [
    {
      icon: <FaMapMarkedAlt className="text-4xl text-skyBlue" />,
      title: t('about.whyChoose.expertise.title'),
      description: t('about.whyChoose.expertise.description'),
    },
    {
      icon: <FaCar className="text-4xl text-sunsetOrange" />,
      title: t('about.whyChoose.vehicles.title'),
      description: t('about.whyChoose.vehicles.description'),
    },
    {
      icon: <FaUsers className="text-4xl text-sunsetYellow" />,
      title: t('about.whyChoose.guides.title'),
      description: t('about.whyChoose.guides.description'),
    },
    {
      icon: <FaGlobe className="text-4xl text-skyBlue" />,
      title: t('about.whyChoose.custom.title'),
      description: t('about.whyChoose.custom.description'),
    },
  ];

  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://niqcgroup.com/assets/uploads/2020/07/images/1593624295aboutus.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 text-white flex items-center justify-center flex-col">
          <div className="max-w-3xl">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {t('about.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                {t('about.hero.subtitle')}
              </p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Link
                to="/tours"
                className="bg-sunsetYellow hover:bg-sunsetOrange text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg hover:scale-105"
              >
                {t('about.hero.exploreTours')}
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full font-semibold transition duration-300 hover:scale-105"
              >
                {t('about.hero.contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={sectionRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 text-center"
              >
                <h3 className="text-5xl font-bold text-sunsetOrange">
                  {animatedStats[index]}
                  {stat.suffix}
                </h3>
                <p className="text-gray-600 font-bold mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-sunsetYellow font-semibold text-lg mb-2">
                {t('about.story.badge')}
              </h3>
              <h2 className="text-4xl font-bold text-navy mb-6">
                {t('about.story.title')}
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>{t('about.story.paragraph1')}</p>
                <p>{t('about.story.paragraph2')}</p>
                <p>{t('about.story.paragraph3')}</p>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={wildlife_img}
                  alt="Sri Lankan Wildlife"
                  className="rounded-2xl shadow-xl h-64 w-full object-cover"
                />
                <img
                  src={culture_img}
                  alt="Sri Lankan Culture"
                  className="rounded-2xl shadow-xl h-64 w-full object-cover mt-8"
                />
                <img
                  src={beach_img}
                  alt="Sri Lankan Beach"
                  className="rounded-2xl shadow-xl h-64 w-full object-cover -mt-8"
                />
                <img
                  src={adventure_img}
                  alt="Sri Lankan Adventure"
                  className="rounded-2xl shadow-xl h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <motion.section
        className="py-20 bg-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sunsetYellow font-semibold text-lg mb-2">
              {t('about.whyChoose.badge')}
            </h3>
            <h2 className="text-4xl font-bold text-navy mb-4">
              {t('about.whyChoose.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('about.whyChoose.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
              >
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-navy/90 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sunsetYellow font-semibold text-lg mb-2">
              {t('about.values.badge')}
            </h3>
            <h2 className="text-4xl font-bold mb-4">
              {t('about.values.title')}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Value Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {values.map((value, index) => (
                <button
                  key={index}
                  onClick={() => setActiveValue(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
                    activeValue === index
                      ? "bg-sunsetYellow text-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {value.title}
                </button>
              ))}
            </div>

            {/* Active Value Content */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-center">
              <div className="flex justify-center mb-6 text-sunsetYellow">
                {values[activeValue].icon}
              </div>
              <h3 className="text-3xl font-bold mb-4">
                {values[activeValue].title}
              </h3>
              <p className="text-xl text-white/90 leading-relaxed">
                {values[activeValue].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sunsetYellow font-semibold text-lg mb-2">
              {t('home.testimonials.badge')}
            </h3>
            <h2 className="text-4xl font-bold text-navy mb-4">
              {t('home.testimonials.title')}
            </h2>
          </div>

          {loadingTestimonials ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-sunsetOrange"></div>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                {t('about.testimonials.noReviews')}
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
                      {t('about.testimonials.tour')}: {testimonial.tourName}
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
              {t('about.testimonials.viewAll')}
            </Link>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sunsetOrange to-sunsetYellow">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('about.cta.title')}
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t('about.cta.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/tours"
              className="bg-white text-sunsetOrange hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold transition duration-300 hover:scale-105 shadow-lg"
            >
              {t('about.cta.viewTours')}
            </Link>
            <Link
              to="/contact"
              className="bg-navy hover:bg-navy/90 text-white px-10 py-4 rounded-full text-lg font-semibold transition duration-300 hover:scale-105 shadow-lg"
            >
              {t('about.cta.getInTouch')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;