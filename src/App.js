import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes, BrowserRouter } from 'react-router-dom';

import Header from './Components/header';
import Home from './Components/home';
import CompanyReview from './Components/companyreview';
import SalaryGuide from './Components/salaryguide';
import PostJob from './Components/postjob';
import Login from './Components/Login';
import Signup from './Components/Signup';
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/companyreview" element={<CompanyReview/>}/>
      <Route path="/salaryguide" element={<SalaryGuide/>}/>
      <Route path="/postjob" element={<PostJob/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>



      </Routes>
    </BrowserRouter>
  );
};

export default App;
