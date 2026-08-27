import Background from "./components/Background";
import Hero from "./components/Hero";
import SakuraRain from "./components/SakuraRain";
import FloatingElements from "./components/FloatingElements";
import FavoritePhoto from "./components/FavoritePhoto";
import Letter from "./components/Letter";
import Gallery from "./components/Gallery";
import Reasons from "./components/Reasons";

function App() {
  return (
    <>
      <Background />
      <SakuraRain />
      <FloatingElements />
      <main>
        <Hero />
        <FavoritePhoto />
        <Letter />
        <Gallery />
        <Reasons />
      </main>

    </>
  );
}

export default App;