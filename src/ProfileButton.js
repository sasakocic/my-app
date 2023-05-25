import { useState } from 'react';
import { Profile } from './Profile';

export function ProfileButton() {
  const [showProfile, setShowProfile] = useState(false);
  const toggleShowProfile = () => {
    setShowProfile(!showProfile);
  };
  return (
    <div>
      <button id="show-hide" onClick={toggleShowProfile}>
        {showProfile ? 'Hide' : 'Show'} Profile
      </button>
      {showProfile && <Profile />}
    </div>
  );
}
