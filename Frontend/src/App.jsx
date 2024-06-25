import React from 'react'
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Toaster} from 'react-hot-toast';
import Notfound from './Pages/Notfound';
import Success from './Pages/Success';
import Home from './Pages/Home';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Success' element={<Success/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}


export default App


