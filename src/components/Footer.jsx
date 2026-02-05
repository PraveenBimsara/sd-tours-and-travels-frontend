import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png';
import LanguageSwitcher from './LanguageSwitcher';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block hover:opacity-90 transition">
              <img 
                src={logo}
                alt="SD Tours & Travel" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              {t('footer.companyDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="hover:text-sunsetYellow transition duration-300"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="hover:text-sunsetYellow transition duration-300"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="hover:text-sunsetYellow transition duration-300"
                >
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/tours" 
                  className="hover:text-sunsetYellow transition duration-300"
                >
                  {t('nav.tours')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  className="hover:text-sunsetYellow transition duration-300"
                >
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/reviews" 
                  className="hover:text-sunsetYellow transition duration-300"
                >
                  {t('nav.reviews')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="hover:text-sunsetYellow transition duration-300"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              {t('footer.ourServices')}
            </h3>
            <ul className="space-y-3">
              <li className="hover:text-sunsetYellow transition duration-300">
                {t('footer.services.cultural')}
              </li>
              <li className="hover:text-sunsetYellow transition duration-300">
                {t('footer.services.adventure')}
              </li>
              <li className="hover:text-sunsetYellow transition duration-300">
                {t('footer.services.wildlife')}
              </li>
              <li className="hover:text-sunsetYellow transition duration-300">
                {t('footer.services.beach')}
              </li>
              <li className="hover:text-sunsetYellow transition duration-300">
                {t('footer.services.customized')}
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              {t('footer.contactUs')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-sunsetYellow mt-1 flex-shrink-0" />
                <span className="text-sm">
                  {t('contact.info.locationText')}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-sunsetYellow flex-shrink-0" />
                <a 
                  href="tel:+94778875696" 
                  className="text-sm hover:text-sunsetYellow transition duration-300"
                >
                  +94 77 887 5696
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaWhatsapp className="text-sunsetYellow flex-shrink-0" />
                <a 
                  href="https://wa.me/94778875696" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-sunsetYellow transition duration-300"
                >
                  +94 77 887 5696
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-sunsetYellow mt-1 flex-shrink-0" />
                <a 
                  href="mailto:sdtoursandtravelcompany@gmail.com" 
                  className="text-sm hover:text-sunsetYellow transition duration-300 break-all"
                >
                  sdtoursandtravelcompany@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-400">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;