import React, { useEffect, useState } from 'react';
import './stats.css'

function Members() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/stats')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1 className='text'>{message}</h1>
    </div>
  );
}

export default Members;
