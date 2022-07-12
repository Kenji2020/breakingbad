import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import '../App.css'
export const ComponentsImg = ({item}) =>{
    return(
        <div>
            {item.name}
            <img className="Imagencita" src={item.img}/>
            {item.nickname}
        </div>
    )
}
