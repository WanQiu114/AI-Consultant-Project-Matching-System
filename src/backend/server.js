const express = require('express');
const cors = require('cors');
const fs = require('fs').promises; // Use fs.promises for async/await
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const detailPagesPath = path.join(__dirname, '..', 'detailPages');
const productsSectionPath = path.join(__dirname, '..', 'components', 'ProductsSection.js');
const headerPath = path.join(__dirname, '..', 'components', 'Header.js');
let completeResult = {};

// Ensure the directory exists
fs.mkdir(detailPagesPath, { recursive: true }).catch(console.error);

app.post('/api/createProjectDetail', async (req, res) => {
  const { pname, description, duration, location, budget } = req.body;

  try {
    // Fetch existing files to determine the next letter
    const existingFiles = await fs.readdir(detailPagesPath);
    const nextLetter = String.fromCharCode('A'.charCodeAt(0) + existingFiles.length);


    // Fetch team structure
    const response = await fetch('http://192.168.2.46:5005/create_team_structure', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });


    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let reader = response.body.getReader();
    let decoder = new TextDecoder('utf-8');
    let result = '';

    async function read() {
      const { done, value } = await reader.read();
      if (done) return result;
      result += decoder.decode(value, { stream: true });
      return read();
    }

    completeResult = await read();
    completeResult = JSON.parse(completeResult); // Parse the JSON response
      // Serialize `completeResult` safely for embedding in JavaScript
    let  serializedCompleteResult = JSON.stringify(completeResult, null, 2);
   
    const req_candidates = {"roles_input":JSON.parse(serializedCompleteResult).team}
    const response_get_Candidates = await fetch('http://192.168.2.46:5005/get_candidates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req_candidates),
    });
     reader = response_get_Candidates.body.getReader();
     decoder = new TextDecoder('utf-8');
     result = '';


    let completeGetCandidateResult = await read();
    completeGetCandidateResult = JSON.parse(completeGetCandidateResult); // Parse the JSON response
      // Serialize `completeResult` safely for embedding in JavaScript   
    const serializedcompleteGetCandidateResult = JSON.stringify(completeGetCandidateResult, null, 2);
    const newFileName = `ProductDetail${nextLetter}.js`;
    const newFilePath = path.join(detailPagesPath, newFileName);

    // New file content with template literals
    const newFileContent = `
      import React, { useState, useRef } from 'react';
      import './ProductDetail.css';

      const ProductDetail${nextLetter} = () => {
        const [showFindCandidatePopup, setShowFindCandidatePopup] = useState(false);
        const [expandedRowIndex, setExpandedRowIndex] = useState(null);
        const [expandedSkillRowIndex, setExpandedSkillRowIndex] = useState(null);
        const descriptionRef = useRef(null);
        const headers = ['role', 'skills', 'quantity'];
        const completeResult = ${serializedCompleteResult};
        const serializedcompleteGetCandidateResult = ${serializedcompleteGetCandidateResult};
        
        const handleFindCandidateClick = () => setShowFindCandidatePopup(true);
        const handleCloseFindCandidatePopup = () => {
          setShowFindCandidatePopup(false);
          setExpandedRowIndex(null);
          setExpandedSkillRowIndex(null);
        };

        const handleExpandClick = (index) => {
          setExpandedRowIndex(expandedRowIndex === index ? null : index);
        };

        const handleSkillExpandClick = (index) => {
          setExpandedSkillRowIndex(expandedSkillRowIndex === index ? null : index);
        };

        return (
          <div className="product-detail">
            <h1>Project Title: ${pname}</h1>
            <p ref={descriptionRef}>
              <br />
              <strong>Description:</strong> ${description}<br />
              <strong>Duration:</strong> ${duration}<br />
              <strong>Working Location:</strong> ${location}<br />
              <strong>Budget:</strong> ${budget}<br />
            </p>
            <table border="1" cellPadding="5">
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <th key={index}>{header.toUpperCase()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {completeResult.team.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {headers.map((header, cellIndex) => (
                      <td key={cellIndex}>{row[header]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={handleFindCandidateClick} className="find-candidate-button">Find Best Fit Candidate</button>

            {showFindCandidatePopup && (
              <div className="popup-overlay">
                <div className="popup-content-small">
                  <h2>Find Best Fit Candidate</h2>
                  <div>
                    {Object.keys(serializedcompleteGetCandidateResult).map((role, roleIndex) => (
                      <div key={roleIndex}>
                        <h2>{role}</h2>
                        <table border="1" cellPadding="5">
                          <thead>
                            <tr>
                              <th>Email</th>
                              <th>Name</th>
                              <th>Phone</th>
                              <th>Score</th>
                              <th>Skills</th>
                              <th>Tech Stack</th>
                            </tr>
                          </thead>
                          <tbody>
                            {serializedcompleteGetCandidateResult[role].map((candidate, index) => (
                              <tr key={index}>
                                <td>{candidate.email}</td>
                                <td>{candidate.first_name} {candidate.last_name}</td>
                                <td>{candidate.phone}</td>
                                <td>{candidate.score}</td>
                                <td>
                                  <button onClick={() => handleSkillExpandClick(index)} className="expand-button">
                                    {expandedSkillRowIndex === index ? "Collapse" : "Expand"}
                                  </button>
                                  {expandedSkillRowIndex === index && (
                                    <ul className="skills-list">
                                      {candidate.skills.split("][").map((skillSet, i) => (
                                        <li key={i}>{skillSet.replace(/[[]']/g, "").split(", ").join(", ")}</li>
                                      ))}
                                    </ul>
                                  )}
                                </td>
                                <td>
                                  <button onClick={() => handleExpandClick(index)} className="expand-button">
                                    {expandedRowIndex === index ? "Collapse" : "Expand"}
                                  </button>
                                  {expandedRowIndex === index && (
                                    <ul className="candidate-list">
                                      {candidate.skills.split("][")[1].replace(/[[]']/g, "").split(", ").map((topSkill, i) => (
                                        <li key={i}>{topSkill}</li>
                                      ))}
                                    </ul>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>
                  <button onClick={handleCloseFindCandidatePopup} className="close-popup-button">Close</button>
                </div>
              </div>
            )}
          </div>
        );
      };

      export default ProductDetail${nextLetter};
    `.trim();

    // Write the new file
    await fs.writeFile(newFilePath, newFileContent);

    // Update ProductsSection.js
    const productsSectionData = await fs.readFile(productsSectionPath, 'utf8');
    const updatedProductsSectionData = productsSectionData.replace(
      /(const products = \[)([\s\S]*?)(\];)/,
      `$1$2,${`{ id: '${nextLetter}', title: '${pname}', description: '${description}', image: uploadedImage5 }`}$3`
    );
    await fs.writeFile(productsSectionPath, updatedProductsSectionData);

    // Update Header.js
    const headerData = await fs.readFile(headerPath, 'utf8');
    const updatedHeaderData = headerData.replace(
      /(const projects = \[)([\s\S]*?)(\];)/,
      `$1$2,${`{ id: '${nextLetter}', name: '${pname}', client: 'Client ${nextLetter}', duration: '${duration}', city: '${location}', Budget: '${budget}' }`}$3`
    );
    await fs.writeFile(headerPath, updatedHeaderData);

    console.log('Files updated successfully:', newFileName);
    res.status(200).send('Project detail file, ProductsSection, and Header updated successfully');

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Failed to process request');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
