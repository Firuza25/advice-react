import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(response.data.slip.advice);
      console.log(response);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    console.log("Component did mount");
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">
          {advice}
        </h1>
        <button className="button" onClick={fetchAdvice}> 
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
