import { useState, useEffect } from "react";
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
  },[]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePhoneChange = (value) => {
  setFormData((prev) => ({
    ...prev,
    phone: value || '',
  }));

  // Clear error for phone field
  if (errors.phone) {
    setErrors((prev) => ({ ...prev, phone: "" }));
  }
};

 const validateForm = () => {
  const newErrors = {};

  // Name Validation
  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  // Enhanced Email Validation
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
  }

  // Phone Number Validation (with country code validation)
  if (!formData.phone) {
    newErrors.phone = "Phone number is required";
  } else if (!formData.phone.startsWith('+')) {
    newErrors.phone = "Phone number must include country code (e.g., +94 for Sri Lanka)";
  } else {
    try {
      if (!isValidPhoneNumber(formData.phone)) {
        newErrors.phone = "Please enter a valid phone number for the selected country";
      }
    } catch (error) {
      newErrors.phone = "Invalid phone number format";
    }
  }

  // Subject Validation
  if (!formData.subject.trim()) {
    newErrors.subject = "Subject is required";
  }

  // Message Validation
  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
  } else if (formData.message.trim().length < 10) {
    newErrors.message = "Message must be at least 10 characters";
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

      // Reset success message after 5 seconds
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
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg')",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 text-center text-white">
    <h1 className="text-5xl md:text-6xl font-bold mb-4">
      Get in Touch
    </h1>
    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
      Have a question or ready to book your dream Sri Lankan adventure?
      We're here to help!
    </p>
  </div>
</section>


      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form - Left Column (2 columns) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-navy mb-6">
                  Send Us a Message
                </h2>

                {success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-0.5" />
                    <div>
                      <p className="text-green-800 font-semibold">Success!</p>
                      <p className="text-green-600">
                        Thank you for contacting us! We'll get back to you
                        within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                    <FaExclamationCircle className="text-red-500 text-xl mt-0.5" />
                    <div>
                      <p className="text-red-800 font-semibold">Error</p>
                      <p className="text-red-600">{error}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Name */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Phone */}
<div>
  <label className="block text-gray-700 font-semibold mb-2">
    Phone Number <span className="text-red-500">*</span>
  </label>
  <PhoneInput
    international
    defaultCountry="LK"
    value={formData.phone}
    onChange={handlePhoneChange}
    className={`w-full ${
      errors.phone ? 'phone-input-error' : ''
    }`}
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

                    {/* Subject */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition ${
                          errors.subject ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Inquiry about tours"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sunsetOrange transition resize-none ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Tell us about your travel plans, questions, or special requests..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-sunsetYellow hover:bg-sunsetOrange text-white py-4 rounded-full font-bold text-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information - Right Column */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Contact Details */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-2xl font-bold text-navy mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="bg-skyBlue/10 p-3 rounded-lg">
                        <FaPhone className="text-skyBlue text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-1">Phone</h4>
                        <a
                          href="tel:+94778875696"
                          className="text-gray-600 hover:text-sunsetOrange transition"
                        >
                          +94 77 887 5696
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-4">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <FaWhatsapp className="text-green-500 text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-1">
                          WhatsApp
                        </h4>
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

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="bg-sunsetOrange/10 p-3 rounded-lg">
                        <FaEnvelope className="text-sunsetOrange text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-1">Email</h4>
                        <a
                          href="mailto:sdtoursandtravelcompany@gmail.com"
                          className="text-gray-600 hover:text-sunsetOrange transition break-all"
                        >
                          sdtoursandtravelcompany@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="bg-sunsetYellow/10 p-3 rounded-lg">
                        <FaMapMarkerAlt className="text-sunsetYellow text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-1">
                          Location
                        </h4>
                        <p className="text-gray-600">Aluthgama, Sri Lanka</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gradient-to-br from-navy to-navy/90 rounded-2xl shadow-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <p className="text-white/80 mb-4 text-sm">
                    Stay updated with our latest tours and travel tips
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="text-xl" />
                    </a>
                    <a
                      href="#"
                      className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                    <a
                      href="#"
                      className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition"
                      aria-label="Twitter"
                    >
                      <FaTwitter className="text-xl" />
                    </a>
                  </div>
                </div>

                {/* Quick Response */}
                <div className="bg-sunsetYellow/10 border-l-4 border-sunsetYellow rounded-lg p-6">
                  <h4 className="font-bold text-navy mb-2">
                    Quick Response Guaranteed
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We typically respond to all inquiries within 24 hours. For
                    urgent matters, please call or WhatsApp us directly.
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
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our tours and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-6">
            {/* FAQ 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-navy mb-2">
                How do I book a tour?
              </h3>
              <p className="text-gray-600">
                You can book directly through our website by selecting your
                preferred tour and filling out the booking form. Alternatively,
                contact us via WhatsApp or phone for personalized assistance.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-navy mb-2">
                Can tours be customized?
              </h3>
              <p className="text-gray-600">
                Yes! We specialize in customized tours tailored to your
                interests, budget, and schedule. Contact us to discuss your
                preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
