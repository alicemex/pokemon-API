import React from 'react';
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import axios from "axios";
import PokemonInfo from './PokemonInfo';

const Pokemons = () => {

const [pokemons, setPokemons] = useState([]);
const [pageOffset, setPageOffset] = useState(0);

const arrayPages =[
                    {offset:0, page:1},
                    {offset:80, page:2},
                    {offset:160, page:3},
                    {offset:240, page:4},
                    {offset:320, page:5},
                    {offset:400, page:6},
                    {offset:480, page:7},
                    {offset:560, page:8},
                    {offset:640, page:9},
                    {offset:720, page:10},
                    {offset:800, page:11},
                    {offset:880, page:12},
                    {offset:960, page:13},
                    {offset:1040, page:14},
                    {offset:1120, page:15}
                  ];
useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${pageOffset}&limit=80`)
    .then( (res)=>{setPokemons(res.data.results)});
}, [pageOffset])

const userName = useSelector((state)=>state.userName);
//useSelector Allows you to extract data from the Redux store state, using a selector function.
// selector function's argument the store state, and its valor de retorno es el valor de la propiedad  indicada 
//
/** este valor lo guardamos en una variable local, ya que esta se actualizará cada vez que 
 * el estado cambie, Each call to useSelector() creates an individual subscription to the Redux store. 
 * 
 */

    return (
        <>
              <div className='Welcome'>
                Welcome to Pokedex, dear  <strong> {userName}</strong>!
              </div>
            
              <div className='Container'>
                    {pokemons.map(pokemon =>(
                    <div key={pokemon.url}>
                       <PokemonInfo
                         pokemonUrl = {pokemon.url}
                       />
                    </div>
                    ))}
              </div>
              <div className="col-8 Flex">
               
                  {
                      arrayPages.map(
                        (pages)=>(
                          <button key={pages.offset} onClick={()=>{
                            setPageOffset(pages.offset)
                          }}> {pages.page} </button>
                        )
                      )
                    }         
              </div>
        </>
              
    );
};

export default Pokemons;