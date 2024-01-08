import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Aboutmain from './components/about/Aboutmain';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" exact element={<Home/>}/>
    <Route path="about" element={<Aboutmain/>}/>
    <Route path="contact" element={<Contact/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
    </>
  );
}

export default App;
