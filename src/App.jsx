import axios from 'axios'
import React, { useEffect, useState } from 'react'
//import { data } from 'react-router'

const App = () => {

  const [Employeedet, setEmployeedet] = useState([]);
  

  //With  dependencies list [count] using UseEffect
  useEffect( () =>  {

        axios.get('https://6a03077f0d92f63dd254c14e.mockapi.io/Employeedet')

   //.then(response => response.json())
   //.then(data => console.log(data.data))
   .then(response =>  setEmployeedet(response.data))

  } , [])  // adding an dependencies once it changes it will render
  //console.log(count1)
  
  return (
    <>
      <h1> Employee List</h1>
      <ul>
        {
          Employeedet
          .map (item => {
            return<li key={item.id}>{item.EmployeeName}</li>
          })
        }
      </ul>
    </>
  )
}

export default App