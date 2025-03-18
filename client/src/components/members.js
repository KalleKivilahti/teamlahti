import React, { useEffect, useState } from 'react';

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
      <h1>Team Members</h1>
      <ul>
        {members.map((member, index) => (
          <li key={index}>
            <strong>{member.name}</strong> - {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Members;
