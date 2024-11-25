import React from 'react'
import Navbar from './Components/1-Navbar/Navbar';
import Footer from './Components/6-Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function App() {
  return <>
    <Navbar/>
  <Outlet/>
  <Footer/>
  </>
}

