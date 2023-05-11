"use client";

import React, { useState } from "react";
import UserCard from "../../../components/UserCard";

export interface Iuser {
  name: string;
  id: number;
}

function page() {
  const [user, setuser] = useState<Iuser[]>([
    { name: "john", id: 1 },
    { name: "jane", id: 2 },
  ]);

  const obj = {
    name: "John",
    
  };

  return (
    <>
      <div className="page">
        <h1>The User list is here</h1>
        <h1>dont know why itss tooo slow for me</h1>
        <h1>dont know why itss tooo slow for me</h1>

        {user.map((user) => (
          <UserCard user={user} key={user.id}></UserCard>
        ))}
      </div>
    </>
  );
}

export default page;
