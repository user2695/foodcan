import "./App.css";
import Header from "./components/header/Header";
import ImageSlider from "./components/carousal/ImageSlider";

function App() {
  const slides = [
    {url: 'http://localhost:3000/image1.jpg'},
    {url: 'http://localhost:3000/image2.jpg'},
    {url: 'http://localhost:3000/image3.jpg'},
    {url: 'http://localhost:3000/image4.jpg'},
    {url: 'http://localhost:3000/image5.jpg'}

  ]

  const containerStyles = {
    width: '500px',
    height: '280px',
    margin: '0 auto'
  }

  return (
    <div className="App">
      <Header />
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      
    </div>
  );
}

export default App;
