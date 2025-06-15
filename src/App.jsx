import Banner from "./components/Banner/Banner";
import MoreReasons from "./components/MoreReasons/MoreReasons";
import TrendingSlider from "./components/TrendingSlider/TrendingSlider";
import FAQSection from "./components/FAQSection/FAQSection";
import Ready from "./components/Ready/Ready";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Banner />
      <TrendingSlider />
      <MoreReasons />
      <FAQSection />
      <Ready />
      <Footer />
    </>
  )
}

export default App