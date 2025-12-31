import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="SD Tours & Travel" className="h-16 w-auto mb-4" />
            <p className="text-white/80 mb-4">
              SD Tours & Travel offers carefully crafted journeys across Sri Lanka, 
              combining popular destinations with hidden places.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-sunsetYellow">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-sunsetYellow transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-sunsetYellow transition">About Us</Link>
              </li>
              <li>
                <Link to="/tours" className="text-white/80 hover:text-sunsetYellow transition">Tours Packages</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-sunsetYellow transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-sunsetYellow">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-white/80">Cultural Tours</li>
              <li className="text-white/80">Adventure Tours</li>
              <li className="text-white/80">Wildlife Safaris</li>
              <li className="text-white/80">Beach Holidays</li>
              <li className="text-white/80">Customized Tours</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-sunsetYellow">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/80">
                <FaMapMarkerAlt className="text-sunsetOrange mt-1 flex-shrink-0" />
                <span>Malawana, Padagoda, Beruwala, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <FaPhone className="text-sunsetOrange flex-shrink-0" />
                <a href="tel:+94774064437" className="hover:text-sunsetYellow transition">
                  +94 77 406 4437
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <FaEnvelope className="text-sunsetOrange flex-shrink-0" />
                <a href="mailto:info@sdtours.com" className="hover:text-sunsetYellow transition">
                  info@sdtours.com
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
              © 2026 SD Tours & Travel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;