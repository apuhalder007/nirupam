import { useState } from 'react';

const Child = ({players, getDeletePlayerId}) => {

    const handleDelete = (id) => {
        
        getDeletePlayerId(id);
    }
    return (
        <div>
           <ul>
            {
                players.length > 0 && players.map(player => (
                    <li key={player.id}>{player.name} - {player.score}  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <span onClick={()=>handleDelete(player.id)}>X</span></li>
                )
                )
            }
           </ul>
            
        </div>
    )
    }

    export default Child;