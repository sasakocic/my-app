import { Button } from 'react-bootstrap';

export function MyButton({count, onClick}) {

    return (
    <Button variant="primary" onClick={onClick}>
      Clicked {count} times
    </Button>
  );
}
