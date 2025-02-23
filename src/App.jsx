import './index.css';
import Hero from './components/Hero';
import { Routes, Route, useLocation } from "react-router-dom";
import ThankYou from './components/thankyou';

function App() {
  

  return (
     <div className='bg-[#013D73]'>

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/thankyou" element={<ThankYou />} />
         
      </Routes>

     </div>
  )
}

export default App
