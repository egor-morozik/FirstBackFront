const ProfileCard = ({ name, email }) => (
  <div style={{width: 378, padding: 16, background: 'white', borderRadius: 12, outline: '1px #D0D0D0 solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
      <div style={{alignSelf: 'stretch'}}>
        <span style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>{name}</span>
        <span style={{color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}> </span>
        <span style={{color: 'white', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>r</span>
      </div>
      <div style={{alignSelf: 'stretch', color: '#575757', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>{email}</div>
    </div>
  </div>
);

import React, { useEffect, useState } from 'react';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('/api/get_profiles/')
      .then(res => res.json())
      .then(data => setProfiles(data));
  }, []);

  return (
    <div style={{width: 177, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
      {profiles.map((profile, index) => (
        <ProfileCard 
          key={index} 
          name={profile.name} 
          email={profile.email} 
        />
      ))}
    </div>
  );
};

export default ProfileList;
