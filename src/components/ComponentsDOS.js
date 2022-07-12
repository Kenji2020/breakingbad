import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import {ComponentsImg} from "./ComponentsImg";
export const ComponentsDOS = ({items}) =>{
    return(
        <div>
            {items.map((item)=>(
                <ComponentsImg item={item}/>
                ))}
        </div>
    )
}
