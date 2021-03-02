import React, { useState } from 'react';
import fakeData from '../../fakeData/fakedata'
import Player from '../Player/Player';
import Team from '../Team/Team';
import './Dashboard.css'

const Dashboard = (props) => {
    const data = fakeData.slice(0, 14);
    const [persons, setPersons] = useState(data);
    const [item, setItem] = useState([]);
    const handleAddPlayer = (player) =>{
        
        const newItem = [...item, player];
        setItem(newItem);
    
    }



    return (
        <div className="main-div">
            <div className="person-div">

                {
                    persons.map(prsn => <Player handleAddPlayer={handleAddPlayer}
                        player={prsn}></Player>)
                }
            </div>
            <div className="team-div">
                <Team item={item}></Team>
            </div>


        </div>
    );
};

export default Dashboard;