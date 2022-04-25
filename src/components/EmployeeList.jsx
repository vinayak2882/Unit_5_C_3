import {useEffect, useState} from "react"
import axios from "axios"


export const EmployeeList = () => {
  const [data,setEmployee] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/employee").then(({data})=>{
      setEmployee(data)
    })
 },[])
   console.log(employee)
  return (
    <div className="list_container">
       
     {data.map((el,i)=>{
       return (
         <Link to={`/employees/${el.id}`}>
      <div className="employee_card" key={i}>
        <img className="employee_image" src={el.image}/>
        <span className="employee_name">{el.employee_name}</span>
        <span className="employee_title">{el.title}</span>
      </div></Link>
       )
      })}
    </div>
  );
};


