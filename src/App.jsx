

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Navbar from "./elements/Navebar";
import Home from "./pages/home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import SellProduct from "./pages/sellProduct";
import Display from "./elements/Display";
import Provide from "./Context/productContext";
import { AuthContextProvider } from "./Context/AuthContext";


function App() {
  return (
    <AuthContextProvider>
    <Provide>
    <Router> 
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/sellProduct" element= {<SellProduct/>}/> 
          <Route path='/product' element={<Display/>}/>
          
        </Routes>
      </>
    </Router>
    </Provide>
    </AuthContextProvider>
  );
}

export default App;

