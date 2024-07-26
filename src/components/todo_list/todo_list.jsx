import { useContext } from "react"
import Todo from "../todo/todo"
import TodoContext from "../TodoContext"
function Todo_list(){
    const {list,setList} = useContext(TodoContext)
    return(
        <div>
            {(list.length>0) && list.map((item) => <Todo 
                                                        key={item.id}
                                                        data={item.data}
                                                        isFinished={item.finished}
                                                        id={item.id}
                                                        onDelete = {
                                                            () => {
                                                                    const newList = list.filter((x)=> x.id != item.id);
                                                                    setList(newList);
                                                            }
                                                        }
                                                        onEdit = {
                                                            (data) =>{
                                                                list.map((x) =>{
                                                                    if(x.id == item.id)
                                                                        x.data = data;

                                                                })

                                                            }
                                                        }

                                                    />)}
            <br />
        </div>
    )
}
export default Todo_list