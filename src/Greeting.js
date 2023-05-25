export function Greeting({ name }) {
  return (
    <>
      <h3>Hello, {name}</h3>
      <img className='avatar' alt="Avatar" src="/avatar.jpeg"/>
    </>
  );
}
