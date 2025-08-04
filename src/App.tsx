import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'; // 1. Import เข้ามา
import OCsPage from './pages/OCsPage';
import GalleryPage from './pages/GalleryPage';
import CommissionPage from './pages/CommissionPage'; 
import ContactPage from './pages/ContactPage'; // 
import DevlogPage from './pages/DevlogPage';
// ... (Import หน้าอื่นๆ ที่จะสร้างในอนาคต)

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/oc" element={<OCsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/commission" element={<CommissionPage />} />
          <Route path="/contact" element={<ContactPage />} /> 
          <Route path="/devlog" element={<DevlogPage />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;