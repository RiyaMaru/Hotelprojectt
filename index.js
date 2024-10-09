import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import reportWebVitals from './reportWebVitals';
import Layout from "./Layout";
import HotelForm from './Grocery/HotelForm';
import HotelList from './Grocery/HotelList';
import ProfitLossPage from './Grocery/ProfitLoss';
// import ProfitLossDate from './Grocery/ProfitLossDate';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout/ >}>
     <Route path='/hotel' element={<HotelList />} />
     <Route path="/hotel/add" element={<HotelForm/>}/>
     <Route path="/hotel/profit-loss" element={<ProfitLossPage/>}/> 
     {/* <Route path="/transactions/profit-loss/date" element={<ProfitLossDate/>}/>  */}

     </Route>
    </Routes>
  </BrowserRouter>
</>
);


