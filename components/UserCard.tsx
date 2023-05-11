"use client";

import React from "react";
import { Iuser } from "../src/app/cart/page";

interface Props {
  user: Iuser;
  key: number;
  handleHired: number;
}


// ====>>>>> Inference in typescript
// when we use let and delcare a variable 
// it will have the type of the value we assign to it
// like a number or string or object
// let a = 10;
// but i case of the const it will have the type of the value
// we assign to it
// const b = 10;


// ====>>>>> Explicit types in typescript
// we can declare the type of the variable
// let a: number = 10;
// let b: string = "hello";
// let c: boolean = true;
// let d: any = 10;
// let e: number[] = [1, 2, 3];
// let f: any[] = [1, true, "hello"];


// ====>>>>> Tuples in typescript
// let a: [string, number, boolean] = ["hello", 10, true];
// a[0] = "Pankaj";
// a[1] = 21;
// a[2] = true;
// example 2
// let arr :string[] | number[] = ["hello", "world"];
// let arr2 :string[] | number[] = [1, 2, 3];
// u can use the union operator to define the type of the array 

// ===>>>> literal types in typescript
// let data : number | "Pankaj";
// data = 10; // valid
// data = "Pankaj"; // valid
// data = "hello"; // invalid


// ===>>>> Type aliases in typescript   
// type StringOrNumber = string | number;
// let data : StringOrNumber = 10; // valid
// data = "Pankaj"; // valid
// data = true; // invalid bcos it is not in the union type

let data : any;
data = 10; // valid
data = "Pankaj"; // valid
data = true; // valid

let item : string;
item = data; // invalid bcos data is of type unknown







function UserCard({ user, key,handleHired}: Props) {
  return (
    <>
      <h1>
        ID : {user.id} Name : {user.name}
      </h1>
    </>
  );
}

export default UserCard;
