import React, { useEffect, useRef } from "react";
import { CreateContext } from '../store/createContext';
import { useContext, useState } from 'react';

import NotesContent from "./NotesContent";
export default function Notes() {
  
    const { Arr, input, product, sortInput, fav } = useContext(CreateContext);
    const data = useContext(CreateContext);
    const [id, setId] = useState(null)
    
  
    function handleColor() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        let color = `bg-[${bgColor}]`
        return color;

    }
    let ourColor = '';
   
   
    let option;





    return (<>
      

        <div className="md:ms-48 md:me-48 mt-10 grid grid-cols-2 md:grid-cols-3 gap-10">
            {Arr.length===0 ? <p className="text-2xl font-bold ">Please Add Notes...</p> :input === '' ? Arr.map((item,id) => (
                <NotesContent item={item} id1={id} />
            )) : product.map((item,id) => (
                <NotesContent item={item} id1={id} />
            ))

            }
        </div>
    </>)

}