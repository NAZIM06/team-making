import React from 'react';
import players from '../../fakeData/fakedata';

const Team = (props) => { 
    const item = props.item;
    const total = item.reduce((total, tm) => total +  Number(tm.salary), 0);
    
    
    
    return (
        <div>
            <h3>Players In Team</h3>
            <h5>Selected Players : {item.length} </h5>
            <p>Player's name: {item.map(m => <li type="1">{m.name}</li>)} </p>
            <p>Player's Salary: {item.map(m => <li type="1">${m.salary}</li>)} </p>
            <p>Total Budget : ${total}</p>
        </div>
    );
};

export default Team;