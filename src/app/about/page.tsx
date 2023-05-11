"use client";

import React, { useState } from "react";
import Input from "../../../components/Input";

export type Todo = {
  text: string;
};

function page() {


  

  const [todo, setTodo] = useState<string>("");
  const [todos, settodos] = useState<Todo[]>([]);

  const handleSetTodos = () => {
    if (todo) {
      settodos([...todos, { text: todo }]);
      setTodo("");
      console.log(todos.map((todo) => todo.text));
    }
  };

  let completed: string[] = [];

  const handleComplete = (data: string)   => {
    completed.push(data);
    console.log(completed);
  };

  const user = {
    name: "john",
    age: 24,
    email: "john@example.com",
  };

  console.log(user.age);

  return (
    <div className="page">
      <h1>The list of task will come here</h1>

      {todos.map((item) => (
        <>
        <h1>{item.text} : 
        <button className="btn btn-primary" onClick={()=>handleComplete(item.text)} >Task is completed</button>
        </h1>
        </>
      ))}

      <Input todo={todo} settodo={setTodo} handleSetTodos={handleSetTodos} handleComplete={handleComplete}></Input>
    </div>
  );
}

export default page;
