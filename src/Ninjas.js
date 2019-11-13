import React from 'react';

const Ninjas = ({ ninjas }) => {
    const ninjaList = ninjas.map(ninja => {
        return ninja.age < 30 ?(
            <div className="Ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt color: {ninja.belt}</div>
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
