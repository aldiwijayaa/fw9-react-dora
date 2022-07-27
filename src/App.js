import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import TopUp from "./pages/TopUp";
import History from "./pages/History";
import SearchReceiver from "./pages/SearchReceiver";
import Profile from "./pages/Profile"
import PersonalInfo from "./pages/PersonalInfo"
import AddPhNumber from "./pages/AddPhNumber"
import ManagePhNumber from "./pages/ManagePhNumber"
import ChangePassword from "./pages/ChangePassword"
import Transfer from "./pages/Transfer"

function App() {
  return (
    
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Topup" element={<TopUp />} />
        <Route path="/History" element={<History />} />
        <Route path="/SearchReceiver" element={<SearchReceiver />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/PersonalInfo" element={<PersonalInfo />} />
        <Route path="/AddPhNumber" element={<AddPhNumber />} />
        <Route path="/ManagePhNumber" element={<ManagePhNumber />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
     
        <Route path="/Transfer" element={<Transfer />} />
   
      </Routes>
    
  )
}

export default App;
