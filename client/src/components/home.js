import React, { useEffect, useState } from 'react';
import oscilio from '../images/oscilio.jpg'


function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/home')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <img src={oscilio} alt="Oscilio" />
    </div>
  );
}

export default Home;
