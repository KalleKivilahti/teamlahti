import React, { useEffect, useState } from 'react';
import './stats.css';

function Stats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch('/api/stats')
      .then((response) => response.json())
      .then((data) => setStats(data.stats))
      .catch((error) => console.error("Error fetching stats:", error));
  }, []);

  return (
    <div>
      <h1 className='teksti'>Tournament Results</h1>
      <ul>
        {stats.map((stat, index) => (
          <li key={index}>{stat.stat}</li>
        ))}
      </ul>
    </div>
  );
}

export default Stats;
