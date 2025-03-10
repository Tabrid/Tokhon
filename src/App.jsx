import AppSection from "./Components/AppSection"
import Banner from "./Components/Banner"
import DeliverySection from "./Components/DeliverySection"
import Footer from "./Components/Footer"
import Testimonials from "./Components/Testimonials"
import VehicleSelection from "./Components/VehicleSelection"

function App() {
  return (
    <div className="">
      <Banner />
      <div>
        <VehicleSelection />
      </div>
      <DeliverySection />
      <AppSection />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
