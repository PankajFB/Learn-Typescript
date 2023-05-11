
import { Todo } from "@/app/about/page";
import React from "react";

interface Props {
  todo: string;
  settodo: React.Dispatch<React.SetStateAction<string>>;
  handleSetTodos:React.Dispatch<React.SetStateAction<string>>;
  handleComplete: (data: string) => void;
}

function Input({ todo, settodo,handleSetTodos , handleComplete}: Props) {
  return (
    <div>
      <h1>This button is another component</h1>
      <input type="text" value={todo} onChange={(e)=>{ settodo(e.target.value)}} />
      <button type="submit" className="btn btn-primary " onClick={()=>handleSetTodos(todo)}>Clikc me to submit</button>
    </div>
  );
} 

export default Input;
