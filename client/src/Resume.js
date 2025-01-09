import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Namrata Mali</h1>
        <p>123 Main Street, Seattle USA, 12345 | (123) 456-7890 | malinamratavijay@cityuniversity.edu</p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle, Seattle USA | October 2024 - October 2026</p>
          <p>GPA: 4.0/4.0</p>

          <h3>Bachelor of Science in Computer Science</h3>
          <p>University of Mumbai, Mumbai India | June 2019 - May 2022</p>
          <p>GPA: 3.8/4.0</p>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <ul>
            <li>Programming Languages: Java, JavaScript, Python, SQL</li>
            <li>Framework & Libraries: React, Origami, jQuery, VBScript</li>
            <li>Cloud Technologies: AWS</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Work Experience</h2>
        <div className="experience">
          <h3>Associate Analyst</h3>
          <p>Deloitte USI | December 2022 - September 2024</p>
          <ul>
            <li>Engaged in a key role as a developer on Deloitte's Origami Risk Insurance Application team</li>
            <li>Active member of the implementation team, specializing in configuring and deploying Origami products to align with client specifications.</li>
            <li>Proficient in technologies including SQL Server, jQuery, JavaScript, HTML, CSS, Java, REST web service, Automation, VBScript to create tailored solutions.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          <h3>AWS Cloud Security Research</h3>
          <p>Co-authored on a research paper based on a cloud based applications data breach incident at OnePoint patient healthcare by suggesting a AWS cloud architecture.</p>
          <p>
            Source code:{" "}
            <a
              href="https://github.com/studentname/personal-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </p>

          <h3>Tic Tac Toe</h3>
          <p>Developed the classic Tic Tac Toe game in Python using Minimax Algorithm and Heuristics.</p>
          <p>
            Source code:{" "}
            <a
              href="https://github.com/studentname/online-bookstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
