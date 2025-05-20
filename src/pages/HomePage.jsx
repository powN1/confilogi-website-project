import Download from "../components/Download";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Overview from "../components/Overview";

const HomePage = () => {
  return (
    <div className="container">
      <Navbar />
      <Overview />
      <Features />
      <Download />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
