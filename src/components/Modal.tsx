import React, { useState } from "react";
import { todo } from "../pages/TodoList";

function Modal({
    id,
  status,
  closeModal,
  onSubmit,
}: {
  status: "create" | "edit" | "delete";
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit:(todo:todo)=>void;
  id:number|undefined;
}) {

    const [input, setInput] = useState('');

    
  return (
    <div
      className="bg-black/50 text-center inset-0 h-screen w-screen absolute"
      onClick={() => closeModal(false)}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-3/4 md:w-1/4 bg-white text-center m-auto mt-60 rounded-lg p-2">
        <p className="text-xl text-black">{status}</p>
        <input placeholder="new task" onChange={(e)=>setInput(e.target.value)} value={input} />
        <button className="p-1 bg-green-600" onClick={()=>onSubmit({title:input,id:id})} >submit</button>
      </div>
    </div>
  );
}

export default Modal;
