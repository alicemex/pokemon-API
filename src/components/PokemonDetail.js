import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Description from './Description';

const PokemonDetail = () => {
const [pokemonDetails, setpokemonDetails] = useState({});
const id = useSelector(state=>(state.id));

useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => setpokemonDetails(res.data))
},[id])

    return (
        <div className='PokemonDetail'>
            <h2>{pokemonDetails.name}</h2>
            <img src={pokemonDetails.sprites?.other.dream_world.front_default || pokemonDetails.sprites?.front_default} alt=""></img>
            <p  className="detailFeature"> <strong>Type:</strong> 
            {pokemonDetails.types?.map(type => <div className="info">{type.type.name}</div>)}
            </p>
           
            <p className="detailFeature"> <strong>Specie:</strong>
                <div className="info">
                    <Description species = {pokemonDetails.species?.url}/>
                </div>
            </p>
            <p className="detailFeature">Id:  <div className="info">#00{id}</div></p>
            <p className="detailFeature"> <strong>Base Experience:</strong><div className='info'> {(pokemonDetails.base_experience)}</div></p>
            <p> <strong>Pokemon's back image</strong>
            <img className="back_default" src={pokemonDetails.sprites?.back_default} alt=""></img>
            </p>
            <p className="detailFeature"> <strong>Dimensions:</strong> 
                <div className='info'>Weight: {(pokemonDetails.weight)}Lbs</div>
                <div className='info'>Height: {(pokemonDetails.height)}"</div>
            </p>
            
            
          

        </div>
    );
};

export default PokemonDetail;