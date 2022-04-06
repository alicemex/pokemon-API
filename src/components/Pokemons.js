import React from 'react';
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import axios from "axios";
import PokemonInfo from './PokemonInfo';

const Pokemons = () => {

const [pokemons, setPokemons] = useState([]);
const [filtered, setFiltered] = useState([]);
const [category, setCategory] = useState([]);

useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126`)
    .then( (res)=>{setPokemons(res.data.results)});

    //obtener una lista de categorías para filtrar por tipo 
    axios.get("https://pokeapi.co/api/v2/type/")
    .then(res=> setCategory(res.data.results))

}, [])

//paginación, creamos una copia del fragmento de pokemones a mostrar
const [page, setPage] = useState(1);
const currentItemsPerPage = 80; //items mostrados por página
const lastIndex = page*currentItemsPerPage;
const firstIndex = lastIndex-currentItemsPerPage;
const pokemonPaginated = pokemons.slice(firstIndex,lastIndex);
const totalPages = Math.ceil(pokemons?.length/currentItemsPerPage);
const userName = useSelector((state)=>state.userName);
const pagesNumber = [];
for(let i =1; i<=totalPages; i ++){
pagesNumber.push(i);
}


//useSelector Allows you to extract data from the Redux store state, using a selector function.
// selector function's argument the store state, and its valor de retorno es el valor de la propiedad  indicada 
//
/** este valor lo guardamos en una variable local, ya que esta se actualizará cada vez que 
 * el estado cambie, Each call to useSelector() creates an individual subscription to the Redux store. 
 * 
 */
const handleCategory=(e)=>{
const type = (e.target.value);
console.log(type);
axios.get(`https://pokeapi.co/api/v2/type/${type}`)
.then(res => setFiltered(res.data.pokemon))
console.log(filtered)
}

    return (
        <>
         
          <div className='Welcome'> Welcome to Pokedex, dear <strong>{userName}</strong>!</div>

          <div className="Controls">
                <h3>Showing {page} of {totalPages} Pages</h3>
                <div>
                          <select onChange={handleCategory}>
                                {category.map((category)=>(
                                  <option key={category.name} value={category.name}>
                                  {category.name}
                                </option>
                                ))}
                          </select>
              
                            <button className={"Arrow"} onClick={()=>(setPage(page-1))} disabled ={page<=1}>Anterior</button>
                            {pagesNumber.map(page=>(
                                <button onClick={()=>(setPage(page))} key={page}>{page}</button>
                            ))}
                            <button onClick={()=>(setPage(page+1))} disabled = {page>=totalPages}>Siguente</button>
                </div>
           </div>              
          
                    <div className='Container'>            
                     {pokemonPaginated.map(pokemon =>(
                     <div key={pokemon.url}>
                        <PokemonInfo
                          pokemonUrl = {pokemon.url}
                        />
                     </div>
                           ))}
                     </div>
        </>
              
    );
};

export default Pokemons;