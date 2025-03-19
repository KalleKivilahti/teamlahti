import React, { useEffect, useState } from 'react';
import './members.css';

function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('/api/members')
      .then((response) => response.json())
      .then((data) => setMembers(data.members))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1 className='text'>Team Members</h1>
      <ul>
        {members.map((member, index) => (
          <p className="text" key={index}>
            <strong>{member.name}</strong> - {member.role}
          </p>
        ))}
      </ul>
    </div>
  );
}

export default Members;
