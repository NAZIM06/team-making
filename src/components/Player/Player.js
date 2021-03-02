import React from 'react';
import './Player.css';

const Player = (props) => {

    const { img, name, salary } = props.player;

    
    
    return (
        <div className="player">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="player-body">
                <h4 className="player-name">{name}</h4>
                <p>${salary}</p>
                <button 
                className="main-button"
                onClick={() => props.handleAddPlayer(props.player)}
                >Add To Team</button>
            </div>
        </div>
    );
};

export default Player;