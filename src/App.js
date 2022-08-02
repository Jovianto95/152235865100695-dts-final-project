import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import DetailGames from './Containers/GameDetail';
import Login from './containers/Login';
import Register from './containers/Register';
import About from './containers/About';
import Contact from './containers/Contact';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './containers/Home';
import theme from './themes/theme';
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