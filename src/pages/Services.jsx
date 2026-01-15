import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCar,
  FaHotel,
  FaPlane,
  FaMapMarkedAlt,
  FaUsers,
  FaCamera,
  FaUtensils,
  FaPassport,
  FaHeadset,
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";
import cultural_triangle from "../assets/cultural triangle.png";
import hill_places from "../assets/hill places.png";
import coastal_area from "../assets/coastal area.png";
import wildlife_zones from "../assets/wildlife zones.png";
import urban_centers from "../assets/urban centers.png";
import hidden_places from "../assets/hidden places.png";

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

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [
    {
      icon: <FaCar className="text-5xl text-sunsetOrange" />,
      title: "Private Transportation",
      description:
        "Travel in comfort with our modern, air-conditioned vehicles. Experienced, English-speaking drivers ensure safe and pleasant journeys throughout Sri Lanka.",
      features: [
        "Modern, well-maintained vehicles",
        "Professional, licensed drivers",
        "Air-conditioned comfort",
        "Flexible pickup locations",
      ],
    },
    {
      icon: <FaHotel className="text-5xl text-skyBlue" />,
      title: "Accommodation Booking",
      description:
        "From luxury hotels to boutique guesthouses, we arrange the perfect accommodation to match your preferences and budget.",
      features: [
        "Handpicked hotels & resorts",
        "Best rates guaranteed",
        "Various budget options",
        "Beach, mountain, or city stays",
      ],
    },
    {
      icon: <FaMapMarkedAlt className="text-5xl text-sunsetYellow" />,
      title: "Customized Tours",
      description:
        "Design your perfect Sri Lankan adventure. We create personalized itineraries based on your interests, schedule, and travel style.",
      features: [
        "Tailored to your preferences",
        "Flexible scheduling",
        "Cultural, adventure, or relaxation",
        "Expert local guidance",
      ],
    },
    {
      icon: <FaPlane className="text-5xl text-navy" />,
      title: "Airport Transfers",
      description:
        "Hassle-free pickups and drop-offs from Bandaranaike International Airport. Welcome service with comfortable, direct transfers to your destination.",
      features: [
        "Meet & greet service",
        "24/7 availability",
        "Direct to your hotel",
        "Flight monitoring included",
      ],
    },
    {
      icon: <FaUsers className="text-5xl text-sunsetOrange" />,
      title: "Expert Tour Guides",
      description:
        "Our knowledgeable, multilingual guides bring Sri Lanka's history and culture to life with engaging stories and local insights.",
      features: [
        "Licensed professional guides",
        "Multiple languages available",
        "Deep cultural knowledge",
        "Passionate storytellers",
      ],
    },
    {
      icon: <FaCamera className="text-5xl text-skyBlue" />,
      title: "Photography Tours",
      description:
        "Capture Sri Lanka's stunning landscapes and vibrant culture. We know the best spots and perfect timing for incredible photographs.",
      features: [
        "Scenic photography locations",
        "Golden hour planning",
        "Wildlife photography",
        "Cultural event access",
      ],
    },
    {
      icon: <FaUtensils className="text-5xl text-sunsetYellow" />,
      title: "Culinary Experiences",
      description:
        "Discover authentic Sri Lankan cuisine through cooking classes, food tours, and reservations at the finest local restaurants.",
      features: [
        "Traditional cooking classes",
        "Street food tours",
        "Restaurant recommendations",
        "Tea plantation visits",
      ],
    },
    {
      icon: <FaPassport className="text-5xl text-navy" />,
      title: "Visa Assistance",
      description:
        "We guide you through the visa application process for Sri Lanka, making your travel preparation smooth and stress-free.",
      features: [
        "ETA application help",
        "Document guidance",
        "Requirement clarification",
        "Fast processing support",
      ],
    },
    {
      icon: <FaHeadset className="text-5xl text-sunsetOrange" />,
      title: "24/7 Support",
      description:
        "Round-the-clock assistance throughout your journey. We're always available via phone, WhatsApp, or email for any needs.",
      features: [
        "Immediate response",
        "Emergency assistance",
        "Travel adjustments",
        "Local problem solving",
      ],
    },
  ];

  const additionalServices = [
    "Train ticket reservations",
    "Domestic flight bookings",
    "Safari park reservations",
    "Cultural show tickets",
    "Spa & wellness bookings",
    "Adventure activity arrangements",
    "Wedding & honeymoon planning",
    "Group tour coordination",
    "Corporate travel services",
    "Event planning assistance",
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/8dc52542-5b7c-43d5-4d37-4faa76ba9400/public')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 text-white flex items-center justify-center flex-col">
          <div className="max-w-3xl">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Comprehensive travel solutions for your perfect Sri Lankan
                experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Everything You Need for an Unforgettable Journey
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              At{" "}
              <span className="text-sunsetOrange font-semibold">
                SD Tours & Travel
              </span>
              , we offer a complete range of services to ensure your Sri Lankan
              adventure is seamless, comfortable, and memorable. From the moment
              you arrive until your departure, we handle every detail with care
              and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="py-16 bg-navy"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                variants={fadeUp}
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 hover:scale-105"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-navy mb-4 text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-navy text-center mb-12">
              Additional Services We Offer
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-sunsetYellow/10 p-4 rounded-lg hover:bg-sunsetYellow/20 transition"
                >
                  <FaCheckCircle className="text-sunsetOrange flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <motion.section variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy text-center mb-12">
            Why Choose SD Tours & Travel?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Reason 1 */}
            <motion.div variants={fadeUp} className="text-center bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 hover:scale-105">
              <div className="bg-skyBlue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                Local Expertise
              </h3>
              <p className="text-gray-600">
                Sri Lanka-based company with deep knowledge of the island
              </p>
            </motion.div>

            {/* Reason 2 */}
            <motion.div variants={fadeUp} className="text-center bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 hover:scale-105">
              <div className="bg-sunsetOrange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                Quality Service
              </h3>
              <p className="text-gray-600">
                High standards of service with attention to every detail
              </p>
            </motion.div>

            {/* Reason 3 */}
            <motion.div variants={fadeUp} className="text-center bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 hover:scale-105">
              <div className="bg-sunsetYellow/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Best Value</h3>
              <p className="text-gray-600">
                Competitive prices without compromising on quality
              </p>
            </motion.div>

            {/* Reason 4 */}
            <motion.div variants={fadeUp} className="text-center bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 hover:scale-105">
              <div className="bg-navy/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                Personal Touch
              </h3>
              <p className="text-gray-600">
                Customized experiences tailored to your preferences
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-navy text-center mb-8">
              Where We Operate
            </h2>
            <p className="text-gray-700 text-center text-lg mb-12">
              We provide services throughout Sri Lanka, covering all major
              destinations and hidden gems
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Cultural Triangle */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer">
                <div className="relative h-80">
                  <img
                    src={cultural_triangle}
                    alt="Cultural Triangle"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-3">
                      Cultural Triangle
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Anuradhapura",
                        "Polonnaruwa",
                        "Sigiriya",
                        "Dambulla",
                        "Kandy",
                      ].map((place, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                        >
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hill Places */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer">
                <div className="relative h-80">
                  <img
                    src={hill_places}
                    alt="Hill Country"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-3">Hill Places</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Nuwara Eliya",
                        "Ella",
                        "Horton Plains",
                        "Tea Plantations",
                      ].map((place, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                        >
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Coastal Areas */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer">
                <div className="relative h-80">
                  <img
                    src={coastal_area}
                    alt="Coastal Areas"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-2">Coastal Areas</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Galle",
                        "Mirissa",
                        "Bentota",
                        "Trincomalee",
                        "Arugam Bay",
                      ].map((place, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                        >
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Wildlife Zones */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer">
                <div className="relative h-80">
                  <img
                    src={wildlife_zones}
                    alt="Wildlife Zones"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-2">Wildlife Zones</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Yala", "Udawalawa", "Minneriya", "Wilpattu"].map(
                        (place, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                          >
                            {place}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Urban Centers */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer">
                <div className="relative h-80">
                  <img
                    src={urban_centers}
                    alt="Urban Centers"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-2">Urban Centers</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Colombo", "Negombo", "Galle", "Kandy"].map(
                        (place, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                          >
                            {place}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Off the Beaten Path */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer">
                <div className="relative h-80">
                  <img
                    src={hidden_places}
                    alt="Off the Beaten Path"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-2">
                      Off the Beaten Path
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Hidden temples",
                        "Local villages",
                        "Secret beaches",
                      ].map((place, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                        >
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sunsetOrange to-sunsetYellow">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience Sri Lanka?
            </h2>
            <p className="text-white text-xl mb-8">
              Let us handle the details while you enjoy the journey. Contact us
              today to plan your perfect Sri Lankan adventure!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-sunsetOrange hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition duration-300 hover:scale-105 shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="/tours"
                className="bg-navy hover:bg-navy/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 hover:scale-105 shadow-lg"
              >
                View Our Tours
              </a>
              <a
                href="https://wa.me/94774064437"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <FaWhatsapp /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
