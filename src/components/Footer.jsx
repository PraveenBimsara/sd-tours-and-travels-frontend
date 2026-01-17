import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="SD Tours & Travel" className="h-16 w-auto mb-4" />
            <p className="text-white/80 mb-4">
              {t('footer.companyDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-sunsetYellow">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-sunsetYellow transition">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-sunsetYellow transition">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-white/80 hover:text-sunsetYellow transition">
                  {t('nav.tours')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-sunsetYellow transition">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-sunsetYellow">
              {t('footer.ourServices')}
            </h3>
            <ul className="space-y-2">
              <li className="text-white/80">{t('footer.services.cultural')}</li>
              <li className="text-white/80">{t('footer.services.adventure')}</li>
              <li className="text-white/80">{t('footer.services.wildlife')}</li>
              <li className="text-white/80">{t('footer.services.beach')}</li>
              <li className="text-white/80">{t('footer.services.customized')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-sunsetYellow">
              {t('footer.contactUs')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/80">
                <FaMapMarkerAlt className="text-sunsetOrange mt-1 flex-shrink-0" />
                <span>{t('contact.info.locationText')}</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <FaPhone className="text-sunsetOrange flex-shrink-0" />
                <a href="tel:+94778875696" className="hover:text-sunsetYellow transition">
                  +94 77 887 5696
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <FaEnvelope className="text-sunsetOrange flex-shrink-0" />
                <a href="mailto:sdtoursandtravelcompany@gmail.com" className="hover:text-sunsetYellow transition break-all">
                  sdtoursandtravelcompany@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-white/60 text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;