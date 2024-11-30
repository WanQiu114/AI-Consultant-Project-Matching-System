import React, { useState, useRef } from 'react';
import './ProductDetail.css';

const ProductDetailA = () => {
  const [showFindCandidatePopup, setShowFindCandidatePopup] = useState(false);
  const [expandedRowIndex, setExpandedRowIndex] = useState(null); // 控制展开行的索引
  const descriptionRef = useRef(null); // 引用项目描述

  // 显示“Find Best Fit Candidate”弹窗
  const handleFindCandidateClick = () => {
    setShowFindCandidatePopup(true);
  };

  // 关闭“Find Best Fit Candidate”弹窗
  const handleCloseFindCandidatePopup = () => {
    setShowFindCandidatePopup(false);
    setExpandedRowIndex(null);
  };

  // 切换展开行
  const handleExpandClick = (index) => {
    if (expandedRowIndex === index) {
      setExpandedRowIndex(null); // 如果已经展开，则关闭
    } else {
      setExpandedRowIndex(index); // 否则展开
    }
  };

  // 示例候选人数据
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
      <h1>Product Feature A</h1>
      <img src="../assets/uploadedImage.png" alt="Product Feature A" className="product-detail-image" />
      <p ref={descriptionRef}>
        Feature A is an innovative solution that provides high-quality functionality to meet diverse needs. It is designed to make your life easier with seamless integration and exceptional performance.
      </p>
      <button onClick={handleFindCandidateClick} className="find-candidate-button">Find Best Fit Candidate</button>

      {/* Find Best Fit Candidate 弹窗 */}
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

export default ProductDetailA;
