import { useState } from "react"
import CheckBox from "./CheckBox";
import { v4 as uuidv4 } from 'uuid';
export default function Todo(){
    const [Todos,setTodos]=useState([
        {
            id:uuidv4(),
            tittle : "Lest Do It email",
            status : false
        },
        {
            id:uuidv4(),
            tittle : "My Name Is Ali",
            status : true
        },
    ]);
    const addnewtodohandler =(event)=>{
        if(event.key === 'Enter' || event.key===''){
            setTodos([
                ...Todos,
                {
                    id:uuidv4(),
                    tittle:event.target.value,
                    status:false
                }
            ])
        }
      }

      const DeleteItemIcon =(todo)=>{
        // console.log("Delete icon",todo)
        // setTodos([]);
        let newlist=Todos.filter((todoitem)=>{
            return todo.id != todoitem.id;
            
      })
      setTodos(newlist);
      }
    
    


return(
  <>
        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
                </div>
                <div className="relative">
                    <input type="text" placeholder="What needs to be done today?" onKeyDown={addnewtodohandler}
                    className="w-full px-2 py-3 border rounded outline-none border-grey-600" />
                      {
              Todos.map((todo,index)=><CheckBox key={index} TodoData={todo} DeleteIcon={DeleteItemIcon}/>)
            }
                </div>
            </div>
        </div>
</>
)
}