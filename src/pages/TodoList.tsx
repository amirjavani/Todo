import { MdAdd } from "react-icons/md";
import Todo from "../components/Todo";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../components/Modal";

interface todo{
    id:number,
    title:string
}

const TodoList = () => {
  const date = new Date();

  const [todosList, setTodosList] = useState<todo[]>();
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState<'create'|'edit'|'delete'>('create');

  const fetchTodoList = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTodosList(res.data);
    } catch (error) {
      console.log("Errorr : " + error);
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  const showModalHandeler = (st:'create'|'edit'|'delete',id:number)=>{
    setStatus(st);
    setShowModal(true);
  }

  console.log(status)

  return (
    <main className="border rounded ">
      <div className="flex flex-row  justify-between p-5 ">
        <h2 className="font-bold text-4xl ">Today </h2>
        <span className="text-[20px] my-auto">
          {date.toISOString().split("T")[0]}
        </span>
      </div>
      <div className="flex flex-col mx-10 p-2 my-2 divide-y divide-gray-400">
        {todosList?.map((item) => (
          <Todo title={item.title} id={item.id} showModalHandeler={showModalHandeler} />
        ))}
      </div>
      <button className="flex cursor-pointer flex-row mx-10 my-2 items-center p-2 rounded-3xl bg-green-600 hover:bg-green-700 active:text-[#232c40] text-lg ">
        <MdAdd />
        Add
      </button>
      {showModal && <Modal status={status} closeModal={setShowModal}/>}
    </main>
  );
};

export default TodoList;
