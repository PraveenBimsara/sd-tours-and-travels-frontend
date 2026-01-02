import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { tourAPI } from '../services/api';
import { 
  FaClock, 
  FaDollarSign, 
  FaUsers, 
  FaStar, 
  FaCheck, 
  FaTimes,
  FaCalendarAlt,
  FaWhatsapp,
  FaArrowLeft
} from 'react-icons/fa';

const TourDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchTour();
    window.scrollTo(0, 0);
  }, [id]);

  const fetchTour = async () => {
    try {
      setLoading(true);
      const response = await tourAPI.getTour(id);
      setTour(response.data.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching tour:', err);
      setError('Failed to load tour details. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sunsetOrange"></div>
          <p className="mt-4 text-gray-600 text-lg">Loading tour details...</p>
        </div>
      </div>
    );
  }

  if (error || !tour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-red-600 text-lg mb-4">{error || 'Tour not found'}</p>
            <button
              onClick={() => navigate('/tours')}
              className="bg-sunsetOrange hover:bg-sunsetYellow text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Back to Tours
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tour-details">
      {/* Hero Image Section */}
      <section className="relative h-[60vh] bg-cover bg-center" 
        style={{ backgroundImage: `url(${tour.mainImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/tours')}
          className="absolute top-6 left-6 bg-white/90 hover:bg-white text-navy px-4 py-2 rounded-full font-semibold transition flex items-center gap-2 shadow-lg z-10"
        >
          <FaArrowLeft /> Back to Tours
        </button>

        {/* Tour Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-sunsetOrange px-4 py-1 rounded-full text-sm font-semibold">
                {tour.category}
              </span>
              {tour.featured && (
                <span className="bg-sunsetYellow px-4 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tour.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <FaClock className="text-sunsetYellow" />
                <span>{tour.duration.days} Days / {tour.duration.nights} Nights</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-sunsetYellow" />
                <span>{tour.rating ? tour.rating.toFixed(1) : 'New'} ({tour.reviewCount || 0} reviews)</span>
              </div>
              {tour.maxGroupSize && (
                <div className="flex items-center gap-2">
                  <FaUsers className="text-sunsetYellow" />
                  <span>Max {tour.maxGroupSize} people</span>
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
              {/* Tabs */}
              <div className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
                <div className="flex border-b overflow-x-auto">
                  {['overview', 'itinerary', 'included'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 font-semibold capitalize whitespace-nowrap transition ${
                        activeTab === tab
                          ? 'text-sunsetOrange border-b-4 border-sunsetOrange'
                          : 'text-gray-600 hover:text-sunsetOrange'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="p-8">
                  {/* Overview Tab */}
                  {activeTab === 'overview' && (
                    <div>
                      <h2 className="text-3xl font-bold text-navy mb-4">Tour Overview</h2>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {tour.description}
                      </p>

                      {tour.highlights && tour.highlights.length > 0 && (
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-navy mb-4">Tour Highlights</h3>
                          <div className="grid md:grid-cols-2 gap-3">
                            {tour.highlights.map((highlight, index) => (
                              <div key={index} className="flex items-start gap-3 bg-sunsetYellow/10 p-3 rounded-lg">
                                <FaCheck className="text-sunsetOrange mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {tour.difficulty && (
                        <div className="bg-skyBlue/10 rounded-xl p-6 mb-6">
                          <h3 className="text-xl font-bold text-navy mb-2">Difficulty Level</h3>
                          <p className="text-gray-700">
                            <span className="font-semibold text-sunsetOrange">{tour.difficulty}</span> - 
                            {tour.difficulty === 'Easy' && ' Suitable for all fitness levels'}
                            {tour.difficulty === 'Moderate' && ' Requires average fitness level'}
                            {tour.difficulty === 'Challenging' && ' Requires good fitness level'}
                            {tour.difficulty === 'Difficult' && ' Requires excellent fitness level'}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Itinerary Tab */}
                  {activeTab === 'itinerary' && (
                    <div>
                      <h2 className="text-3xl font-bold text-navy mb-6">Tour Itinerary</h2>
                      {tour.itinerary && tour.itinerary.length > 0 ? (
                        <div className="space-y-6">
                          {tour.itinerary.map((day, index) => (
                            <div key={index} className="border-l-4 border-sunsetOrange pl-6 pb-6">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="bg-sunsetOrange text-white px-3 py-1 rounded-full text-sm font-semibold">
                                  Day {day.day}
                                </span>
                                <h3 className="text-xl font-bold text-navy">{day.title}</h3>
                              </div>
                              <p className="text-gray-700 mb-3">{day.description}</p>
                              {day.activities && day.activities.length > 0 && (
                                <ul className="space-y-2">
                                  {day.activities.map((activity, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600">
                                      <FaCheck className="text-sunsetOrange mt-1 flex-shrink-0" />
                                      <span>{activity}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600">Detailed itinerary will be provided upon booking.</p>
                      )}
                    </div>
                  )}

                  {/* Included/Excluded Tab */}
                  {activeTab === 'included' && (
                    <div>
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Included */}
                        <div>
                          <h2 className="text-2xl font-bold text-navy mb-4">What's Included</h2>
                          {tour.included && tour.included.length > 0 ? (
                            <ul className="space-y-3">
                              {tour.included.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-600">Information not available.</p>
                          )}
                        </div>

                        {/* Excluded */}
                        <div>
                          <h2 className="text-2xl font-bold text-navy mb-4">What's Not Included</h2>
                          {tour.excluded && tour.excluded.length > 0 ? (
                            <ul className="space-y-3">
                              {tour.excluded.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                  <FaTimes className="text-red-500 mt-1 flex-shrink-0" />
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-600">Information not available.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card (Sticky) */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <div className="text-center mb-6 pb-6 border-b">
                  <p className="text-gray-600 mb-2">Starting from</p>
                  <div className="flex items-center justify-center gap-2">
                    <FaDollarSign className="text-3xl text-sunsetOrange" />
                    <span className="text-5xl font-bold text-navy">{tour.price}</span>
                  </div>
                  <p className="text-gray-600 mt-2">per person</p>
                </div>

                {/* Quick Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-600 flex items-center gap-2">
                      <FaClock className="text-sunsetOrange" /> Duration
                    </span>
                    <span className="font-semibold text-navy">
                      {tour.duration.days}D / {tour.duration.nights}N
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-600 flex items-center gap-2">
                      <FaUsers className="text-sunsetOrange" /> Group Size
                    </span>
                    <span className="font-semibold text-navy">
                      Max {tour.maxGroupSize || 'Flexible'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-600 flex items-center gap-2">
                      <FaStar className="text-sunsetOrange" /> Rating
                    </span>
                    <span className="font-semibold text-navy">
                      {tour.rating ? `${tour.rating.toFixed(1)}/5` : 'New Tour'}
                    </span>
                  </div>
                </div>

                {/* Booking Buttons */}
                <div className="space-y-3">
                  <Link
                    to={`/book-tour/${tour._id}`}
                    className="block w-full bg-sunsetYellow hover:bg-sunsetOrange text-white text-center py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaCalendarAlt className="inline mr-2" />
                    Book This Tour
                  </Link>
                  
                  <a
                    href={`https://wa.me/94774064437?text=Hi, I'm interested in the ${tour.title} tour`}
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

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t">
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                      <div className="text-sunsetOrange font-bold text-lg">✓</div>
                      <div className="text-gray-600">Best Price</div>
                    </div>
                    <div>
                      <div className="text-sunsetOrange font-bold text-lg">✓</div>
                      <div className="text-gray-600">24/7 Support</div>
                    </div>
                    <div>
                      <div className="text-sunsetOrange font-bold text-lg">✓</div>
                      <div className="text-gray-600">Verified</div>
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
            You May Also Like
          </h2>
          <div className="text-center">
            <Link
              to="/tours"
              className="inline-block bg-sunsetYellow hover:bg-sunsetOrange text-white px-8 py-3 rounded-full font-semibold transition"
            >
              View All Tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourDetails;