import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./components/Header";
import Identify from "./components/Identify";
import Demo from "./components/Demo";
import OurApproach from "./components/OurApproach";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurPlatform from "./components/OurPlatform";
import CloseMoreDeals from "./components/CloseMoreDeals";
import TargetMarket from "./components/TargetMarket";
import Footer from "./components/Footer";
import SeeWhat from "./components/SeeWhat";
import Started from "./components/Started";
import Preloader from "./components/PreLoader";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TopToBottom from "./components/TopToBottom"

function App() {
  
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      delay: 55,
    });
  }, []);
  return (
    <div className=" overflow-hidden">
      <Preloader />
      <Header />
      <Identify />
      <Demo />
      <OurPlatform />
      <OurApproach />
      <CloseMoreDeals />
      <Started />
      <SeeWhat />
      <TargetMarket />
      <Footer />
      <TopToBottom/>
    </div>
  );
}

export default App;
