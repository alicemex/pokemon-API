import React, { useEffect,useState } from 'react';
import axios from "axios";
import {  Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const PokemonInfo = ({pokemonUrl}) => {
const [pokemonData, setpokemonData] = useState({});

const dispatch = useDispatch();

useEffect(()=>{
 if(pokemonUrl){
    axios.get(pokemonUrl)
    .then(res=>setpokemonData(res.data));
 }
},[pokemonUrl])

const pokeInfo = (id)=>{
    dispatch({
        type:"GET_ID",
        payload: id
    })
}
    return (
        <>
            
               <div className='Card'>
                    <ul >
                        <li>Name: {pokemonData.name}</li>
                        <li>height: {pokemonData.height}</li>
                        <li>ID: {pokemonData.id}</li>
                        <li><img src ={pokemonData.sprites?.front_default} alt=""></img></li>
                        <Link to="/Pokemons/:id">
                             <button onClick={()=>{pokeInfo(pokemonData.id)}}>
                                 More info 
                            </button>  
                        </Link>
                    </ul> 
                </div>
          
        </>
    );
};

export default PokemonInfo;