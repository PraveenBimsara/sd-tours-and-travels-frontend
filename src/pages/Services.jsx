import { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <FaCar className="text-5xl text-sunsetOrange" />,
      title: t('services.main.transportation.title'),
      description: t('services.main.transportation.description'),
      features: [
        t('services.main.transportation.features.0'),
        t('services.main.transportation.features.1'),
        t('services.main.transportation.features.2'),
        t('services.main.transportation.features.3'),
      ],
    },
    {
      icon: <FaHotel className="text-5xl text-skyBlue" />,
      title: t('services.main.accommodation.title'),
      description: t('services.main.accommodation.description'),
      features: [
        t('services.main.accommodation.features.0'),
        t('services.main.accommodation.features.1'),
        t('services.main.accommodation.features.2'),
        t('services.main.accommodation.features.3'),
      ],
    },
    {
      icon: <FaMapMarkedAlt className="text-5xl text-sunsetYellow" />,
      title: t('services.main.customized.title'),
      description: t('services.main.customized.description'),
      features: [
        t('services.main.customized.features.0'),
        t('services.main.customized.features.1'),
        t('services.main.customized.features.2'),
        t('services.main.customized.features.3'),
      ],
    },
    {
      icon: <FaPlane className="text-5xl text-navy" />,
      title: t('services.main.airport.title'),
      description: t('services.main.airport.description'),
      features: [
        t('services.main.airport.features.0'),
        t('services.main.airport.features.1'),
        t('services.main.airport.features.2'),
        t('services.main.airport.features.3'),
      ],
    },
    {
      icon: <FaUsers className="text-5xl text-sunsetOrange" />,
      title: t('services.main.guides.title'),
      description: t('services.main.guides.description'),
      features: [
        t('services.main.guides.features.0'),
        t('services.main.guides.features.1'),
        t('services.main.guides.features.2'),
        t('services.main.guides.features.3'),
      ],
    },
    {
      icon: <FaCamera className="text-5xl text-skyBlue" />,
      title: t('services.main.photography.title'),
      description: t('services.main.photography.description'),
      features: [
        t('services.main.photography.features.0'),
        t('services.main.photography.features.1'),
        t('services.main.photography.features.2'),
        t('services.main.photography.features.3'),
      ],
    },
    {
      icon: <FaUtensils className="text-5xl text-sunsetYellow" />,
      title: t('services.main.culinary.title'),
      description: t('services.main.culinary.description'),
      features: [
        t('services.main.culinary.features.0'),
        t('services.main.culinary.features.1'),
        t('services.main.culinary.features.2'),
        t('services.main.culinary.features.3'),
      ],
    },
    {
      icon: <FaPassport className="text-5xl text-navy" />,
      title: t('services.main.visa.title'),
      description: t('services.main.visa.description'),
      features: [
        t('services.main.visa.features.0'),
        t('services.main.visa.features.1'),
        t('services.main.visa.features.2'),
        t('services.main.visa.features.3'),
      ],
    },
    {
      icon: <FaHeadset className="text-5xl text-sunsetOrange" />,
      title: t('services.main.support.title'),
      description: t('services.main.support.description'),
      features: [
        t('services.main.support.features.0'),
        t('services.main.support.features.1'),
        t('services.main.support.features.2'),
        t('services.main.support.features.3'),
      ],
    },
  ];

  const additionalServices = [
    t('services.additional.train'),
    t('services.additional.flight'),
    t('services.additional.safari'),
    t('services.additional.cultural'),
    t('services.additional.spa'),
    t('services.additional.adventure'),
    t('services.additional.wedding'),
    t('services.additional.group'),
    t('services.additional.corporate'),
    t('services.additional.event'),
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
                {t('services.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                {t('services.hero.subtitle')}
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
              {t('services.intro.title')}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {t('services.intro.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <motion.section
        variants={staggerContainer}
        initial="visible"
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
                <div className="mb-6 flex justify-center">
                  <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-navy mb-4 text-center">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>

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
              {t('services.additional.title')}
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
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} 
        className="py-16 bg-navy"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            {t('services.whyChoose.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div variants={fadeUp} className="text-center bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 hover:scale-105">
              <div className="bg-skyBlue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                {t('services.whyChoose.expertise.title')}
              </h3>
              <p className="text-gray-600">
                {t('services.whyChoose.expertise.description')}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 hover:scale-105">
              <div className="bg-sunsetOrange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                {t('services.whyChoose.quality.title')}
              </h3>
              <p className="text-gray-600">
                {t('services.whyChoose.quality.description')}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 hover:scale-105">
              <div className="bg-sunsetYellow/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                {t('services.whyChoose.value.title')}
              </h3>
              <p className="text-gray-600">
                {t('services.whyChoose.value.description')}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 hover:scale-105">
              <div className="bg-navy/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                {t('services.whyChoose.personal.title')}
              </h3>
              <p className="text-gray-600">
                {t('services.whyChoose.personal.description')}
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
              {t('services.areas.title')}
            </h2>
            <p className="text-gray-700 text-center text-lg mb-12">
              {t('services.areas.subtitle')}
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
                      {t('services.areas.cultural.title')}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Anuradhapura", "Polonnaruwa", "Sigiriya", "Dambulla", "Kandy"].map((place, idx) => (
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
                    <h3 className="text-2xl font-bold mb-3">
                      {t('services.areas.hill.title')}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Nuwara Eliya", "Ella", "Horton Plains", "Tea Plantations"].map((place, idx) => (
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
                    <h3 className="text-2xl font-bold mb-2">
                      {t('services.areas.coastal.title')}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Galle", "Mirissa", "Bentota", "Trincomalee", "Arugam Bay"].map((place, idx) => (
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
                    <h3 className="text-2xl font-bold mb-2">
                      {t('services.areas.wildlife.title')}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Yala", "Udawalawa", "Minneriya", "Wilpattu"].map((place, idx) => (
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
                    <h3 className="text-2xl font-bold mb-2">
                      {t('services.areas.urban.title')}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Colombo", "Negombo", "Galle", "Kandy"].map((place, idx) => (
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
                      {t('services.areas.hidden.title')}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        t('services.areas.hidden.places.0'),
                        t('services.areas.hidden.places.1'),
                        t('services.areas.hidden.places.2'),
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
              {t('services.cta.title')}
            </h2>
            <p className="text-white text-xl mb-8">
              {t('services.cta.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-sunsetOrange hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition duration-300 hover:scale-105 shadow-lg"
              >
                {t('services.cta.contact')}
              </a>
              <a
                href="/tours"
                className="bg-navy hover:bg-navy/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 hover:scale-105 shadow-lg"
              >
                {t('services.cta.viewTours')}
              </a>
              <a
                href="https://wa.me/94774064437"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <FaWhatsapp /> {t('services.cta.whatsapp')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;