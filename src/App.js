import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import axios from "axios";
import {ComponentsDOS} from "./components/ComponentsDOS";
import {ComponentsImg} from "./components/ComponentsImg";

function App() {
    const [items, setItems] = useState([]);
    const fraseRandom = () => {
        const frases = ["Hola", "Adios", "Buenas", "Buenas tardes", "Buenas noches"];
        const random = Math.floor(Math.random() * frases.length);
        return frases[random];
    }
    const fraseRandomBreakingBad = async () => {
            const result = await axios(
                'https://www.breakingbadapi.com/api/quote/random'
            )
            console.log(result.data)
            setItems(result.data)
        }
    useEffect(() => {
        fraseRandomBreakingBad();

    },[])
    return (
        <div>
            {items.map((item) => (
                <div>
                    <h1 className='Letras'>{item.quote}</h1>
                    <h1 className='Autor'>{item.author}</h1>
                    <button className={'Boton'} onClick={()=>{fraseRandomBreakingBad()}}>Presiona para generar una nueva frase</button>
                </div>
            ))}
        </div>
    )

}

export default App;
