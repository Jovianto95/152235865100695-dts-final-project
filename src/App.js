import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import DetailGames from './Containers/GameDetail';
import Login from './Containers/Login';
import Register from './Containers/Register';
import About from './Containers/About';
import Contact from './Containers/Contact';
import ProtectedRoute from './Components/ProtectedComp';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Containers/Home';
import theme from './Theme/theme';
import React from 'react';

function App() {
  return (
  <ThemeProvider theme={theme}>
  <div className="App">
  <Navbar></Navbar>
  <Routes>
    <Route path='/' element={
        <>
          <Navbar />
          <Home />
          <SlideShow />

          <Footer />
        </>
        
    } />
    <Route path='login' element={
      <ProtectedRoute loginOnly={false}>
        <Login />
      </ProtectedRoute>
    } />
    <Route path='register' element={
      <ProtectedRoute loginOnly={false}>
        <Register />
      </ProtectedRoute>
    } />

    <Route path='about' element={
        <>
        <Navbar />
        <About />
        
        </>
        
    } />
    <Route path='contact' element={
        <>
        <Navbar />
        <Contact />
        
        </>
        
    } />
    <Route path='games/:id' element={
        <ProtectedRoute loginOnly={true} >
          <>
          <Navbar />
          <DetailGames />
          <Footer />
          </>
        </ProtectedRoute>
    } />
  </Routes> 
    
  </div>
</ThemeProvider>
);
}

export default App;