import { MdDelete, MdEdit } from "react-icons/md"


function Todo({title}:{title:string}) {
  return (
    <div className="flex text-xl flex-row justify-between  p-2 hover:bg-blue-300/10 text-1xl">
        <p className="">{title}</p>
        <div className="flex flex-row gap-3 text-3xl my-auto">
            <MdEdit className="p-1 cursor-pointer active:text-[#232c40] hover:bg-blue-300/50 rounded-2xl " />
            <MdDelete className="p-1 cursor-pointer active:text-[#ab4343] hover:bg-blue-300/50 rounded-2xl text-red-400"/>
        </div>
        
    </div>
  )
}

export default Todo
