import React, { useState } from "react";
import { todo } from "../pages/TodoList";

function Modal({
  todo = { title: "", id: 0 },
  status,
  closeModal,
  onSubmit,
}: {
  status: "create" | "edit" | "delete";
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (todo: todo) => void;
  todo: todo | undefined;
}) {
  const [input, setInput] = useState(todo.title);

  return (
    <div
      className="bg-black/50 text-center inset-0 absolute "
      onClick={() => closeModal(false)}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-3/4 md:w-1/4 bg-white text-center m-auto mt-60 rounded-lg p-2">
        <p className="text-xl text-black">{status}</p>
        {status != "delete" ? (
          <input
            placeholder="new task"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        ) : (
          <div>Do you want to delete <span className="font-bold">{todo.title}</span></div>
        )}

        <button
          className="p-1 bg-green-600"
          onClick={() => onSubmit({ title: input, id: todo.id })}>
          submit
        </button>
      </div>
    </div>
  );
}

export default Modal;
