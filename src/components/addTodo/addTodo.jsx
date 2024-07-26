import { useContext, useState } from "react"
import TodoContext from "../TodoContext"
import "./style.css"

function AddTodo(){
    const [inputText,setInputText] = useState('');
    const {list,setList} = useContext(TodoContext);
    return(
        <div className="adder">
            <input type="text" placeholder="add your new task" 
                   onChange={(e) => setInputText(e.target.value)} id="search_bar"/>

            <button  onClick={() => setList([...list,{
                                                        data:inputText,
                                                        id:list.length+1,
                                                        finished:false}])
                                                    } >Add</button>
        </div>
    )
}
export default AddTodo