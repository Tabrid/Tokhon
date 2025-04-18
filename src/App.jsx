import { useRef } from "react"
import AppSection from "./Components/AppSection"
import Banner from "./Components/Banner"
import DeliverySection from "./Components/DeliverySection"
import Footer from "./Components/Footer"
import Testimonials from "./Components/Testimonials"
import VehicleSelection from "./Components/VehicleSelection"

function App() {
  const appRef = useRef(null);
  const serviceRef = useRef(null);
  const homeRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="">
      <div ref={homeRef}>
        <Banner onAppClick={() => scrollToSection(appRef)}
          onServiceClick={() => scrollToSection(serviceRef)}
          onHomeClick={() => scrollToSection(homeRef)}
        />
      </div>
      <div ref={serviceRef}>
        <VehicleSelection />
      </div>
      <DeliverySection />
      <div ref={appRef}>
        <AppSection />
      </div>
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
