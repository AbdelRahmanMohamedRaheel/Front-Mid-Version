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
import Card1 from './Components/CardsDetails/Card1';
import Card2 from './Components/CardsDetails/Card2';
import Card3 from './Components/CardsDetails/Card3';
import Card4 from './Components/CardsDetails/Card4';
import Card5 from './Components/CardsDetails/Card5';
import Card6 from './Components/CardsDetails/Card6';
import Card7 from './Components/CardsDetails/Card7';
import Card8 from './Components/CardsDetails/Card8';
import Card9 from './Components/CardsDetails/Card9';
import Card10 from './Components/CardsDetails/Card10';
import Card11 from './Components/CardsDetails/Card11';
import Card12 from './Components/CardsDetails/Card12';
import Card13 from './Components/CardsDetails/Card13';
import Card14 from './Components/CardsDetails/Card14';
import Card15 from './Components/CardsDetails/Card15';
import Card16 from './Components/CardsDetails/Card16';
import Card17 from './Components/CardsDetails/Card17';
import Card18 from './Components/CardsDetails/Card18';


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
      { path: "awareness", element: <Features /> },
      { path: "about", element: <About /> },
      { path: "meditation", element: <Meditation /> },
      { path: "theory1", element: <Card1 /> },
      { path: "theory2", element: <Card2 /> },
      { path: "theory3", element: <Card3 /> },
      { path: "theory4", element: <Card4 /> },
      { path: "theory5", element: <Card5 /> },
      { path: "theory6", element: <Card6 /> },
      { path: "theory7", element: <Card7 /> },
      { path: "theory8", element: <Card8 /> },
      { path: "theory9", element: <Card9 /> },
      { path: "theory10", element: <Card10 /> },
      { path: "theory11", element: <Card11 /> },
      { path: "theory12", element: <Card12 /> },
      { path: "theory13", element: <Card13 /> },
      { path: "theory14", element: <Card14 /> },
      { path: "theory15", element: <Card15 /> },
      { path: "theory16", element: <Card16 /> },
      { path: "theory17", element: <Card17 /> },
      { path: "theory18", element: <Card18 /> },
    ],
  },
]);

export default function App() {
  return (
   
      <RouterProvider router={router} />
   
  );
}