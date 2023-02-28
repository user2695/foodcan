import "./App.css";
import Header from "./components/header/Header";
import ImageSlider from "./components/carousal/ImageSlider";
import Footer from "./components/footer/Footer";
import "./App.css";
import Card from "./components/cards/card"
function App() {
  const slides = [
    { url: "http://localhost:3000/image1.jpg" },
    { url: "http://localhost:3000/image2.jpg" },
    { url: "http://localhost:3000/image3.jpg" },
    { url: "http://localhost:3000/image4.jpg" },
    { url: "http://localhost:3000/image5.jpg" },
  ];

  const containerStyles = {
    width: "1080px",
    height: "480px",
    margin: "2rem auto",
  };

  return (
    <div className="App">
      <Header />
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <div>
        <Card />
        <Footer />
      </div>
    </div>
  );
}

export default App;
