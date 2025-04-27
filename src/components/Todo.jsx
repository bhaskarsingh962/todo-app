import { useEffect, useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageTodoData ,
  setLocalStorageTodoData} 
  from "./TodoLocalStorage";


export const Todo = () => {

  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    const {id, content ,checked } = inputValue;
  //to check if the data is already exiting or not 
    if (!content) return;
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content 
    );
    
    if(ifTodoContentMatched) return ;

    setTask((prevTask) => [...prevTask,{id:id , content:content}]);

    //setTask((prevTask) => [...prevTask, inputValue]);
  };


  //todo add in local storage

  setLocalStorageTodoData(task);

  const handleDelete = (value) => {
    console.log(task);
    const upadatedTask = task.filter((curTask) => curTask.content != value);
    setTask(upadatedTask);
  };
  const handleDeleteAll = () => {
    setTask([]);
  };

 //need tp defined here onHandleCheckedTodo

 const handleCheckedTodo = (content) => {
   const updatedTask = task.map((curTask) => {
     if(curTask.content === content){
      return {...curTask,checked: !curTask.checked}; 
     }else{
      return curTask;
     }
   });
   setTask(updatedTask); 
 }


  return (
    <section className="todo-container">
      <header>
        <h2>Todo List</h2>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDelete={handleDelete}
                onHandleCheckedTodo = {handleCheckedTodo}
              /> 
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleDeleteAll}>
          Clear All
        </button>
      </section>
    </section>
  );
};
