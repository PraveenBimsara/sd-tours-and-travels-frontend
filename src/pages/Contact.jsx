import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phone: value || '',
    }));

    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.errors.nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.errors.emailRequired');
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = t('contact.form.errors.emailInvalid');
      }
    }

    if (!formData.phone) {
      newErrors.phone = t('contact.form.errors.phoneRequired');
    } else if (!formData.phone.startsWith('+')) {
      newErrors.phone = t('contact.form.errors.phoneCountryCode');
    } else {
      try {
        if (!isValidPhoneNumber(formData.phone)) {
          newErrors.phone = t('contact.form.errors.phoneInvalid');
        }
      } catch (error) {
        newErrors.phone = t('contact.form.errors.phoneInvalid');
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.form.errors.subjectRequired');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.errors.messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.form.errors.messageMinLength');
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

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      console.error("Contact form error:", err);
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('contact.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {t('contact.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-navy mb-6">
                  {t('contact.form.title')}
                </h2>

                {success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-0.5" />
                    <div>
                      <p className="text-green-800 font-semibold">{t('contact.form.success.title')}</p>
                      <p className="text-green-600">
                        {t('contact.form.success.message')}
                      </p>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                    <FaExclamationCircle className="text-red-500 text-xl mt-0.5" />
                    <div>
                      <p className="text-red-800 font-semibold">{t('contact.form.error')}</p>
                      <p className="text-red-600">{error}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t('contact.form.name')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t('contact.form.email')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t('contact.form.phone')} <span className="text-red-500">*</span>
                      </label>
                      <PhoneInput
                        international
                        defaultCountry="LK"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className={`w-full ${errors.phone ? 'phone-input-error' : ''}`}
                        numberInputProps={{
                          className: `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`
                        }}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {t('contact.form.subject')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                          errors.subject ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder={t('contact.form.subjectPlaceholder')}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                      {t('contact.form.message')} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition resize-none ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder={t('contact.form.messagePlaceholder')}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-sunsetYellow hover:bg-sunsetOrange text-white py-4 rounded-full font-bold text-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                        {t('contact.form.sending')}
                      </span>
                    ) : (
                      t('contact.form.send')
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-2xl font-bold text-navy mb-6">
                    {t('contact.info.title')}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-skyBlue/10 p-3 rounded-lg">
                        <FaPhone className="text-skyBlue text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-1">{t('contact.info.phone')}</h4>
                        <a
                          href="tel:+94778875696"
                          className="text-gray-600 hover:text-sunsetOrange transition"
                        >
                          +94 77 887 5696
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <FaWhatsapp className="text-green-500 text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-1">{t('contact.info.whatsapp')}</h4>
                        <a
                          href="https://wa.me/94778875696"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-green-600 transition"
                        >
                          +94 77 887 5696
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-sunsetOrange/10 p-3 rounded-lg">
                        <FaEnvelope className="text-sunsetOrange text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-1">{t('contact.info.email')}</h4>
                        <a
                          href="mailto:sdtoursandtravelcompany@gmail.com"
                          className="text-gray-600 hover:text-sunsetOrange transition break-all"
                        >
                          sdtoursandtravelcompany@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-sunsetYellow/10 p-3 rounded-lg">
                        <FaMapMarkerAlt className="text-sunsetYellow text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-1">{t('contact.info.location')}</h4>
                        <p className="text-gray-600">{t('contact.info.locationText')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-sunsetYellow/10 border-l-4 border-sunsetYellow rounded-lg p-6">
                  <h4 className="font-bold text-navy mb-2">
                    {t('contact.quickResponse.title')}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t('contact.quickResponse.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">
              {t('contact.faq.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('contact.faq.subtitle')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-navy mb-2">
                {t('contact.faq.q1.question')}
              </h3>
              <p className="text-gray-600">
                {t('contact.faq.q1.answer')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-navy mb-2">
                {t('contact.faq.q2.question')}
              </h3>
              <p className="text-gray-600">
                {t('contact.faq.q2.answer')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;