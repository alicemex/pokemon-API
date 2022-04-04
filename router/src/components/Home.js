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
        <div>
            <h1>"home"</h1>
            <form action="" onSubmit={submit}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button>Submit</button>
      </form>
        </div>
           
    );
};

export default Home;
 