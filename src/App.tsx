import "./App.css";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { TopCarousel } from "./components/TopCarousel";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <TopCarousel />
    </div>
  );
}

export default App;
