import { Card } from 'react-bootstrap';
import './Profile.css';

export function Profile() {
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title className="title">{user.name}</Card.Title>
        <Card.Img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </Card.Body>
    </Card>
  );
}
