import React, { useEffect, useRef } from "react";
import { CreateContext } from '../store/createContext';
import EditModal from "./editModal";
import { useContext, useState } from 'react';
export default function NotesContent({item,id1}) {
  
    const { Arr, input, product, sortInput ,fav} = useContext(CreateContext);
    const data = useContext(CreateContext);
    const[color1,setColor]=useState(false)
    const [id, setId] = useState(null)

    let dialog = useRef()
    function opemModal() {
        dialog.current.open();
    }
    function handleColor() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        let color = `bg-[${bgColor}]`
        return color;

    }
    let ourColor = '';
    let content;
    
    let option;


function handleStar(){
    setColor((prev)=>!prev)
}

    
return (<>
   

   <EditModal ref={dialog} id={id} />
        
            <div className={color1 ? "bg-[#FFFF00] " : option=handleColor()}>
                <div className="p-3">
                    <button onClick={() => { setId(id1); opemModal() }}><i class="fa-solid fa-pen-to-square md:ms-48 text-2xl"></i></button>
                    <h1 className="text-2xl">{item.heading}</h1>
                    <p className="text-lg">{item.description}</p>
                    <p className="text-lg">{item.date}</p>
                </div>
                <button onClick={ handleStar}><i class="fa-regular fa-star md:ms-48 text-2xl"></i></button>
            </div>
        


</>)

}