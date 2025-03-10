import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import Chat from './Components/Chat/Chat';
import Home from './Components/Home/Home';
import Features from './Components/Features/Features';
import About from './Components/About/About';
import Meditation from './Components/Meditation/Meditation';

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "profile", element: <Profile /> },
      { path: "chat", element: <Chat /> },
      { path: "features", element: <Features /> },
      { path: "about", element: <About /> },
      { path: "meditation", element: <Meditation /> },
    ],
  },
]);

export default function App() {
  return (
   
      <RouterProvider router={router} />
   
  );
}