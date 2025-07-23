import React from 'react'
import Home from './assets/Components/Home/Home';
import NavBar from './assets/Components/NavBar/NavBar';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from './assets/Components/Footer/Footer';
import About from './assets/Components/About/About';
import Portfolio from './assets/Components/Portfolio/Portfolio';
import Contact from './assets/Components/Contact/Contact';
import Layout from './assets/Components/Layout/Layout';

let x = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, // ✅ ده معناه: لما المسار يكون "/" من غير أي إضافات، اعرض Home
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={x} > </RouterProvider>
    </>
  );
}

