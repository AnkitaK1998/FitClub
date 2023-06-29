import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero.jsx";
import Join from "./Components/Join/Join";
import Plans from "./Components/Plans/Plans";
import Programs from "./Components/Programs/Programs";
import Reason from "./Components/Reasons/Reason";
import Testimonial from "./Components/Testimonials/Testimonial";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reason />
      <Plans />
      <Testimonial />
      <Join />
      <Footer/>
    </div>
  );
}

export default App;
