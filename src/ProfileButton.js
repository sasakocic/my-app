import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Profile } from './Profile';

export function ProfileButton() {
  const [showProfile, setShowProfile] = useState(false);
  const toggleShowProfile = () => {
    setShowProfile(!showProfile);
  };
  return (
    <div>
      <Button id="show-hide" onClick={toggleShowProfile}>
        {showProfile ? 'Hide' : 'Show'} Profile
      </Button>
      {showProfile && <Profile />}
    </div>
  );
}
