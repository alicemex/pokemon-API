import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const Description = ({species}) => {
const[history, setHistory] = useState(null);
useEffect(()=>{
    if(species){
        axios.get(species)
    .then(res=>setHistory(res.data.flavor_text_entries[4].flavor_text));
    }
},[species])
    return (
        <div className='info'>
            {history}
        </div>
    );
};

export default Description;