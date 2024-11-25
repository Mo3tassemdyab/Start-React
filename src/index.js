import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import Home from './Components/2-Home/Home';
import About from './Components/4-About/About';
import Portfolio from './Components/3-Portfolio/Portfolio';
import Contact from './Components/5-Contact/Contact';
import { RouterProvider } from 'react-router';
const router = createBrowserRouter([
  {path:'', element:<App/>, children:[
    {path:'', element:<Home/>},
    {path:'about', element:<About/>},
    {path:'portfolio', element:<Portfolio/>},
    {path:'contact', element:<Contact/>},
  ]},

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router}>

<App />
</RouterProvider>
);


