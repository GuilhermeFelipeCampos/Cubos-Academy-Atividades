import kelvin from './assets/kelvin-costa.png';
import { useState } from 'react';

const UserCard = ({ name, picture, username, followers, following }) => {

  const [click, setClick] = useState('button');
  const [count, setCount] = useState(followers);
  const clickFollow = () => {

    const oneMore = click === 'button' ? count + 1 : count - 1;
    const follow = click === 'button' ? 'button clicked' : 'button';
    setClick(follow);
    setCount(oneMore);
  }

  return (
    <div>
      <div className="card">
        <img src={picture} alt="kelvin costa" />
        <h2>{name}</h2>
        <span className="username">{username}</span>
        <span className="stats">{count} seguidores<br />{following} seguindo</span>
      </div>
      <button className={click} onClick={clickFollow}>{click === 'button' ? 'SEGUIR' : 'SEGUINDO'}</button>
    </div>

  );
}

function App() {
  const users = [
    {
      id: 1,
      name: "Kelvin Costa",
      picture: kelvin,
      username: "@costa",
      followers: 144,
      following: 207,
    },

  ];
  return (
    <div className="App">

      {users.map((user) => {

        return <UserCard
          key={user.id}
          {...user}
        />
      })

      }

    </div>
  );
}

export default App;