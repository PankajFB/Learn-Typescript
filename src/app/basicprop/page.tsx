import React from "react";
import UserList from "@/components/UserList";

function page() {


  const userList = [
    { name: "John", age: 20 },
    { name: "Jane", age: 21 },
    { name: "Mary", age: 22 },
  ];

  return <div className="page" >
    <h1>Basic Props</h1>
    <h2>Users</h2>
    <ul>
       <UserList data={userList} ></UserList>
    </ul>
  </div>;
}

export default page;
