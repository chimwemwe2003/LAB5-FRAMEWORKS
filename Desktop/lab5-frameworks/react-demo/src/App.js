import React, { useState } from 'react';

function App({ name = "User" }) {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(prev => !prev);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '40px auto', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: '#333' }}>Welcome, {name}!</h1>
      <button 
        onClick={toggleMessage} 
        style={{ 
          padding: '10px 20px', 
          marginTop: '20px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer' 
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#0056b3'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#007bff'}
      >
        {showMessage ? 'Hide' : 'Show'} Message
      </button>
      {showMessage && <p style={{ marginTop: '20px', color: '#555' }}>This is a toggled message.</p>}
    </div>
  );
}

export default App;
