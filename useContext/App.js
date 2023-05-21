import "./App.css";
import AppState from "./allcontext/AppState";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <AppState>
        <Home />
        <About />
        <Contact />
      </AppState>
    </>
  );
}

export default App;
