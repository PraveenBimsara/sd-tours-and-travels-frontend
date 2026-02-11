import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaHome, FaPhoneAlt, FaCompass } from 'react-icons/fa';
import { useEffect } from 'react';

const NotFound = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="relative inline-block">
            <h1 className="text-[180px] md:text-[250px] font-bold text-gray-200 leading-none">
              404
            </h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <FaCompass className="text-sunsetOrange text-6xl md:text-8xl animate-spin-slow" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            Oops! Lost in Paradise?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-2">
            We can't seem to find the page you're looking for.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            to="/"
            className="flex items-center gap-2 bg-sunsetYellow hover:bg-sunsetOrange text-white px-8 py-4 rounded-full font-semibold transition duration-300 hover:scale-105 shadow-lg"
          >
            <FaHome />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/tours"
            className="flex items-center gap-2 bg-navy hover:bg-navy/90 text-white px-8 py-4 rounded-full font-semibold transition duration-300 hover:scale-105 shadow-lg"
          >
            <FaCompass />
            <span>Explore Tours</span>
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-navy border-2 border-navy px-8 py-4 rounded-full font-semibold transition duration-300 hover:scale-105 shadow-lg"
          >
            <FaPhoneAlt />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;