import NavigationBar from "./components/Navbar/NavigationBar";
import Banner from "./components/Banner/Banner";
import AboutUs from "./components/AboutUs/AboutUs";
import Calendar from "./components/Calendar/calendar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <AboutUs />
      <Calendar />
      <Footer />
    </div>
  );
}

export default App;
