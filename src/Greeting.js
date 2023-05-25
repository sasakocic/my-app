import avatarStyles from './styles/Avatar.module.css';

function Greeting({ name }) {
  return (
    <>
      <h3>Hello, {name}</h3>
      <img className={avatarStyles.avatar} alt="Avatar" src="/avatar.jpeg"/>
    </>
  );
}

export default Greeting;