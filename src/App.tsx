import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import { Toaster } from "sonner";
import Education from "./components/Education";
import ShortsPage from "./components/ShortsPage";

function App() {
  return (
    <div className="min-h-screen  text-white">
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* Main Content */}
      <main className="pt-16 w-11/12 md:w-8/12 mx-auto">
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/education" element={<Education />} />
          <Route path="/shorts" element={<ShortsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
