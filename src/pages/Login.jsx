import React, { useState } from 'react';
import './Login.css';

// -----------------------------------------------
// Login Component
// This is a simple page that lets users log in or sign up.
// It has very basic error checking (validation).
// -----------------------------------------------
function Login() {
  // We use state variables to remember what the user typed in the inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // We also use a state variable to show error messages if something is wrong
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // This function runs when the user clicks the login button
  const handleLogin = (e) => {
    e.preventDefault(); // Stop the page from reloading when the form is submitted

    // Basic Validation: Check if the fields are empty
    if (email === '' || password === '') {
      // If they are empty, show an error message
      setErrorMessage('Please fill in both email and password.');
      setSuccessMessage('');
    } else {
      setErrorMessage('');
      setSuccessMessage(`Success! Logged in as ${email}`);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* Header of the box */}
        <div className="login-header">
          <h2>Welcome to Airbnb</h2>
        </div>

        {/* The actual form */}
        <div className="login-body">

          {/* Show the error message only if there is one */}
          {errorMessage && <div className="error-box">{errorMessage}</div>}
          {successMessage && <div className="success-box">{successMessage}</div>}

          <form onSubmit={handleLogin}>

            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="top-input"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bottom-input"
              />
            </div>

            <button type="submit" className="login-button">
              Continue
            </button>

          </form>

          {/* Social login buttons (just visual) */}
          <div className="divider">
            <span>or</span>
          </div>

          <button className="social-button">
            Continue with Google
          </button>

        </div>
      </div>
    </div>
  );
}

export default Login;
