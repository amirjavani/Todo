import axios from "axios";

 export const fetchTodoList = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks");
      return(res.data);
    } catch (error) {
      console.log("Error : " + error);
    }
  };
 export const createTodo = async (title: string) => {
    try {
      const res = await axios.post("http://localhost:5000/api/tasks", { title: title });
      return(res.data);
    } catch (error) {
      console.log("Error : " + error);
    }
  };
 export const editTodo = async (newTitle: string, id: number) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/tasks/${id}`, {
        title: newTitle,
      });
      return(res.data);
    } catch (error) {
      console.log("Errorr : " + error);
    }
  };
  export const deleteTodo = async (id: number) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      return(res.data);
    } catch (error) {
      console.log("Erorr : " + error);
    }
  };