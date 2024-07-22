import React, { useState } from 'react';
import Login from './Components/Login';
import VideoFeed from './Components/VideoFeed';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <div className="App">
      {user ? (
        <div>
          <h1>Welcome, {user}!</h1>
          <VideoFeed />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;