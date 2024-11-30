import React, { useState } from 'react';
import './AddProjectSection.css';

function AddProjectSection() {
  const [formData, setFormData] = useState({
    description: '',
    duration: '',
    location: '',
    budget: '',
  });
 
  const project_structure = {}
  const [showPopup, setShowPopup] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowPopup(true); 

    // the "success" popup window will dissapear after 3 sec
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    // send POST request to server
    try {
      const response = await fetch('http://localhost:5000/api/createProjectDetail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Project detail file created successfully');
      } else {
        console.error('Failed to create project detail file');
      }
    } catch (error) {
      console.error('Error:', error);
    }


  };

  return (
    <section className="add-project-section">
      <h2 className="add-project-heading">Add a New Project</h2>
      <form className="add-project-form" onSubmit={handleSubmit}>
 
        <label>
          Project Description:
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>

        <label>
          Duration:
          <input type="text" name="duration" value={formData.duration} onChange={handleChange} required />
        </label>

        <label>
          Working Location:
          <input type="text" name="location" value={formData.location} onChange={handleChange}  />
        </label>
        <label>
          Budget:
          <input type="text" name="budget" value={formData.budget} onChange={handleChange} required />
        </label>


        <button type="submit" className="submit-button">Submit Project</button>
      </form>
      {Object.keys(project_structure).length > 0 && (
        <div className='responce'>
          {project_structure}
        </div>
      )}
      {showPopup && (
        <div className="popup">
          <p>Project submitted successfully!</p>
        </div>
      )}
    </section>
  );
}

export default AddProjectSection;
