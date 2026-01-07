import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Tours from './pages/Tours';
import TourDetails from './pages/TourDetails';
import DayTourDetails from './pages/DayTourDetails';
import AboutUs from './pages/AboutUs';
import BookingForm from './pages/BookingForm';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="/day-tours/:id" element={<DayTourDetails />} />
            <Route path="/booking/:type/:id" element={<BookingForm />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<h1 className="text-center py-20 text-3xl">Contact Page - Coming Soon</h1>} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;