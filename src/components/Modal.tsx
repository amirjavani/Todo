import React, { useContext, useEffect, useRef, useState } from "react";
import { todo } from "../pages/TodoList";
import { ThemeContext } from "../Contexts/ThemeProvider";

function Modal({
  todo = { title: "", id: 0 },
  status,
  closeModal,
  onSubmit,
}: {
  status: "create" | "edit" | "delete";
  closeModal:()=>void;
  onSubmit: (todo: todo) => void;
  todo: todo | undefined;
}) {
  const [input, setInput] = useState(todo.title);
  const modal = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const theme = useContext(ThemeContext);

  return (
    <div
      ref={modal}
      className="bg-black/50 text-center inset-0  absolute  "
      onClick={() => closeModal()}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-3/4 md:w-1/4 ${theme?.theme=='dark'?'bg-[#3d465a]':'bg-white'}  flex flex-col text-center m-auto mt-60 rounded-lg p-3`}>
        <p className="text-xl">{status}</p>
        {status != "delete" ? (
          <input
           className="p-1 text-[16px] mx-1 my-5 border  rounded"
            placeholder="new task"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        ) : (
          <div className="mx-1 my-5">
            Do you want to delete{" "}
            <span className="font-bold">{todo.title}</span> ?
          </div>
        )}
        <div className="flex flex-row gap-1 w-full rounded   ">
          <button className={`w-1/4 rounded ${theme?.theme=='dark'?'hover:text-gray-300/50':'hover:text-black'} cursor-pointer`} onClick={() => closeModal()}>cancel</button>
          <button
            className={`p-1 text-white w-3/4 ${status!='delete'?'bg-green-500 hover:bg-green-600':'bg-red-500 hover:bg-red-600'} bg-green-500  rounded hover:bg-green-600 cursor-pointer`}
            onClick={() => onSubmit({ title: input, id: todo.id })}>
            {status!='delete'?'submit':'yes'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
