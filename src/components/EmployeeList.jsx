import {useEffect, useState} from "react"
import axios from "axios"


export const EmployeeList = () => {
  const [data, setData] = ([])
  // console.log(data)
  useEffect(()=>{
    axios.get("https://localhost:8080/employee").then(({data})=>{
      setData(data)
 
    })
   
  },[])

   
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */} 
      <div className="employee_card">
   
        <img className="employee_image"  />
        <span className="employee_name"></span>
        <span className="employee_title"></span>
      </div>
      
    </div>
  );
};

// {
//   "id": 1,
//   "employee_name": "Kial Bengtsen",
//   "employee_id": "3ec7a664-9948-4099-9829-a8c75deef782",
//   "title": "Team Lead",
//   "salary": 1000,
//   "image": "http://dummyimage.com/185x177.png/ff4444/ffffff",
//   "username": "kbengtsen0",
//   "password": "oJ79pX",
//   "tasks": [
//     "fixing bugs"
//   ],
//   "status": "working",
//   "team": "frontend"
// },
