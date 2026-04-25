import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import ListingDetail from './pages/ListingDetail';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';

// -----------------------------------------------
// App Component
// This is the main component of our application.
// We use React Router to switch between different
// pages depending on the URL.
// -----------------------------------------------
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* The Navbar will always be visible on every page */}
        <Navbar />
        
        {/* The main content changes based on the URL */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/listing/:id" element={<ListingDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        
        {/* The Footer will always be visible on every page */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
