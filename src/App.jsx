import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<h1 className="text-center py-20 text-3xl">Tours Page - Coming Soon</h1>} />
            <Route path="/about" element={<h1 className="text-center py-20 text-3xl">About Page - Coming Soon</h1>} />
            <Route path="/contact" element={<h1 className="text-center py-20 text-3xl">Contact Page - Coming Soon</h1>} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-navy text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white/80">© 2024 SD Tours & Travel. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;