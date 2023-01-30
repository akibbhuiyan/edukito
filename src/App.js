import "./App.css";
import Home from "./component/Home/Home";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Cursor from "./Cursor/Cursor";
import NavBar from "./component/Shared/Navbar/NavBar";
import Footer from "./component/Shared/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Cursor />
      <NavBar />
      <Home />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
