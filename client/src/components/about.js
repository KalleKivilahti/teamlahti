import React, { useEffect, useState } from "react";
import "./about.css";

const About = () => {
  const [aboutText, setAboutText] = useState("");

  useEffect(() => {
    fetch("/api/about")
      .then((response) => response.json())
      .then((data) => setAboutText(data.about))
      .catch((error) => console.error("Error fetching about text:", error));
  }, []);

  return (
    <div className="about-container">
      <h1 className="hede">About Us - Team Lahti</h1>
      <p className="txt">{aboutText}</p>
    </div>
  );
};

export default About;
