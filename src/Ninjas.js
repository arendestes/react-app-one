import React from 'react';
import "./ninja.css"
const Ninjas = ({ ninjas, deleteNinja }) => {
    const ninjaList = ninjas.map(ninja => {
        return ninja.age < 30 ?(
            <div className="Ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt color: {ninja.belt}</div>
                <button onClick={()=>{deleteNinja(ninja.id)}}>Delete</button>
            </div>
        ): null;
    }

    );
    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}


export default Ninjas
