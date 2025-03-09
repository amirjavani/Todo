import { MdAdd } from "react-icons/md";
import Todo from "../components/Todo";

const TodoList = () => {
  const date = new Date();
  

  return (
    <main className="border rounded ">
      <div className="flex flex-row  justify-between p-5 ">
        <h2 className="font-bold text-4xl ">Today </h2>
        <span className="text-[20px] my-auto">{date.toISOString().split("T")[0]}</span>
      </div>
      <div className="flex flex-col mx-10 p-2 my-2 divide-y divide-gray-400">
        <Todo title="task1" />
        <Todo title="task1" />
      </div>
      <button className="flex cursor-pointer flex-row mx-10 my-2 items-center p-2 rounded-3xl bg-green-600 hover:bg-green-700 active:text-[#232c40] text-lg "><MdAdd/>Add</button>
    </main>
  );
};

export default TodoList;
