import React, { useState } from 'react';
import './Dashboard.css';

// -----------------------------------------------
// Dashboard Component
// A simple form where hosts could add new properties.
// In a real app, this would send data to a server.
// -----------------------------------------------
function Dashboard() {
  // Simple state for our fake form
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formMessageType, setFormMessageType] = useState('');
  
  // This runs when they click the submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '' || price === '') {
      setFormMessage('Please fill in all fields!');
      setFormMessageType('error');
    } else {
      setFormMessage(`Successfully added "${title}" for $${price}/night!`);
      setFormMessageType('success');
      // Clear the form
      setTitle('');
      setPrice('');
    }
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        
        <h1>Host Dashboard</h1>
        <p>Welcome back! Use this page to add a new listing to your profile.</p>
        
        <div className="dashboard-card">
          <h2>Add New Property</h2>

          {formMessage !== '' && (
            <div className={formMessageType === 'success' ? 'form-message success' : 'form-message error'}>
              {formMessage}
            </div>
          )}
          
          <form className="add-property-form" onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label>Property Title</label>
              <input 
                type="text" 
                placeholder="e.g. Cozy Cabin in the Woods"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label>Price per Night ($)</label>
              <input 
                type="number" 
                placeholder="e.g. 150"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            
            <button type="submit" className="submit-btn">
              Add Listing
            </button>
            
          </form>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
