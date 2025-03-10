import { MdAdd } from "react-icons/md";
import Todo from "../components/Todo";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../components/Modal";

export interface todo{
    id:number,
    title:string
}

const TodoList = () => {
  const date = new Date();

  const [todosList, setTodosList] = useState<todo[]>();
  const [selectedTodo, setSelectedTodo] = useState<todo>();
  
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
  const createTodo = async (title:string) => {
    try {
      const res = await axios.post("http://localhost:5000/api/tasks",{title:title});
      setTodosList(res.data);
    } catch (error) {
      console.log("Error : " + error);
    }
  };
  const editTodo = async (newTitle:string,id:number) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/tasks/${id}`,{title:newTitle});
      setTodosList(res.data);
    } catch (error) {
      console.log("Errorr : " + error);
    }
  };
  const deleteTodo = async (id:number) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      setTodosList(res.data);
    } catch (error) {
      console.log("Erorr : " + error);
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  const showModalHandeler = (st:'create'|'edit'|'delete',t:todo|undefined)=>{
    setStatus(st);
    setSelectedTodo(t)
    setShowModal(true);
  }


  const submitModalHandler = async(t:todo)=>{
    if (status== 'create') {
        await createTodo(t.title);
    }else if (status== 'edit'){
        await editTodo(t.title,t.id)
    }else{
        await deleteTodo(t.id)
    }
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
      <button onClick={()=>{showModalHandeler('create',undefined)}} className="flex cursor-pointer flex-row mx-10 my-2 items-center p-2 rounded-3xl bg-green-600 hover:bg-green-700 active:text-[#232c40] text-lg ">
        <MdAdd />
        Add
      </button>
      {showModal && <Modal id={selectedTodo?.id} onSubmit={submitModalHandler} status={status} closeModal={setShowModal}/>}
    </main>
  );
};

export default TodoList;
