import Background from "./components/Background";
import Hero from "./components/Hero";
import SakuraRain from "./components/SakuraRain";
import FloatingElements from "./components/FloatingElements";
import FavoritePhoto from "./components/FavoritePhoto";
import Letter from "./components/Letter";
import Gallery from "./components/Gallery";

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
      </main>

    </>
  );
}

export default App;