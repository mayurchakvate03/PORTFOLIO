import Hero from "./section/Hero.jsx";
import ShowcaseSection from "./section/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./components/LogoSection.jsx";
import FeatureCard from "./section/FeatureCard.jsx";
import ExpericenceSection from "./section/ExpericenceSection.jsx";
import TechStack from "./section/TechStack.jsx";
import Contact from "./section/Contact.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      
      <ShowcaseSection />
      <LogoSection />
      <FeatureCard />
      <ExpericenceSection />
      <TechStack />
      <Contact />
    </>
  );
};

export default App;
