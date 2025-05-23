import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "../Home/Home";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import ContactUs from "../ContactUs/ContactUs";

function App() {
  return (
    <>
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>

      <Footer />
    </>
  );
}

export default App;
