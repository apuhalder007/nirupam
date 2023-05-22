import { useState } from 'react';
import Child from "./Child";

const App = () => {
  const [players, setPlayers] = useState([
    {id: 1, name: 'Sachin', score: 100},
    {id: 2, name: 'Virat', score: 200},
    {id: 3, name: 'Rohit', score: 150},
    {id: 4, name: 'Dhoni', score: 50},
  ]);

  const deletePlayer = (id) => {
    console.log(id, 'get id from child');
    const newPlayers = players.filter((player) => player.id !== id);
    setPlayers(newPlayers);
  }
  return (
  <div className="container">
    <h2>TODO LIST</h2>
      <Child players={players} getDeletePlayerId={deletePlayer}/>
  </div>
    
  )
}

export default App;