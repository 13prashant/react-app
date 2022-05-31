import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MockTest from "./pages/MockTest";
import Signup from "./pages/Signup";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock-test" element={<MockTest />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
