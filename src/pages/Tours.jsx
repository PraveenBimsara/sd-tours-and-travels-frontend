import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { tourAPI } from '../services/api';

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: '',
    search: '',
    sort: 'newest',
  });

  // Fetch tours from backend
  useEffect(() => {
    fetchTours();
  }, [filters]);

  const fetchTours = async () => {
    try {
      setLoading(true);
      const params = {
        category: filters.category,
        search: filters.search,
        sort: filters.sort,
      };
      
      const response = await tourAPI.getAllTours(params);
      setTours(response.data.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching tours:', err);
      setError('Failed to load tours. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    setFilters({ category: '', search: '', sort: 'newest' });
  };

  return (
    <div className="tours-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-navy/90 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Our Tour Packages
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Discover carefully crafted tours across Sri Lanka. From cultural heritage 
            to wildlife adventures, find your perfect journey.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-md sticky top-[88px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            {/* Search */}
            <div className="flex-1 min-w-[250px]">
              <input
                type="text"
                placeholder="Search tours..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-sunsetOrange transition"
              />
            </div>

            {/* Category Filter */}
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-sunsetOrange transition bg-white"
            >
              <option value="">All Categories</option>
              <option value="Adventure">Adventure</option>
              <option value="Wildlife">Wildlife</option>
              <option value="Culture">Culture</option>
              <option value="Relaxation">Relaxation</option>
              <option value="Romantic">Romantic</option>
              <option value="Budget">Budget</option>
            </select>

            {/* Sort */}
            <select
              value={filters.sort}
              onChange={(e) => handleFilterChange('sort', e.target.value)}
              className="px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-sunsetOrange transition bg-white"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            {/* Clear Filters */}
            {(filters.category || filters.search) && (
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full font-semibold transition"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Loading State */}
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sunsetOrange"></div>
              <p className="mt-4 text-gray-600 text-lg">Loading tours...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-20">
              <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-md mx-auto">
                <p className="text-red-600 text-lg mb-4">{error}</p>
                <button
                  onClick={fetchTours}
                  className="bg-sunsetOrange hover:bg-sunsetYellow text-white px-6 py-3 rounded-full font-semibold transition"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* No Tours Found */}
          {!loading && !error && tours.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
                <p className="text-gray-600 text-lg mb-4">
                  No tours found matching your criteria.
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-sunsetOrange hover:bg-sunsetYellow text-white px-6 py-3 rounded-full font-semibold transition"
                >
                  View All Tours
                </button>
              </div>
            </div>
          )}

          {/* Tours Grid */}
          {!loading && !error && tours.length > 0 && (
            <>
              <div className="mb-6 text-gray-600">
                Found <span className="font-semibold text-navy">{tours.length}</span> tour{tours.length !== 1 ? 's' : ''}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tours.map((tour) => (
                  <div
                    key={tour._id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group"
                  >
                    {/* Tour Image */}
                    <div className="relative h-64 overflow-hidden">
                      {tour.featured && (
                        <span className="absolute top-4 right-4 bg-sunsetOrange text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                          Featured
                        </span>
                      )}
                      {tour.category && (
                        <span className="absolute top-4 left-4 bg-navy/80 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                          {tour.category}
                        </span>
                      )}
                      <img
                        src={tour.mainImage || 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800'}
                        alt={tour.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800';
                        }}
                      />
                    </div>

                    {/* Tour Details */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-navy mb-2 line-clamp-2">
                        {tour.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {tour.description}
                      </p>

                      {/* Duration & Rating */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sunsetOrange font-semibold text-lg">
                          {tour.duration?.days} Days / {tour.duration?.nights} Nights
                        </span>
                        <div className="flex items-center">
                          <span className="text-sunsetYellow">
                            {'★'.repeat(Math.floor(tour.rating || 0))}
                          </span>
                          <span className="text-gray-400">
                            {'★'.repeat(5 - Math.floor(tour.rating || 0))}
                          </span>
                          <span className="text-gray-600 text-sm ml-2">
                            ({tour.rating?.toFixed(1) || 'New'})
                          </span>
                        </div>
                      </div>

                      {/* Price & Button */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-500 text-sm">Starting from</span>
                          <div className="text-2xl font-bold text-navy">
                            ${tour.price}
                          </div>
                        </div>
                        <Link
                          to={`/tours/${tour._id}`}
                          className="bg-sunsetYellow hover:bg-sunsetOrange text-white px-6 py-3 rounded-full font-semibold transition duration-300"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-sunsetOrange to-sunsetYellow rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We specialize in custom tours tailored to your preferences. 
              Let us create a personalized itinerary just for you!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-sunsetOrange hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold transition duration-300 hover:scale-105 shadow-lg"
            >
              Request Custom Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;