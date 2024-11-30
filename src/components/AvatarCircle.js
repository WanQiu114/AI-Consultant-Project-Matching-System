import React from 'react';
import './AvatarCircle.css';

//this is for the contact info circle avatar, dont worry about this if you are not editing them

const AvatarCircle = ({ name, imageUrl }) => {
  return (
    <div className="avatar-circle">
      <img src={imageUrl} alt={name} className="avatar-image" />
      <p className="avatar-name">{name}</p>
    </div>
  );
};

export default AvatarCircle;
