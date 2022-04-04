import React, { useEffect,useState } from 'react';
import axios from "axios";
import {  Link } from "react-router-dom";
const PokemonInfo = ({pokemonUrl}) => {
const [pokemonData, setpokemonData] = useState({});


useEffect(()=>{
 if(pokemonUrl){
    axios.get(pokemonUrl)
    .then(res=>setpokemonData(res.data));
 }
},[pokemonUrl])

const pokeInfo = (id)=>{
    console.log(id)
}
    return (
        <>
             
               <div className='Card'>
                    <ul >
                        <li>Name: {pokemonData.name}</li>
                        <li>height: {pokemonData.height}</li>
                        <li>height: {pokemonData.id}</li>
                        <li><img src ={pokemonData.sprites?.front_default} alt=""></img></li>
                        <Link className="navItem" to="/">
                        <button onClick={()=>{pokeInfo(pokemonData.id)}}>More info</button>
{/*hasta aqui le dejo por hoy, falta hacer que el id se mande al componente que se va a mostrar */}
                        </Link>
                    </ul> 
                </div>
          
        </>
    );
};

export default PokemonInfo;