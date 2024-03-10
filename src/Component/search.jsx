import React, { useContext } from "react";
import { CreateContext } from '../store/createContext';
export default function Search() {
    const { input, setinput, search } = useContext(CreateContext)
    function handleSearch(e){
        setinput(e.target.value)
        search()
    }
    return (
        <>
            <div className="text-center mt-5 md:ms-48 md:me-48">
                <input type="text" className="w-[30%] md:w-[50%] border-2 p-2 rounded-[50px] me-3" placeholder="search..." onChange={handleSearch} />
            
            </div>
        </>
    )
}