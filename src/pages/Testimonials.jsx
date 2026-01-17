import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { testimonialAPI } from "../services/api";
import {
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const Testimonials = () => {
  const { t } = useTranslation();
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    rating: 5,
    review: "",
    tourName: "",
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await testimonialAPI.getTestimonials({
        status: "approved",
      });
      setTestimonials(response.data.data);
    } catch (err) {
      console.error("Error fetching testimonials:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = t('testimonials.form.errors.nameRequired');
    if (!formData.country.trim()) errors.country = t('testimonials.form.errors.countryRequired');
    if (!formData.review.trim()) errors.review = t('testimonials.form.errors.reviewRequired');
    if (formData.review.trim().length < 20)
      errors.review = t('testimonials.form.errors.reviewMinLength');
    if (formData.review.trim().length > 500)
      errors.review = t('testimonials.form.errors.reviewMaxLength');

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setSubmitting(true);
      setError(null);

      await testimonialAPI.createTestimonial(formData);

      setSuccess(true);
      setFormData({
        name: "",
        country: "",
        rating: 5,
        review: "",
        tourName: "",
      });
      setShowForm(false);

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error("Error submitting testimonial:", err);
      setError(
        err.response?.data?.message || t('testimonials.form.errors.submitFailed')
      );
    } finally {
      setSubmitting(false);
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? "text-sunsetYellow" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="testimonials-page">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://martech.org/wp-content/uploads/2016/04/ss-rating-review-stars.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 text-white flex items-center justify-center flex-col">
          <div className="max-w-3xl">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {t('testimonials.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                {t('testimonials.hero.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {success && (
        <div className="container mx-auto px-4 mt-8">
          <div className="max-w-2xl mx-auto bg-green-50 border border-green-200 rounded-xl p-6 flex items-start gap-3">
            <FaCheckCircle className="text-green-500 text-2xl mt-1" />
            <div>
              <p className="text-green-800 font-semibold">
                {t('testimonials.success.title')}
              </p>
              <p className="text-green-600">
                {t('testimonials.success.message')}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sunsetOrange"></div>
              <p className="mt-4 text-gray-600 text-lg">
                {t('testimonials.loading')}
              </p>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg mb-4">
                {t('testimonials.noReviews')}
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-sunsetYellow hover:bg-sunsetOrange text-white px-8 py-3 rounded-full font-semibold transition"
              >
                {t('testimonials.writeReview')}
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-navy">
                  {t('testimonials.title')}
                </h2>
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-sunsetYellow hover:bg-sunsetOrange text-white px-6 py-3 rounded-full font-semibold transition hover:scale-105"
                >
                  {t('testimonials.writeReview')}
                </button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial._id}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
                  >
                    <FaQuoteLeft className="text-sunsetOrange/20 text-4xl mb-4" />

                    {renderStars(testimonial.rating)}

                    <p className="text-gray-700 my-6 italic leading-relaxed">
                      "{testimonial.review}"
                    </p>

                    {testimonial.tourName && (
                      <p className="text-sm text-sunsetOrange font-semibold mb-4">
                        {t('testimonials.tour')}: {testimonial.tourName}
                      </p>
                    )}

                    <div className="flex items-center gap-4 pt-4 border-t">
                      <div className="w-12 h-12 bg-gradient-to-br from-sunsetOrange to-sunsetYellow rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {testimonial.country}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Review Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-navy">
                  {t('testimonials.form.title')}
                </h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                  <FaExclamationCircle className="text-red-500 text-xl mt-0.5" />
                  <p className="text-red-600">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      {t('testimonials.form.name')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange ${
                        formErrors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder={t('testimonials.form.namePlaceholder')}
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      {t('testimonials.form.country')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange ${
                        formErrors.country
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder={t('testimonials.form.countryPlaceholder')}
                    />
                    {formErrors.country && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.country}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t('testimonials.form.tourName')}
                  </label>
                  <input
                    type="text"
                    name="tourName"
                    value={formData.tourName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange"
                    placeholder={t('testimonials.form.tourNamePlaceholder')}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t('testimonials.form.rating')} <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, rating: star }))
                        }
                        className="focus:outline-none"
                      >
                        <FaStar
                          className={`text-3xl ${
                            star <= formData.rating
                              ? "text-sunsetYellow"
                              : "text-gray-300"
                          } hover:text-sunsetYellow transition`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t('testimonials.form.review')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="review"
                    value={formData.review}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange resize-none ${
                      formErrors.review ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder={t('testimonials.form.reviewPlaceholder')}
                  ></textarea>
                  <div className="flex justify-between items-center mt-1">
                    {formErrors.review && (
                      <p className="text-red-500 text-sm">
                        {formErrors.review}
                      </p>
                    )}
                    <p className="text-gray-500 text-sm ml-auto">
                      {formData.review.length}/500 {t('testimonials.form.characters')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 bg-sunsetYellow hover:bg-sunsetOrange text-white py-4 rounded-full font-bold text-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? t('testimonials.form.submitting') : t('testimonials.form.submit')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-8 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-full font-bold transition"
                  >
                    {t('testimonials.form.cancel')}
                  </button>
                </div>

                <p className="text-gray-500 text-sm mt-4 text-center">
                  {t('testimonials.form.note')}
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;