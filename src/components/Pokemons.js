import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import axios from "axios";
import PokemonInfo from './PokemonInfo';
import { useNavigate } from 'react-router-dom';

const Pokemons = () => {

const [pokemons, setPokemons] = useState([]);
const [category, setCategory] = useState([]);
const [pokemonName, setPokemonName] = useState("")
const [isCategorySelected, setIsCategorySelected] = useState(false);
//paginación, creamos una copia del fragmento de pokemones a mostrar
const [page, setPage] = useState(1);
const currentItemsPerPage = 80; //items mostrados por página
const lastIndex = page*currentItemsPerPage;
const firstIndex = lastIndex-currentItemsPerPage;
const pokemonPaginated = pokemons.slice(firstIndex,lastIndex);
const totalPages = Math.ceil(pokemons?.length/currentItemsPerPage);
const userName = useSelector((state)=>state.userName);
const navigate = useNavigate();
const dispatch = useDispatch();
const pagesNumber = [];


for(let i =1; i<=totalPages; i ++){
  pagesNumber.push(i);
  }

useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126`)
    .then( (res)=>{setPokemons(res.data.results)});

    //obtener una lista de categorías para filtrar por tipo 
    axios.get("https://pokeapi.co/api/v2/type/")
    .then(res=> setCategory(res.data.results))

}, [])

/* REDUX */
//useSelector Allows you to extract data from the Redux store state, using a selector function.
// selector function's argument the store state, and its valor de retorno es el valor de la propiedad  indicada 
//
/** este valor lo guardamos en una variable local, ya que esta se actualizará cada vez que 
 * el estado cambie, Each call to useSelector() creates an individual subscription to the Redux store. 
 * 
 */
const handleCategory=(e)=>{
const type = (e.target.value);
axios.get(type)
.then(res => setPokemons(res.data.pokemon)) 
setIsCategorySelected(true);

}
const submit=((e)=>{
  e.preventDefault();
  dispatch({
    type:"GET_ID",
    payload:pokemonName
  })
    // En la pokedex, esto funcionará
    navigate(`/Pokemons/${pokemonName}`);
})
    return (
    <>
      
    <div className='Welcome-pokemons'>
      <h2> Welcome to Pokedex, dear <strong>{userName}</strong>!</h2>
          <div className="Controls ">
                      <form className="input-container" onSubmit={submit}>
                     <p> <label htmlFor="pokemon-name">Search by name or #</label></p>
                        <input
                          type="text"
                          id="pokemon-name"
                          value={pokemonName}
                          onChange={(e) => setPokemonName(e.target.value)}
                          />
                      <button className='Search'>Search</button>
                    </form>
                    <label><i>Showing {page} of {totalPages} Pages</i></label>
                    <div>
                              <select onChange={handleCategory}>
                                    {category.map((category)=>(
                                      <option key={category.name} value={category.url}>
                                      {category.name}
                                    </option>
                                    ))}
                              </select>
                    </div>
        </div>            
   
        <div className='Container'>            
          {pokemonPaginated.map(pokemon =>(
              <div key={isCategorySelected  ? pokemon.pokemon?.url : pokemon.url}>
                  <PokemonInfo
                    pokemonUrl={isCategorySelected  ? pokemon.pokemon?.url : pokemon.url}
                  />
              </div>
            ))}
        </div>
          <div className="Controls">
              <button className="Arrow" onClick={()=>(setPage(page-1))} disabled ={page<=1}>◄</button>
                {pagesNumber.map(page=>(
                    <button className="pageNumber" onClick={()=>(setPage(page))} key={page}>{page}</button>
                ))}
              <button className="Arrow" onClick={()=>(setPage(page+1))} disabled = {page>=totalPages}>►</button>
          </div>   
    </div>
    </>
              
    );
};

export default Pokemons;