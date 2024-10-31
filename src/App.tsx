import React from 'react';
import './App.css';

function App() {
  const handleLogin = () => {
    // Placeholder for login logic
    console.log("Login button clicked");
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Your Application</h1>
          <button onClick={handleLogin} className="App-button">
            Login
          </button>
        </header>
      </div>
  );
}

export default App;
