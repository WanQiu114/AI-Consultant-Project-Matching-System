import React, { useState, useRef } from 'react';
import './ProductDetail.css';

const ProductDetailD = () => {
  const [showFindCandidatePopup, setShowFindCandidatePopup] = useState(false);
  const [expandedRowIndex, setExpandedRowIndex] = useState(null); 
  const descriptionRef = useRef(null); 


  const handleFindCandidateClick = () => {
    setShowFindCandidatePopup(true);
  };

 
  const handleCloseFindCandidatePopup = () => {
    setShowFindCandidatePopup(false);
    setExpandedRowIndex(null);
  };


  const handleExpandClick = (index) => {
    if (expandedRowIndex === index) {
      setExpandedRowIndex(null); 
    } else {
      setExpandedRowIndex(index); 
    }
  };


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
      <h1>Product Feature D</h1>
      <img src="../assets/uploadedImageD.png" alt="Product Feature D" className="product-detail-image" />
      <p ref={descriptionRef}>
        Feature D leverages cutting-edge technology to offer seamless integration, providing users with a powerful and intuitive experience to maximize efficiency.
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

export default ProductDetailD;
