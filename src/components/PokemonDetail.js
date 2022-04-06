import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonDetail = () => {
const [pokemonDetails, setpokemonDetails] = useState({});
const id =useSelector(state=>(state.id));

useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => setpokemonDetails(res.data))
},[id])

console.log(pokemonDetails.sprites?.front_default)

    return (
        <div className='PokemonDetail'>
            <h2>{pokemonDetails.name}</h2>
            <p><img src={pokemonDetails.sprites?.other.dream_world.front_default || pokemonDetails.sprites?.front_default} alt=""></img></p>
            <p> <strong>Type:</strong> 
            {pokemonDetails.types?.map(type => <div>{type.type.name}</div>)}
            </p>
           
            <p>#00{id}</p>
            <p> <strong>Base Experience:</strong> {(pokemonDetails.base_experience)}</p>
            <p> <strong>Weight:</strong> {(pokemonDetails.weight)}Lbs</p>
            <p> <strong>Height:</strong> {(pokemonDetails.height)}"</p>
            
          

        </div>
    );
};

export default PokemonDetail;