import { MdAdd } from "react-icons/md";
import Todo from "../components/Todo";
import { useEffect, useState } from "react";

import Modal from "../components/Modal";
import { createTodo, deleteTodo, editTodo, fetchTodoList } from "../utility/TodoAPIs";

export interface todo {
  id: number;
  title: string;
}

const TodoList = () => {
  const date = new Date();

  const [todosList, setTodosList] = useState<todo[]>();
  const [selectedTodo, setSelectedTodo] = useState<todo>();

  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState<"create" | "edit" | "delete">("create");

  const fetchTodoListHandler = async () => {
    try {
      const res = await fetchTodoList();
      setTodosList(res);
    } catch (error) {
      console.log("Errorr : " + error);
    }
  };
  const createTodoHandler = async (title: string) => {
    try {
      await createTodo(title);
      closeModalHandler();
    } catch (error) {
      console.log("Error : " + error);
    }
  };
  const editTodoHandler = async (newTitle: string, id: number) => {
    try {
      await editTodo(newTitle,id)
      closeModalHandler();
    } catch (error) {
      console.log("Errorr : " + error);
    }
  };
  const deleteTodoHandler = async (id: number) => {
    try {
      await deleteTodo(id);
      closeModalHandler();
    } catch (error) {
      console.log("Erorr : " + error);
    }
  };

  useEffect(() => {
    fetchTodoListHandler();
  }, []);

  const showModalHandeler = (
    st: "create" | "edit" | "delete",
    t: todo | undefined
  ) => {
    setStatus(st);
    setSelectedTodo(t);
    setShowModal(true);
  };

  const submitModalHandler = async (t: todo) => {
    if (status == "create") {
      await createTodoHandler(t.title);
    } else if (status == "edit") {
      await editTodoHandler(t.title, t.id);
    } else {
      await deleteTodoHandler(t.id);
    }
  };

  const closeModalHandler = () => {
    setShowModal(false);
    fetchTodoListHandler();
  };

  return (
    <main className="border rounded ">
      <div className="flex flex-row  justify-between p-5 ">
        <h2 className="font-bold text-2xl md:text-4xl ">Today</h2>
        <span className="text-sm md:text-[20px] my-auto">
          {date.toISOString().split("T")[0]}
        </span>
      </div>
      <div className="flex flex-col mx-5 md:mx-10 p-2 my-2 divide-y  divide-gray-400 overflow-auto">
        {todosList?.map((item) => (
          <Todo key={item.id} todo={item} showModalHandeler={showModalHandeler} />
        ))}
      </div>
      <button
        onClick={() => {
          showModalHandeler("create", undefined);
        }}
        className="flex cursor-pointer flex-row mx-10 my-2 items-center p-2 rounded-3xl bg-green-600 hover:bg-green-700 active:text-[#232c40] text-sm md:text-lg ">
        <MdAdd />
        Add
      </button>
      {showModal && (
        <Modal
          todo={selectedTodo}
          onSubmit={submitModalHandler}
          status={status}
          closeModal={closeModalHandler}
        />
      )}
    </main>
  );
};

export default TodoList;
