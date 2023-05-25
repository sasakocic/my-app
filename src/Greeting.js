import avatarStyles from './styles/Avatar.module.css';
export function Greeting({ name }) {
  return (
    <>
      <h3>Hello, {name}</h3>
      <img className={avatarStyles.avatar} alt="Avatar" src="/avatar.jpeg"/>
    </>
  );
}
