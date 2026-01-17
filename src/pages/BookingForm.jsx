import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { tourAPI, dayTourAPI, bookingAPI } from "../services/api";
import {
  FaUser,
  FaWhatsapp,
  FaCalendarAlt,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const BookingForm = () => {
  const { t } = useTranslation();
  const { id, type } = useParams();
  const navigate = useNavigate();

  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    customerInfo: {
      name: "",
      email: "",
      phone: "",
      country: "",
      whatsapp: "",
    },
    travelDetails: {
      startDate: "",
      endDate: "",
      numberOfPeople: {
        adults: 1,
        children: 0,
      },
      specialRequests: "",
    },
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (success) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [success]);

  useEffect(() => {
    fetchTourDetails();
  }, [id, type]);

  const fetchTourDetails = async () => {
    try {
      setLoading(true);
      let response;

      if (type === "tour") {
        response = await tourAPI.getTour(id);
      } else if (type === "day-tour") {
        response = await dayTourAPI.getDayTour(id);
      } else {
        throw new Error("Invalid tour type");
      }

      setTour(response.data.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching tour:", err);
      setError(t('booking.errors.loadFailed'));
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (section, field, value) => {
    if (section === "numberOfPeople") {
      setFormData((prev) => ({
        ...prev,
        travelDetails: {
          ...prev.travelDetails,
          numberOfPeople: {
            ...prev.travelDetails.numberOfPeople,
            [field]: parseInt(value) || 0,
          },
        },
      }));
    } else if (section === "customerInfo") {
      setFormData((prev) => ({
        ...prev,
        customerInfo: {
          ...prev.customerInfo,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        travelDetails: {
          ...prev.travelDetails,
          [field]: value,
        },
      }));
    }

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerInfo.name.trim()) {
      newErrors.name = t('booking.errors.nameRequired');
    }

    if (!formData.customerInfo.email.trim()) {
      newErrors.email = t('booking.errors.emailRequired');
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.customerInfo.email)) {
        newErrors.email = t('booking.errors.emailInvalid');
      }
    }

    if (!formData.customerInfo.phone) {
      newErrors.phone = t('booking.errors.phoneRequired');
    } else if (!formData.customerInfo.phone.startsWith("+")) {
      newErrors.phone = t('booking.errors.phoneCountryCode');
    } else {
      try {
        if (!isValidPhoneNumber(formData.customerInfo.phone)) {
          newErrors.phone = t('booking.errors.phoneInvalid');
        }
      } catch (error) {
        newErrors.phone = t('booking.errors.phoneInvalid');
      }
    }

    if (formData.customerInfo.whatsapp) {
      if (!formData.customerInfo.whatsapp.startsWith("+")) {
        newErrors.whatsapp = t('booking.errors.whatsappCountryCode');
      } else {
        try {
          if (!isValidPhoneNumber(formData.customerInfo.whatsapp)) {
            newErrors.whatsapp = t('booking.errors.whatsappInvalid');
          }
        } catch (error) {
          newErrors.whatsapp = t('booking.errors.whatsappInvalid');
        }
      }
    }

    if (!formData.travelDetails.startDate) {
      newErrors.startDate = t('booking.errors.startDateRequired');
    } else {
      const selectedDate = new Date(formData.travelDetails.startDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.startDate = t('booking.errors.startDatePast');
      }
    }

    if (type === "tour") {
      if (!formData.travelDetails.endDate) {
        newErrors.endDate = t('booking.errors.endDateRequired');
      } else if (formData.travelDetails.startDate) {
        const start = new Date(formData.travelDetails.startDate);
        const end = new Date(formData.travelDetails.endDate);

        if (end <= start) {
          newErrors.endDate = t('booking.errors.endDateInvalid');
        }
      }
    }

    if (formData.travelDetails.numberOfPeople.adults < 1) {
      newErrors.adults = t('booking.errors.adultsRequired');
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
        tourType: type === "tour" ? "tour" : "dayTour",
        tourId: id,
        customerInfo: formData.customerInfo,
        travelDetails: formData.travelDetails,
      };

      await bookingAPI.createBooking(bookingData);

      setSuccess(true);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      console.error("Booking error:", err);
      setError(
        err.response?.data?.message || t('booking.errors.submitFailed')
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sunsetOrange"></div>
          <p className="mt-4 text-gray-600 text-lg">{t('common.loading')}</p>
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
            {t('booking.success.title')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('booking.success.message')}
          </p>
          <div className="bg-sunsetYellow/10 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-700">
              {t('booking.success.emailSent')}{" "}
              <span className="font-semibold">
                {formData.customerInfo.email}
              </span>
            </p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="bg-sunsetYellow hover:bg-sunsetOrange text-white px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            {t('booking.success.backHome')}
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
          <h2 className="text-2xl font-bold text-navy mb-4">
            {t('booking.errors.unableToLoad')}
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => navigate(-1)}
            className="bg-sunsetYellow hover:bg-sunsetOrange text-white px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            {t('booking.cancel')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-form-page bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              {t('booking.title')}
            </h1>
            <p className="text-gray-600 text-lg">
              {t('booking.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                    <FaExclamationCircle className="text-red-500 text-xl mt-0.5" />
                    <div>
                      <p className="text-red-800 font-semibold">{t('contact.form.error')}</p>
                      <p className="text-red-600">{error}</p>
                    </div>
                  </div>
                )}

                {/* Customer Information */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                    <FaUser className="text-sunsetOrange" />
                    {t('booking.personalInfo')}
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t('booking.fullName')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.customerInfo.name}
                        onChange={(e) =>
                          handleInputChange("customerInfo", "name", e.target.value)
                        }
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t('booking.emailAddress')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.customerInfo.email}
                        onChange={(e) =>
                          handleInputChange("customerInfo", "email", e.target.value)
                        }
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t('booking.phoneNumber')} <span className="text-red-500">*</span>
                      </label>
                      <PhoneInput
                        international
                        defaultCountry="LK"
                        value={formData.customerInfo.phone}
                        onChange={(value) =>
                          handleInputChange("customerInfo", "phone", value || "")
                        }
                        className={`w-full ${errors.phone ? "phone-input-error" : ""}`}
                        numberInputProps={{
                          className: `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          }`,
                        }}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t('booking.country')}
                      </label>
                      <input
                        type="text"
                        value={formData.customerInfo.country}
                        onChange={(e) =>
                          handleInputChange("customerInfo", "country", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition"
                        placeholder="United States"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t('booking.whatsapp')}
                      </label>
                      <PhoneInput
                        international
                        defaultCountry="LK"
                        value={formData.customerInfo.whatsapp}
                        onChange={(value) =>
                          handleInputChange("customerInfo", "whatsapp", value || "")
                        }
                        className={`w-full ${errors.whatsapp ? "phone-input-error" : ""}`}
                        numberInputProps={{
                          className: `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                            errors.whatsapp ? "border-red-500" : "border-gray-300"
                          }`,
                        }}
                      />
                      {errors.whatsapp && (
                        <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>
                      )}
                      <p className="text-gray-500 text-sm mt-1">
                        {t('booking.whatsappHelp')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Travel Details */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                    <FaCalendarAlt className="text-sunsetOrange" />
                    {t('booking.travelDetails')}
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t('booking.startDate')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.travelDetails.startDate}
                        onChange={(e) =>
                          handleInputChange("travelDetails", "startDate", e.target.value)
                        }
                        min={new Date().toISOString().split("T")[0]}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                          errors.startDate ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.startDate && (
                        <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>
                      )}
                    </div>

                    {type === "tour" && (
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          {t('booking.endDate')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          value={formData.travelDetails.endDate}
                          onChange={(e) =>
                            handleInputChange("travelDetails", "endDate", e.target.value)
                          }
                          min={
                            formData.travelDetails.startDate ||
                            new Date().toISOString().split("T")[0]
                          }
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                            errors.endDate ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.endDate && (
                          <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>
                        )}
                      </div>
                    )}

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t('booking.adults')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={formData.travelDetails.numberOfPeople.adults}
                        onChange={(e) =>
                          handleInputChange("numberOfPeople", "adults", e.target.value)
                        }
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                          errors.adults ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.adults && (
                        <p className="text-red-500 text-sm mt-1">{errors.adults}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t('booking.children')}
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={formData.travelDetails.numberOfPeople.children}
                        onChange={(e) =>
                          handleInputChange("numberOfPeople", "children", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition"
                      />
                      <p className="text-gray-500 text-sm mt-1">
                        {t('booking.childrenNote')}
                      </p>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t('booking.specialRequests')}
                      </label>
                      <textarea
                        value={formData.travelDetails.specialRequests}
                        onChange={(e) =>
                          handleInputChange("travelDetails", "specialRequests", e.target.value)
                        }
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition resize-none"
                        placeholder={t('booking.specialRequestsPlaceholder')}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 bg-sunsetYellow hover:bg-sunsetOrange text-white py-4 rounded-full font-bold text-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                        {t('booking.processing')}
                      </span>
                    ) : (
                      t('booking.submit')
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="px-8 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-full font-bold transition duration-300"
                  >
                    {t('booking.cancel')}
                  </button>
                </div>

                <p className="text-gray-500 text-sm mt-4 text-center">
                  {t('booking.termsText')}
                </p>
              </form>
            </div>

            {/* Right Column - Tour Summary */}
            {tour && (
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-navy mb-4">
                    {t('booking.bookingSummary')}
                  </h3>

                  <div className="mb-4">
                    <img
                      src={tour.mainImage}
                      alt={tour.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>

                  <h4 className="text-lg font-bold text-navy mb-3">
                    {tour.title}
                  </h4>

                  <div className="mt-6 p-4 bg-skyBlue/10 rounded-lg">
                    <div className="flex items-start gap-2">
                      <FaWhatsapp className="text-green-500 text-xl mt-0.5" />
                      <div className="text-sm">
                        <p className="font-semibold text-navy mb-1">
                          {t('booking.needHelp')}
                        </p>
                        <p className="text-gray-600">
                          {t('booking.needHelpText')}
                        </p>
                        <a
                          href="https://wa.me/94778875696"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-700 font-semibold mt-1 inline-block"
                        >
                          {t('booking.chatNow')}
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