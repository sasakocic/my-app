import { useState } from 'react';

export function ProfileButton() {
  const [showProfile, setShowProfile] = useState(false);
  const toggleShowProfile = () => {
    setShowProfile(!showProfile);
  };
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }
  
  return (
    <div>
      
      <button id="show-hide" onClick={toggleShowProfile}>
        {showProfile ? 'Hide' : 'Show'} Profile
      </button>
      {showProfile && <Profile />}
    </div>
  );
}
