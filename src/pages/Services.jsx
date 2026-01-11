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
  FaShieldAlt,
  FaCheckCircle,
  FaWhatsapp
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCar className="text-5xl text-sunsetOrange" />,
      title: "Private Transportation",
      description: "Travel in comfort with our modern, air-conditioned vehicles. Experienced, English-speaking drivers ensure safe and pleasant journeys throughout Sri Lanka.",
      features: [
        "Modern, well-maintained vehicles",
        "Professional, licensed drivers",
        "Air-conditioned comfort",
        "Flexible pickup locations"
      ]
    },
    {
      icon: <FaHotel className="text-5xl text-skyBlue" />,
      title: "Accommodation Booking",
      description: "From luxury hotels to boutique guesthouses, we arrange the perfect accommodation to match your preferences and budget.",
      features: [
        "Handpicked hotels & resorts",
        "Best rates guaranteed",
        "Various budget options",
        "Beach, mountain, or city stays"
      ]
    },
    {
      icon: <FaMapMarkedAlt className="text-5xl text-sunsetYellow" />,
      title: "Customized Tours",
      description: "Design your perfect Sri Lankan adventure. We create personalized itineraries based on your interests, schedule, and travel style.",
      features: [
        "Tailored to your preferences",
        "Flexible scheduling",
        "Cultural, adventure, or relaxation",
        "Expert local guidance"
      ]
    },
    {
      icon: <FaPlane className="text-5xl text-navy" />,
      title: "Airport Transfers",
      description: "Hassle-free pickups and drop-offs from Bandaranaike International Airport. Welcome service with comfortable, direct transfers to your destination.",
      features: [
        "Meet & greet service",
        "24/7 availability",
        "Direct to your hotel",
        "Flight monitoring included"
      ]
    },
    {
      icon: <FaUsers className="text-5xl text-sunsetOrange" />,
      title: "Expert Tour Guides",
      description: "Our knowledgeable, multilingual guides bring Sri Lanka's history and culture to life with engaging stories and local insights.",
      features: [
        "Licensed professional guides",
        "Multiple languages available",
        "Deep cultural knowledge",
        "Passionate storytellers"
      ]
    },
    {
      icon: <FaCamera className="text-5xl text-skyBlue" />,
      title: "Photography Tours",
      description: "Capture Sri Lanka's stunning landscapes and vibrant culture. We know the best spots and perfect timing for incredible photographs.",
      features: [
        "Scenic photography locations",
        "Golden hour planning",
        "Wildlife photography",
        "Cultural event access"
      ]
    },
    {
      icon: <FaUtensils className="text-5xl text-sunsetYellow" />,
      title: "Culinary Experiences",
      description: "Discover authentic Sri Lankan cuisine through cooking classes, food tours, and reservations at the finest local restaurants.",
      features: [
        "Traditional cooking classes",
        "Street food tours",
        "Restaurant recommendations",
        "Tea plantation visits"
      ]
    },
    {
      icon: <FaPassport className="text-5xl text-navy" />,
      title: "Visa Assistance",
      description: "We guide you through the visa application process for Sri Lanka, making your travel preparation smooth and stress-free.",
      features: [
        "ETA application help",
        "Document guidance",
        "Requirement clarification",
        "Fast processing support"
      ]
    },
    {
      icon: <FaHeadset className="text-5xl text-sunsetOrange" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your journey. We're always available via phone, WhatsApp, or email for any needs.",
      features: [
        "Immediate response",
        "Emergency assistance",
        "Travel adjustments",
        "Local problem solving"
      ]
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
    "Event planning assistance"
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
                Comprehensive travel solutions for your perfect Sri Lankan experience
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
              At <span className="text-sunsetOrange font-semibold">SD Tours & Travel</span>, 
              we offer a complete range of services to ensure your Sri Lankan adventure is seamless, 
              comfortable, and memorable. From the moment you arrive until your departure, we handle 
              every detail with care and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
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
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy text-center mb-12">
            Why Choose SD Tours & Travel?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Reason 1 */}
            <div className="text-center">
              <div className="bg-skyBlue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Sri Lanka-based company with deep knowledge of the island
              </p>
            </div>

            {/* Reason 2 */}
            <div className="text-center">
              <div className="bg-sunsetOrange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Quality Service</h3>
              <p className="text-gray-600">
                High standards of service with attention to every detail
              </p>
            </div>

            {/* Reason 3 */}
            <div className="text-center">
              <div className="bg-sunsetYellow/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Best Value</h3>
              <p className="text-gray-600">
                Competitive prices without compromising on quality
              </p>
            </div>

            {/* Reason 4 */}
            <div className="text-center">
              <div className="bg-navy/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Personal Touch</h3>
              <p className="text-gray-600">
                Customized experiences tailored to your preferences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy text-center mb-8">
              Where We Operate
            </h2>
            <p className="text-gray-700 text-center text-lg mb-12">
              We provide services throughout Sri Lanka, covering all major destinations and hidden gems
            </p>

            <div className="bg-gradient-to-br from-skyBlue/10 to-sunsetYellow/10 rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-bold text-navy text-xl mb-3">Cultural Triangle</h3>
                  <p className="text-gray-600 text-sm">
                    Anuradhapura, Polonnaruwa, Sigiriya, Dambulla, Kandy
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-navy text-xl mb-3">Hill Country</h3>
                  <p className="text-gray-600 text-sm">
                    Nuwara Eliya, Ella, Horton Plains, Tea Plantations
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-navy text-xl mb-3">Coastal Areas</h3>
                  <p className="text-gray-600 text-sm">
                    Galle, Mirissa, Bentota, Trincomalee, Arugam Bay
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-navy text-xl mb-3">Wildlife Zones</h3>
                  <p className="text-gray-600 text-sm">
                    Yala, Udawalawe, Minneriya, Wilpattu National Parks
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-navy text-xl mb-3">Urban Centers</h3>
                  <p className="text-gray-600 text-sm">
                    Colombo, Negombo, Kandy, Galle Fort
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-navy text-xl mb-3">Off the Beaten Path</h3>
                  <p className="text-gray-600 text-sm">
                    Hidden temples, local villages, secret beaches
                  </p>
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
              Let us handle the details while you enjoy the journey. Contact us today to plan your perfect Sri Lankan adventure!
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