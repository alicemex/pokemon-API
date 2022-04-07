import React from 'react';

const Credits = () => {
    return (
        <div className='black-transparent Flex'>
           <div className='credits'>
                <p>
                <h2>Credits</h2> 
                    Ing. Dalía Macías Muñoz
                </p>
                <p>
                <h2>Resources:</h2> 
                    <a href={"https://pokeapi.co/"}>PokeApi</a>
                </p>
                <p>
                <h2>Mentor:</h2> 
                    Andrés Mendoza, Colombia.
                </p>
                <p>
                <h2>Tecnologías usadas</h2> 
                    React JS, Redux, API
                </p>
           </div>
           <img className="pokeball" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png"} alt="pokeball"></img>
        </div>
    );
};

export default Credits;