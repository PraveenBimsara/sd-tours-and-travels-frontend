import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { tourAPI } from "../services/api";
import {
  FaStar,
  FaCheck,
  FaCalendarAlt,
  FaWhatsapp,
  FaArrowLeft,
} from "react-icons/fa";

const TourDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchTour();
  }, [id]);

  const fetchTour = async () => {
    try {
      setLoading(true);
      const response = await tourAPI.getTour(id);
      setTour(response.data.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching tour:", err);
      setError(t('tourDetails.error'));
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sunsetOrange"></div>
          <p className="mt-4 text-gray-600 text-lg">{t('tourDetails.loading')}</p>
        </div>
      </div>
    );
  }

  if (error || !tour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-red-600 text-lg mb-4">
              {error || t('tourDetails.notFound')}
            </p>
            <button
              onClick={() => navigate("/tours")}
              className="bg-sunsetOrange hover:bg-sunsetYellow text-white px-6 py-3 rounded-full font-semibold transition"
            >
              {t('tourDetails.backToTours')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tour-details">
      {/* Hero Image Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${tour.mainImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>

        <button
          onClick={() => navigate("/tours")}
          className="absolute top-6 left-6 bg-white/90 hover:bg-white text-navy px-4 py-2 rounded-full font-semibold transition flex items-center gap-2 shadow-lg z-10"
        >
          <FaArrowLeft /> {t('tourDetails.backToTours')}
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-sunsetOrange px-4 py-1 rounded-full text-sm font-semibold">
                {tour.category}
              </span>
              {tour.featured && (
                <span className="bg-sunsetYellow px-4 py-1 rounded-full text-sm font-semibold">
                  {t('tourDetails.featured')}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {tour.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <FaStar className="text-sunsetYellow" />
                <span>
                  {tour.rating ? tour.rating.toFixed(1) : t('tourDetails.new')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
                <div className="flex border-b overflow-x-auto">
                  {["overview", "included"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 font-semibold capitalize whitespace-nowrap transition ${
                        activeTab === tab
                          ? "text-sunsetOrange border-b-4 border-sunsetOrange"
                          : "text-gray-600 hover:text-sunsetOrange"
                      }`}
                    >
                      {t(`tourDetails.tabs.${tab}`)}
                    </button>
                  ))}
                </div>

                <div className="p-8">
                  {activeTab === "overview" && (
                    <div>
                      <h2 className="text-3xl font-bold text-navy mb-4">
                        {t('tourDetails.overview.title')}
                      </h2>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {tour.description}
                      </p>

                      {tour.highlights && tour.highlights.length > 0 && (
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-navy mb-4">
                            {t('tourDetails.overview.highlights')}
                          </h3>
                          <div className="grid md:grid-cols-2 gap-3">
                            {tour.highlights.map((highlight, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-3 bg-sunsetYellow/10 p-3 rounded-lg"
                              >
                                <FaCheck className="text-sunsetOrange mt-1 flex-shrink-0" />
                                <span className="text-gray-700">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "included" && (
                    <div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h2 className="text-2xl font-bold text-navy mb-4">
                            {t('tourDetails.included.title')}
                          </h2>
                          {tour.included && tour.included.length > 0 ? (
                            <ul className="space-y-3">
                              {tour.included.map((item, index) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-3"
                                >
                                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-600">
                              {t('tourDetails.included.notAvailable')}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <div className="space-y-3">
                  <Link
                    to={`/booking/tour/${tour._id}`}
                    className="block w-full bg-sunsetYellow hover:bg-sunsetOrange text-white text-center py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaCalendarAlt className="inline mr-2" />
                    {t('tourDetails.booking.bookNow')}
                  </Link>

                  <a
                    href={`https://wa.me/94778875696?text=Hi, I'm interested in the ${tour.title} tour`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaWhatsapp className="inline mr-2" />
                    {t('tourDetails.booking.whatsapp')}
                  </a>

                  <Link
                    to="/contact"
                    className="block w-full bg-white hover:bg-gray-50 text-navy border-2 border-navy text-center py-4 rounded-full font-bold text-lg transition duration-300"
                  >
                    {t('tourDetails.booking.contact')}
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                      <div className="text-sunsetOrange font-bold text-lg">✓</div>
                      <div className="text-gray-600">{t('tourDetails.badges.bestPrice')}</div>
                    </div>
                    <div>
                      <div className="text-sunsetOrange font-bold text-lg">✓</div>
                      <div className="text-gray-600">{t('tourDetails.badges.support')}</div>
                    </div>
                    <div>
                      <div className="text-sunsetOrange font-bold text-lg">✓</div>
                      <div className="text-gray-600">{t('tourDetails.badges.verified')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-navy mb-8">
            {t('tourDetails.related.title')}
          </h2>
          <div className="text-center">
            <Link
              to="/tours"
              className="inline-block bg-sunsetYellow hover:bg-sunsetOrange text-white px-8 py-3 rounded-full font-semibold transition"
            >
              {t('tourDetails.related.viewAll')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourDetails;