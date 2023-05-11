import React from 'react'



type propsType = {
    data: { name: string, age: number }[]
}

function UserList(data: propsType) {
  return (
    <div>
       {data.data.map((user, index) => (
        <li key={index}>{user.name} and {user.age}</li>
       ) )}
    </div>
  )
}

export default UserList
