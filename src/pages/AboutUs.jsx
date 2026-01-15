import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  const sectionRef = useRef(null);
  const stats = [
    { number: 3, suffix: "+", label: "Years Experience" },
    { number: 40, suffix: "+", label: "Happy Travelers" },
    { number: 50, suffix: "+", label: "Tours Completed" },
  ];

  const [activeValue, setActiveValue] = useState(0);

  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    window.scrollTo(0, 0);
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
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const duration = 2000; // total animation time (ms)
    const interval = 30;
    const steps = duration / interval;

    const counters = stats.map((stat, index) => {
      let current = 0;
      const increment = stat.number / steps;

      return setInterval(() => {
        current += increment;

        setAnimatedStats((prev) => {
          const updated = [...prev];
          updated[index] =
            current >= stat.number ? stat.number : Math.ceil(current);
          return updated;
        });

        if (current >= stat.number) {
          clearInterval(counters[index]);
        }
      }, interval);
    });

    return () => counters.forEach(clearInterval);
  }, []);

  const values = [
    {
      icon: <FaHeart className="text-4xl" />,
      title: "Passion for Travel",
      description:
        "We love what we do and it shows in every tour we create. Our passion for Sri Lanka drives us to share its beauty with the world.",
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Safety First",
      description:
        "Your safety is our top priority. We maintain the highest standards in vehicle maintenance, driver training, and tour planning.",
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Personal Service",
      description:
        "Every traveler is unique. We customize experiences to match your interests, budget, and travel style for unforgettable memories.",
    },
    {
      icon: <FaLeaf className="text-4xl" />,
      title: "Sustainable Tourism",
      description:
        "We're committed to responsible tourism that preserves Sri Lanka's natural beauty and supports local communities.",
    },
  ];

  const teamMembers = [
    {
      name: "Sunil De Silva",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      description:
        "With over 15 years in tourism, Sunil founded SD Tours to share his love for Sri Lanka's hidden gems.",
    },
    {
      name: "Nimal Perera",
      role: "Head Guide",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
      description:
        "A certified tour guide with deep knowledge of Sri Lankan history, culture, and wildlife.",
    },
    {
      name: "Chaminda Silva",
      role: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      description:
        "Ensures every tour runs smoothly with meticulous planning and attention to detail.",
    },
  ];

  const whyChooseUs = [
    {
      icon: <FaMapMarkedAlt className="text-4xl text-skyBlue" />,
      title: "Local Expertise",
      description:
        "Born and raised in Sri Lanka, we know every corner of this beautiful island and share insider knowledge you won't find in guidebooks.",
    },
    {
      icon: <FaCar className="text-4xl text-sunsetOrange" />,
      title: "Premium Vehicles",
      description:
        "Travel in comfort with our fleet of modern, air-conditioned vehicles maintained to the highest standards.",
    },
    {
      icon: <FaUsers className="text-4xl text-sunsetYellow" />,
      title: "Expert Guides",
      description:
        "Our licensed guides are passionate storytellers who bring Sri Lanka's history and culture to life.",
    },
    {
      icon: <FaGlobe className="text-4xl text-skyBlue" />,
      title: "Custom Itineraries",
      description:
        "Every traveler is different. We design personalized tours that match your interests and pace.",
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
              "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 text-white flex items-center justify-center flex-col">
          <div className="max-w-3xl">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About SD Tours & Travel
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                My name is Samith Uddika and I live in Sri Lanka. Would you like
                to get to know my wonderful homeland?
              </p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Link
                to="/tours"
                className="bg-sunsetYellow hover:bg-sunsetOrange text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg hover:scale-105"
              >
                Explore Tours
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full font-semibold transition duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={sectionRef} className="py-16 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
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
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-sunsetYellow font-semibold text-lg mb-2">
                Our Story
              </h3>
              <h2 className="text-4xl font-bold text-navy mb-6">
                Born from a Love for Sri Lanka
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  SD Tours & Travel was founded by Samith Uddika, a Sri Lankan
                  native with an unquenchable passion for his homeland. After
                  years of working in the tourism industry, Samith recognized a
                  gap in the market for authentic, personalized travel
                  experiences.
                </p>
                <p>
                  Sri Lanka is an island in the Indian Ocean that captivates
                  visitors with its stunning natural beauty and diversity. It
                  boasts picturesque beaches as well as mountains, forests, and
                  waterfalls. The diverse cultures and religions make Sri Lanka
                  a truly unique experience. It is therefore rightly known as
                  the "Pearl of the Indian Ocean."
                </p>
                <p>
                  Our mission remains unchanged: to create unforgettable
                  journeys that go beyond typical tourist experiences,
                  connecting travelers with the heart and soul of Sri Lanka
                  through its culture, nature, and warm-hearted people.
                </p>
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
    <div
      className="text-center mb-12"
      variants={fadeUp}
    >
      <h3 className="text-sunsetYellow font-semibold text-lg mb-2">
        What Makes Us Different
      </h3>
      <h2 className="text-4xl font-bold text-navy mb-4">
        Why Choose SD Tours & Travel
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        We're not just another tour company. Here's what sets us apart.
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
              What We Stand For
            </h3>
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sunsetOrange to-sunsetYellow">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Explore Sri Lanka?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Let us create a personalized journey that matches your dreams. Your
            Sri Lankan adventure awaits!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/tours"
              className="bg-white text-sunsetOrange hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold transition duration-300 hover:scale-105 shadow-lg"
            >
              View Our Tours
            </Link>
            <Link
              to="/contact"
              className="bg-navy hover:bg-navy/90 text-white px-10 py-4 rounded-full text-lg font-semibold transition duration-300 hover:scale-105 shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
