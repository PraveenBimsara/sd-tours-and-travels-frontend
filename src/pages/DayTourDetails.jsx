import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { dayTourAPI } from "../services/api";
import {
  FaClock,
  FaDollarSign,
  FaUsers,
  FaStar,
  FaCheck,
  FaTimes,
  FaCalendarAlt,
  FaWhatsapp,
  FaArrowLeft,
  FaMapMarkerAlt,
} from "react-icons/fa";

const DayTourDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dayTour, setDayTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDayTour();
    window.scrollTo(0, 0);
  }, [id]);

  const fetchDayTour = async () => {
    try {
      setLoading(true);
      const response = await dayTourAPI.getDayTour(id);
      setDayTour(response.data.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching day tour:", err);
      setError("Failed to load day tour details. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sunsetOrange"></div>
          <p className="mt-4 text-gray-600 text-lg">
            Loading day tour details...
          </p>
        </div>
      </div>
    );
  }

  if (error || !dayTour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-red-600 text-lg mb-4">
              {error || "Day tour not found"}
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-sunsetOrange hover:bg-sunsetYellow text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="day-tour-details">
      {/* Hero Image Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${dayTour.mainImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 bg-white/90 hover:bg-white text-navy px-4 py-2 rounded-full font-semibold transition flex items-center gap-2 shadow-lg z-10"
        >
          <FaArrowLeft /> Back
        </button>

        {/* Tour Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-sunsetOrange px-4 py-1 rounded-full text-sm font-semibold">
                Day Tour
              </span>
              {dayTour.featured && (
                <span className="bg-sunsetYellow px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {dayTour.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <FaClock className="text-sunsetYellow" />
                <span>{dayTour.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-sunsetYellow" />
                <span>
                  {dayTour.rating ? dayTour.rating.toFixed(1) : "New"}
                </span>
              </div>
              {dayTour.maxGroupSize && (
                <div className="flex items-center gap-2">
                  <FaUsers className="text-sunsetYellow" />
                  <span>Max {dayTour.maxGroupSize} people</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Tour Info */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                <h2 className="text-3xl font-bold text-navy mb-4">
                  Tour Overview
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {dayTour.description}
                </p>

                {/* Schedule */}
                {(dayTour.pickupTime || dayTour.dropoffTime) && (
                  <div className="bg-skyBlue/10 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-navy mb-3">
                      Tour Schedule
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {dayTour.pickupTime && (
                        <div className="flex items-center gap-3">
                          <FaClock className="text-sunsetOrange text-xl" />
                          <div>
                            <p className="text-sm text-gray-600">Pickup Time</p>
                            <p className="font-semibold text-navy">
                              {dayTour.pickupTime}
                            </p>
                          </div>
                        </div>
                      )}
                      {dayTour.dropoffTime && (
                        <div className="flex items-center gap-3">
                          <FaClock className="text-sunsetOrange text-xl" />
                          <div>
                            <p className="text-sm text-gray-600">Return Time</p>
                            <p className="font-semibold text-navy">
                              {dayTour.dropoffTime}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {dayTour.highlights && dayTour.highlights.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-navy mb-4">
                      Tour Highlights
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {dayTour.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 bg-sunsetYellow/10 p-3 rounded-lg"
                        >
                          <FaCheck className="text-sunsetOrange mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Itinerary */}
                {dayTour.itinerary && (
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-navy mb-4">
                      Day Itinerary
                    </h3>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {dayTour.itinerary}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Included/Excluded */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Included */}
                  <div>
                    <h2 className="text-2xl font-bold text-navy mb-4">
                      What's Included
                    </h2>
                    {dayTour.included && dayTour.included.length > 0 ? (
                      <ul className="space-y-3">
                        {dayTour.included.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600">
                        Information not available.
                      </p>
                    )}
                  </div>

                  {/* Excluded */}
                  <div>
                    <h2 className="text-2xl font-bold text-navy mb-4">
                      What's Not Included
                    </h2>
                    {dayTour.excluded && dayTour.excluded.length > 0 ? (
                      <ul className="space-y-3">
                        {dayTour.excluded.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <FaTimes className="text-red-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600">
                        Information not available.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card (Sticky) */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <div className="text-center mb-6 pb-6 border-b">
                  <p className="text-gray-600 mb-2">Price per person</p>
                  <div className="flex items-center justify-center gap-2">
                    <FaDollarSign className="text-3xl text-sunsetOrange" />
                    <span className="text-5xl font-bold text-navy">
                      {dayTour.price}
                    </span>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-600 flex items-center gap-2">
                      <FaClock className="text-sunsetOrange" /> Duration
                    </span>
                    <span className="font-semibold text-navy">
                      {dayTour.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-600 flex items-center gap-2">
                      <FaUsers className="text-sunsetOrange" /> Group Size
                    </span>
                    <span className="font-semibold text-navy">
                      Max {dayTour.maxGroupSize || "Flexible"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-600 flex items-center gap-2">
                      <FaStar className="text-sunsetOrange" /> Rating
                    </span>
                    <span className="font-semibold text-navy">
                      {dayTour.rating
                        ? `${dayTour.rating.toFixed(1)}/5`
                        : "New Tour"}
                    </span>
                  </div>
                </div>

                {/* Booking Buttons */}
                <div className="space-y-3">
                  <Link
                    to={`/booking/day-tour/${dayTour._id}`}
                    className="block w-full bg-sunsetYellow hover:bg-sunsetOrange text-white text-center py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaCalendarAlt className="inline mr-2" />
                    Book This Tour
                  </Link>

                  <a
                    href={`https://wa.me/94778875696?text=Hi, I'm interested in the ${dayTour.title} day tour`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaWhatsapp className="inline mr-2" />
                    Chat on WhatsApp
                  </a>

                  <Link
                    to="/contact"
                    className="block w-full bg-white hover:bg-gray-50 text-navy border-2 border-navy text-center py-4 rounded-full font-bold text-lg transition duration-300"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* Important Note */}
                <div className="mt-6 p-4 bg-sunsetYellow/10 rounded-xl">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-sunsetOrange mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-navy mb-1">
                        Pickup Available
                      </p>
                      <p className="text-sm text-gray-600">
                        We provide hotel pickup and drop-off. Location will be
                        confirmed after booking.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t">
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                      <div className="text-sunsetOrange font-bold text-lg">
                        ✓
                      </div>
                      <div className="text-gray-600">Best Price</div>
                    </div>
                    <div>
                      <div className="text-sunsetOrange font-bold text-lg">
                        ✓
                      </div>
                      <div className="text-gray-600">Local Guide</div>
                    </div>
                    <div>
                      <div className="text-sunsetOrange font-bold text-lg">
                        ✓
                      </div>
                      <div className="text-gray-600">Flexible</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Day Tours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-navy mb-8">
            More Day Tours
          </h2>
          <div className="text-center">
            <Link
              to="/"
              className="inline-block bg-sunsetYellow hover:bg-sunsetOrange text-white px-8 py-3 rounded-full font-semibold transition"
            >
              View All Day Tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DayTourDetails;
