import { CreateContext } from '../store/createContext';
import { forwardRef, useImperativeHandle, useContext, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ }, ref) {
    const { Arr, adData } = useContext(CreateContext);
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('')
    const dialog = useRef();
    const [val,setVal]=useState(false)

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            },
        };
    });



    function handlesave() {
        console.log(heading, description, date)
        
        adData(heading, description, date)
       
        setHeading(" ")
        setDescription(" ")
        setDate("")

    }

    return createPortal(

        <dialog id="modal" ref={dialog} className='w-[50%] bg-[#d3b17b] rounded-[6px] shadow-[0 0 10px rgba(0, 0, 0, 0.5)]'>


            <form method="dialog" id="modal-actions" onSubmit={handlesave}>

                <div className='p-10'>
                <button className='md:ms-[80%] ms-[100%]  text-xl font-bold'>X</button>
                    <h1 className='text-3xl text-center mb-10 font-bold'>Add Notes</h1>
                  
                    <div className='md:ms-32'>
                        <div className='mb-5'>
                            <label className='me-9 font-bold' >Heading</label>
                            <input type="text" onChange={(e) => setHeading(e.target.value)} required className="peer h-full w-[60%] rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" />
                        </div>
                        <div className='mb-5'>
                            <label className='me-4 font-bold'>Description</label>
                            <input type="text" onChange={(e) => setDescription(e.target.value)} required className="peer h-full w-[60%] rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" />
                        </div>
                        <div className='mb-5'>
                            <label className='me-16 font-bold' >Date</label>
                            <input type="date" onChange={(e) => setDate(e.target.value)}required className="peer h-full w-[60%] rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"/>
                        </div>
                        <div className='text-center'> <button className='p-3 ps-10 pe-10 bg-black text-white rounded-[50px] text-center' type='submit' >Save</button></div>
                       

                       
                    </div>
                </div>
            </form>
        </dialog>, document.getElementById("modal")


    );

}
);

export default Modal;
