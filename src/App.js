import React, { useState } from 'react';
import CountryInfoModal from './components/Modal/CountryInfoModal'; // Adjust the path
import Card from './page/Card';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home from './page/Home';
import Footer from './components/Footer/Footer';


function App() {
/*   const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  }; */

  return (
    <Router> 

      <h3 className="text-xl font-bold mb-10 text-center"> Nebula UI</h3>
      
      <Routes>
            <Route path="/" element={<Home />} />
     </Routes>
   
    {/* <div>
      <button onClick={openModal} className='text-green-500'>Open Modal</button>
      <CountryInfoModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
    */}
    </Router>
  );
}



export default App;
