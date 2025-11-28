import Footer from "./sections/Footer/Footer";
import BannerSection from "./sections/BannerSection/BannerSection";
import SampleWorks from "./sections/SampleWorks/SampleWorks";
import ContactMe from "./sections/ContactMe/ContactMe";
import AboutSection from "./sections/AboutSection/AboutSection";
import TechnicalKnowledge from "./sections/TechnicalKnowledge/TechnicalKnowledge";
import GitChart from "./sections/GitChart/GitChart";

import "./App.css";

function App() {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <TechnicalKnowledge />
      <SampleWorks />
      <GitChart year="Github Chart by 2025" />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
