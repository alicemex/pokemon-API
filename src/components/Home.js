import React from 'react';
import  { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = (e) => {
      e.preventDefault();
      if(userName){
        dispatch({
          type: "GET_USERNAME",
          payload: userName
        });        
        navigate("/pokemons");      
      }else{
        window.alert("no userName, please introduce an userName and try again");
      }
    };

    return (
       <div className="black-transparent">
          <div className='Welcome'>
          <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png"} alt="pokeball"></img>
          <h3> Hello trainer!</h3>
          <p> To start, please insert your name below</p>           
          <form action="" onSubmit={submit}>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
              <button>Submit</button>
          </form>
          <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"} alt="logopokemon"></img>
        </div> 
       </div>
    );
};

export default Home;
 