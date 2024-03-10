import React, { useContext, useRef, useState } from "react";
import logo from '../assets/profile.jpg'
import Modal from "./Modal";
import { CreateContext } from '../store/createContext';

export default function AddToTask() {
    const [check, setCheck] = useState();
    const { setSortinput, sort } = useContext(CreateContext)
    const modal = useRef();

    function handleClick() {
        modal.current.open();
    }

    return (
        <>
            <Modal ref={modal} />
            <div className="border-b-2">
                <div className="grid md:grid-cols-4 gap-10 items-center md:ms-48 md:me-48 p-2 ">
                    <img src={logo} alt="" className="w-30% md:w-[40%] rounded-[100px]" />
                    <h1 className="text-lg md:text-3xl">Notes APP</h1>
                    <button onClick={handleClick} className="p-3 bg-black text-white text-xl ps-5 pe-5 rounded-[50px]">Add-to-task</button>
                    <select name="" id="" onChange={  sort}>
                        <option value="">Sort</option>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                    {/* <button className="p-2 bg-black text-white text-xl  rounded-[50px]" onClick={sort}>sort</button> */}

                </div>
            </div>


        </>
    )
}