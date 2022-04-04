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

    return (
        <div>
            <h1>pokemon Detail{id}</h1>
            <p><img src={pokemonDetails.sprites?.front_default} alt=""></img></p>
        
            <p> Base Experience: {(pokemonDetails.base_experience)}</p>
          

        </div>
    );
};

export default PokemonDetail;