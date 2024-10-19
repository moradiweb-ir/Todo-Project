import { useState } from "react";

import CheckBox from "./CheckBox";

import { v4 as uuidv4 } from "uuid";

const initialTodos = [
  {
    id: uuidv4(),
    tittle: "Lest Do It email",
    status: false,
  },
  {
    id: uuidv4(),
    tittle: "My Name Is Ali",
    status: true,
  },
];


function Todo() {
  const [todos, setTodos] = useState(initialTodos);
  const [tittle,setTittle] = useState('');
  const handleAddTodo = (event) => {
    event.preventDefault();
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          tittle: tittle,
          status: false,
        },
      ]);
      setTittle('');
  };



  const DeleteItemIcon = (todo) => {
    let newlist = todos.filter((todoitem) => {
      return todo.id != todoitem.id;
    });
    setTodos(newlist);
  };


  let todotoggelstatus =(todo)=>{
    let newstatus= todos.map((todoitem)=>{
      if(todo.id===todoitem.id){
        todoitem.status = ! todoitem.status
      }
      return todoitem
    })
    setTodos(newstatus)
  }

  let edittoggeltittle =(todo,newtittleedit)=>{
    let newtittle= todos.map((todoitem)=>{
      if(todo.id===todoitem.id){
        todoitem.tittle = newtittleedit
      }
      return todoitem
    })
    setTodos(newtittle)
  }



  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white  ">
          <div className="flex items-center mb-6">
            <h1 className="ml-14 text-2xl font-bold text-purple-600 hover:text-purple-200 transition ">
              {" "}
              TO DO APP
            </h1>
          </div>
          <div className="relative">
            <form onSubmit={handleAddTodo} >
              <input
  
                placeholder="input Text Me"
                className="w-full px-2 py-3 border rounded outline-none border-grey-600"
               value={tittle}
                onChange={(e)=>setTittle(e.target.value)}
                
              />
            </form>

            {todos.map((todo, index) => (
              <CheckBox
                key={index}
                TodoData={todo}
                DeleteIcon={DeleteItemIcon}
                todotoggelstatus={todotoggelstatus}
                edittoggeltittle={edittoggeltittle}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
