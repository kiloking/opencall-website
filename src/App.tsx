import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import FlowPage from "./components/FlowPage";
import RegisterPage from "./components/RegisterPage";
import FundingPage from "./components/FundingPage";
import TimelinePage from "./components/TimelinePage";
import FAQPage from "./components/FAQPage";
import ContactPage from "./components/ContactPage";
import { Toaster } from "sonner";

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
          <Route path="/flow" element={<FlowPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/funding" element={<FundingPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
