import { useContext, useState } from "react"
import TodoContext from "../TodoContext";
import "./todo_.css"
function Todo({data , isFinished,onDelete,onEdit}){
    const [finished,setFinished] = useState(isFinished);
    const {list,setList} = useContext(TodoContext);
    const [editText,setEditText] = useState(data);
    const [editing,setEditing] = useState(false);
    return(
        <div className="todos">
            <input type="checkbox" checked={finished} onChange={(e) => {
                                                                            setFinished(e.target.checked)
                                                                            }} />
            {editing ? <input type="text" onChange={(e)=>setEditText(e.target.value)} value={editText}/>: editText}
            <button className="te" onClick={() =>{
                setEditing(!editing);
                onEdit(editText);
            }}>{editing?"Save":"Edit"}</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}
export default Todo;