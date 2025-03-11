import { MdDelete, MdEdit } from "react-icons/md"
import { todo } from "../pages/TodoList"


function Todo({ todo , showModalHandeler}:{todo:todo,showModalHandeler:(status:'create'|'edit'|'delete',todo:todo)=>void}) {
  

    return (
    <div className="flex flex-row justify-between  p-2 hover:bg-blue-300/10 text-lg md:text-xl">
        <p className="overflow-hidden overflow-ellipsis">{todo.title}</p>
        <div className="flex flex-row gap-3 text-2xl md:text-3xl my-auto">
            <MdEdit onClick={()=>showModalHandeler('edit',todo)} className="p-1 cursor-pointer active:text-[#232c40] hover:bg-blue-300/50 rounded-2xl " />
            <MdDelete onClick={()=>showModalHandeler('delete',todo)} className="p-1 cursor-pointer active:text-[#ab4343] hover:bg-blue-300/50 rounded-2xl text-red-400"/>
        </div>
        
    </div>
  )
}

export default Todo
