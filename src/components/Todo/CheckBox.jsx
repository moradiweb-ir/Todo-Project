import { useState } from "react";
import Deleticon from "./DeletIcon";
import Editeicon from "./Editeicon";  

export default function CheckBox({ TodoData, DeleteIcon , todotoggelstatus,edittoggeltittle}) {
  const [editMode,setEditMode]=useState(false);

  const editToggleHandler=(event)=>{
    if(event.key === "Enter"){
      edittoggeltittle(TodoData,event.target.value)
      setEditMode(false)
    }
  }


  return (
    <ul className="list-reset">
      <li className="relative flex items-center justify-between px-2 py-6 border-b">

      {
        editMode?
          <div className="w-full flex items-center">
      <input
      className="w-full px-4 py-2 rounded border border-gray-200"
            type="text"
            defaultValue={TodoData?.tittle}
            onChange={() => {}}
            onKeyDown={editToggleHandler}
            
          />
          <Deleticon className="ml-2" onclick={() => {setEditMode(false)}} />
      </div>  
      :(
      <div className="flex items-center">
          <div >
          <input
            type="checkbox"
            checked={TodoData?.status}
            onChange={() => {todotoggelstatus(TodoData)}}
          />
          <p
            className={`inline-block mt-1 ml-2 text-gray-600 ${
              TodoData?.status ? "line-through" : ""
            }`}
          >
            {TodoData?.tittle}
          </p>
        </div>
        <button
          type="button"
          className="absolute right-0 flex items-center space-x-1"
        >
          <Deleticon onclick={() => DeleteIcon(TodoData)} />
          <Editeicon onClick={()=>setEditMode(true)}/>
        </button>
      </div>
      )
      }
      </li>
 
    </ul>
  );
}
