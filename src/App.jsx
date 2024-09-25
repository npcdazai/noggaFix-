import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import ContactUs from "./components/Form"
function App() {
  return (
    <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
