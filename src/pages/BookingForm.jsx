import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tourAPI, dayTourAPI, bookingAPI } from '../services/api';
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaGlobe, 
  FaWhatsapp,
  FaCalendarAlt,
  FaUsers,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';

const BookingForm = () => {
  const { id, type } = useParams(); // type will be 'tour' or 'day-tour'
  const navigate = useNavigate();
  
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    customerInfo: {
      name: '',
      email: '',
      phone: '',
      country: '',
      whatsapp: ''
    },
    travelDetails: {
      startDate: '',
      endDate: '',
      numberOfPeople: {
        adults: 1,
        children: 0
      },
      specialRequests: ''
    }
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchTourDetails();
    window.scrollTo(0, 0);
  }, [id, type]);

  const fetchTourDetails = async () => {
    try {
      setLoading(true);
      let response;
      
      if (type === 'tour') {
        response = await tourAPI.getTour(id);
      } else if (type === 'day-tour') {
        response = await dayTourAPI.getDayTour(id);
      } else {
        throw new Error('Invalid tour type');
      }
      
      setTour(response.data.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching tour:', err);
      setError('Failed to load tour details');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (section, field, value) => {
    if (section === 'numberOfPeople') {
      setFormData(prev => ({
        ...prev,
        travelDetails: {
          ...prev.travelDetails,
          numberOfPeople: {
            ...prev.travelDetails.numberOfPeople,
            [field]: parseInt(value) || 0
          }
        }
      }));
    } else if (section === 'customerInfo') {
      setFormData(prev => ({
        ...prev,
        customerInfo: {
          ...prev.customerInfo,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        travelDetails: {
          ...prev.travelDetails,
          [field]: value
        }
      }));
    }
    
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Customer Info Validation
    if (!formData.customerInfo.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.customerInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.customerInfo.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.customerInfo.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    // Travel Details Validation
    if (!formData.travelDetails.startDate) {
      newErrors.startDate = 'Start date is required';
    } else {
      const selectedDate = new Date(formData.travelDetails.startDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.startDate = 'Start date cannot be in the past';
      }
    }

    // Only validate end date for multi-day tours
    if (type === 'tour') {
      if (!formData.travelDetails.endDate) {
        newErrors.endDate = 'End date is required';
      } else if (formData.travelDetails.startDate) {
        const start = new Date(formData.travelDetails.startDate);
        const end = new Date(formData.travelDetails.endDate);
        
        if (end <= start) {
          newErrors.endDate = 'End date must be after start date';
        }
      }
    }

    if (formData.travelDetails.numberOfPeople.adults < 1) {
      newErrors.adults = 'At least 1 adult is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setSubmitting(true);
      setError(null);

      const bookingData = {
        tourType: type === 'tour' ? 'tour' : 'dayTour',
        tourId: id,
        customerInfo: formData.customerInfo,
        travelDetails: formData.travelDetails
      };

      await bookingAPI.createBooking(bookingData);
      
      setSuccess(true);
      
      // Redirect after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
      
    } catch (err) {
      console.error('Booking error:', err);
      setError(err.response?.data?.message || 'Failed to submit booking. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sunsetOrange"></div>
          <p className="mt-4 text-gray-600 text-lg">Loading booking form...</p>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <FaCheckCircle className="text-green-500 text-6xl mx-auto" />
          </div>
          <h2 className="text-3xl font-bold text-navy mb-4">
            Booking Submitted!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your booking inquiry! We have received your request and will contact you within 24 hours to confirm your booking details.
          </p>
          <div className="bg-sunsetYellow/10 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-700">
              A confirmation email has been sent to <span className="font-semibold">{formData.customerInfo.email}</span>
            </p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="bg-sunsetYellow hover:bg-sunsetOrange text-white px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (error && !tour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <FaExclamationCircle className="text-red-500 text-6xl mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-navy mb-4">Unable to Load Tour</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => navigate(-1)}
            className="bg-sunsetYellow hover:bg-sunsetOrange text-white px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-form-page bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Book Your Adventure
            </h1>
            <p className="text-gray-600 text-lg">
              Complete the form below to reserve your spot
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                    <FaExclamationCircle className="text-red-500 text-xl mt-0.5" />
                    <div>
                      <p className="text-red-800 font-semibold">Error</p>
                      <p className="text-red-600">{error}</p>
                    </div>
                  </div>
                )}

                {/* Customer Information */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                    <FaUser className="text-sunsetOrange" />
                    Personal Information
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.customerInfo.name}
                        onChange={(e) => handleInputChange('customerInfo', 'name', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.customerInfo.email}
                        onChange={(e) => handleInputChange('customerInfo', 'email', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.customerInfo.phone}
                        onChange={(e) => handleInputChange('customerInfo', 'phone', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+1 234 567 8900"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        value={formData.customerInfo.country}
                        onChange={(e) => handleInputChange('customerInfo', 'country', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition"
                        placeholder="United States"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        WhatsApp Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.customerInfo.whatsapp}
                        onChange={(e) => handleInputChange('customerInfo', 'whatsapp', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition"
                        placeholder="+1 234 567 8900"
                      />
                      <p className="text-gray-500 text-sm mt-1">
                        We can contact you via WhatsApp for faster communication
                      </p>
                    </div>
                  </div>
                </div>

                {/* Travel Details */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                    <FaCalendarAlt className="text-sunsetOrange" />
                    Travel Details
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Start Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.travelDetails.startDate}
                        onChange={(e) => handleInputChange('travelDetails', 'startDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                          errors.startDate ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.startDate && (
                        <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>
                      )}
                    </div>

                    {type === 'tour' && (
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          End Date <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          value={formData.travelDetails.endDate}
                          onChange={(e) => handleInputChange('travelDetails', 'endDate', e.target.value)}
                          min={formData.travelDetails.startDate || new Date().toISOString().split('T')[0]}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                            errors.endDate ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.endDate && (
                          <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>
                        )}
                      </div>
                    )}

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Number of Adults <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={formData.travelDetails.numberOfPeople.adults}
                        onChange={(e) => handleInputChange('numberOfPeople', 'adults', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                          errors.adults ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.adults && (
                        <p className="text-red-500 text-sm mt-1">{errors.adults}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Number of Children
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={formData.travelDetails.numberOfPeople.children}
                        onChange={(e) => handleInputChange('numberOfPeople', 'children', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition"
                      />
                      <p className="text-gray-500 text-sm mt-1">Under 12 years old</p>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Special Requests or Requirements
                      </label>
                      <textarea
                        value={formData.travelDetails.specialRequests}
                        onChange={(e) => handleInputChange('travelDetails', 'specialRequests', e.target.value)}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition resize-none"
                        placeholder="Dietary restrictions, accessibility needs, special occasions, etc."
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 bg-sunsetYellow hover:bg-sunsetOrange text-white py-4 rounded-full font-bold text-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                        Processing...
                      </span>
                    ) : (
                      'Submit'
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="px-8 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-full font-bold transition duration-300"
                  >
                    Cancel
                  </button>
                </div>

                <p className="text-gray-500 text-sm mt-4 text-center">
                  By submitting this form, you agree to our terms and conditions
                </p>
              </form>
            </div>

            {/* Right Column - Tour Summary */}
            {tour && (
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-navy mb-4">Booking Summary</h3>
                  
                  <div className="mb-4">
                    <img
                      src={tour.mainImage}
                      alt={tour.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>

                  <h4 className="text-lg font-bold text-navy mb-3">{tour.title}</h4>

                  <div className="space-y-3 mb-6">
                    {type === 'tour' && tour.duration && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold text-navy">
                          {tour.duration.days} Days / {tour.duration.nights} Nights
                        </span>
                      </div>
                    )}
                    
                    {type === 'day-tour' && tour.duration && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold text-navy">{tour.duration}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Price per person:</span>
                      <span className="font-semibold text-sunsetOrange text-lg">
                        ${tour.price}
                      </span>
                    </div>

                    {formData.travelDetails.numberOfPeople.adults > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          Adults: {formData.travelDetails.numberOfPeople.adults}
                        </span>
                        <span className="font-semibold text-navy">
                          ${tour.price * formData.travelDetails.numberOfPeople.adults}
                        </span>
                      </div>
                    )}

                    {formData.travelDetails.startDate && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Start Date:</span>
                        <span className="font-semibold text-navy">
                          {new Date(formData.travelDetails.startDate).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-gray-700">Estimated Total:</span>
                      <span className="text-sunsetOrange">
                        $
                        {tour.price * 
                          (formData.travelDetails.numberOfPeople.adults + 
                           formData.travelDetails.numberOfPeople.children)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Final price will be confirmed by our team
                    </p>
                  </div>

                  <div className="mt-6 p-4 bg-skyBlue/10 rounded-lg">
                    <div className="flex items-start gap-2">
                      <FaWhatsapp className="text-green-500 text-xl mt-0.5" />
                      <div className="text-sm">
                        <p className="font-semibold text-navy mb-1">Need Help?</p>
                        <p className="text-gray-600">Contact us on WhatsApp for instant support</p>
                        <a
                          href="https://wa.me/94778875696"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-700 font-semibold mt-1 inline-block"
                        >
                          Chat Now →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;