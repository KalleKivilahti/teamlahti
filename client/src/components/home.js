import React, { useEffect, useState } from 'react';
import monster from '../images/monster.png'
import './home.css'


function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/home')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1 className="text">{message}</h1>
      <img src={monster} alt="Monster" />
    </div>
  );
}

export default Home;
