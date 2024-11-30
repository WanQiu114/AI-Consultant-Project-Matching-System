const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const detailPagesPath = path.join(__dirname, '..', 'detailPages');
const productsSectionPath = path.join(__dirname, '..','components', 'ProductsSection.js');
const headerPath = path.join(__dirname, '..','components', 'Header.js');


if (!fs.existsSync(detailPagesPath)) {
  fs.mkdirSync(detailPagesPath);
}

app.post('/api/createProjectDetail', (req, res) => {
  const { pname, description, duration, location, budget } = req.body;

  // file naming, it goes from A - Z
  const existingFiles = fs.readdirSync(detailPagesPath);
  const nextLetter = String.fromCharCode('A'.charCodeAt(0) + existingFiles.length);

  // follow the demo content structure
  const newFileName = `ProductDetail${nextLetter}.js`;
  const newFilePath = path.join(detailPagesPath, newFileName);
  const newFileContent = `
  import React, { useState, useRef } from 'react';
  import './ProductDetail.css';

  const ProductDetail${nextLetter} = () => {
    const [showFindCandidatePopup, setShowFindCandidatePopup] = useState(false);
    const [expandedRowIndex, setExpandedRowIndex] = useState(null); // Controls the expanded row index
    const descriptionRef = useRef(null); // Reference to project description

    // Show "Find Best Fit Candidate" popup
    const handleFindCandidateClick = () => {
      setShowFindCandidatePopup(true);
    };

    // Close "Find Best Fit Candidate" popup
    const handleCloseFindCandidatePopup = () => {
      setShowFindCandidatePopup(false);
      setExpandedRowIndex(null);
    };

    // Toggle expanded row
    const handleExpandClick = (index) => {
      if (expandedRowIndex === index) {
        setExpandedRowIndex(null); // If already expanded, collapse
      } else {
        setExpandedRowIndex(index); // Otherwise, expand
      }
    };

    // Sample candidate data
    const candidatesData = [
      {
        role: 'Software Engineer',
        numberOfPeople: 5,
        techStack: 'React, Node.js, Python',
        topCandidates: ['Candidate 1', 'Candidate 2', 'Candidate 3'],
      },
      {
        role: 'Data Scientist',
        numberOfPeople: 3,
        techStack: 'Python, TensorFlow, SQL',
        topCandidates: ['Candidate 4', 'Candidate 5', 'Candidate 6'],
      },
    ];

    return (
      <div className="product-detail">
        <h1>Project Title: ${pname}</h1>
        
        <p ref={descriptionRef}>
          <br />
          <br />
          <strong>Description:</strong> ${description}<br />
          <strong>Duration:</strong> ${duration}<br />
          <strong>Working Location:</strong> ${location}<br />
          <strong>Budget:</strong> ${budget}<br />
        </p>
        <button onClick={handleFindCandidateClick} className="find-candidate-button">Find Best Fit Candidate</button>

        {/* Find Best Fit Candidate popup */}
        {showFindCandidatePopup && (
          <div className="popup-overlay">
            <div className="popup-content-small">
              <h2>Find Best Fit Candidate</h2>
              <div className="resource-list-container">
                <table className="resource-table">
                  <thead>
                    <tr>
                      <th>Role</th>
                      <th>Number of People for this Role</th>
                      <th>Tech Stack</th>
                      <th>Top X Candidates Selected from Dataset</th>
                    </tr>
                  </thead>
                  <tbody>
                    {candidatesData.map((candidate, index) => (
                      <tr key={index}>
                        <td>{candidate.role}</td>
                        <td>{candidate.numberOfPeople}</td>
                        <td>{candidate.techStack}</td>
                        <td>
                          <button onClick={() => handleExpandClick(index)} className="expand-button">
                            {expandedRowIndex === index ? 'Collapse' : 'Expand'}
                          </button>
                          {expandedRowIndex === index && (
                            <ul className="candidate-list">
                              {candidate.topCandidates.map((topCandidate, i) => (
                                <li key={i}>{topCandidate}</li>
                              ))}
                            </ul>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

  // write into both productsection and header
  fs.writeFile(newFilePath, newFileContent.trim(), (err) => {
    if (err) {
      console.error('Error creating project detail file:', err);
      return res.status(500).send('Failed to create project detail file');
    }
    // update productsection file, so it will add to the big card section
    const newProductEntry = `
    {
      id: '${nextLetter}',
      title: '${pname}',
      description: '${description}',
      image: uploadedImage5, // Temporary image
    }`;
    // this will add to the header dropdown card
    const newProjectEntry = `
    {
      id: '${nextLetter}',
      name: '${pname}',
      client: 'Client ${nextLetter}',
      duration: '${duration}',
      city: '${location}',
      Budget: '${budget}',
    }`;

    
    fs.readFile(productsSectionPath, 'utf8', (readErr, data) => {
      if (readErr) {
        console.error('Error reading ProductsSection file:', readErr);
        return res.status(500).send('Failed to read ProductsSection file');
      }

  
      const updatedProductsSectionData = data.replace(
        /(const products = \[)([\s\S]*?)(\];)/,
        `$1$2,${newProductEntry}$3`
      );

   
      fs.writeFile(productsSectionPath, updatedProductsSectionData, 'utf8', (writeErr) => {
        if (writeErr) {
          console.error('Error updating ProductsSection file:', writeErr);
          return res.status(500).send('Failed to update ProductsSection file');
        }

   
        fs.readFile(headerPath, 'utf8', (headerReadErr, headerData) => {
          if (headerReadErr) {
            console.error('Error reading Header file:', headerReadErr);
            return res.status(500).send('Failed to read Header file');
          }

          const updatedHeaderData = headerData.replace(
            /(const projects = \[)([\s\S]*?)(\];)/,
            `$1$2,${newProjectEntry}$3`
          );

          
          fs.writeFile(headerPath, updatedHeaderData, 'utf8', (headerWriteErr) => {
            if (headerWriteErr) {
              console.error('Error updating Header file:', headerWriteErr);
              return res.status(500).send('Failed to update Header file');
            }

            console.log('Project detail file, ProductsSection, and Header updated successfully:', newFileName);
            res.status(200).send('Project detail file, ProductsSection, and Header updated successfully');
          });
        });
      });
    });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});