import { IoMdCheckmark } from "react-icons/io";
import { MdCheck, MdOutlineDeleteForever } from "react-icons/md";


export  const TodoList = ({
    data,
    checked,
    onHandleCheckedTodo,
    onHandleDelete
     }) => {
    return (
     <li  className="todo-item">
        <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
        <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
          <MdCheck />
        </button>
        <button
            onClick={() => onHandleDelete(data)}   
            className="delete-btn">
            <MdOutlineDeleteForever />
        </button>
     </li>
    )
}
