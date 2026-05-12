import React, { useEffect, useState } from 'react'

const App = () => {
  const[count, setCount] = useState(0)
  const[count1,setCount1] = useState(0)

  //With  dependencies list [count] using UseEffect
  useEffect( () =>  {

        fetch('https://6a03077f0d92f63dd254c14e.mockapi.io/Employeedet')

   .then(response => response.json())
   .then(Employeedet => console.log(Employeedet))

  } , [count,count1])  // adding an dependencies once it changes it will render
  //console.log(count1)
  
  return (
    <div>
      <button onClick={() => setCount(count+1)}>
      Fetch Employee Details
      </button> &nbsp;

      <button onClick={()=> setCount1(count1+1)}>
        Fetch Employee Details -state
      </button>
      </div>
  )
}

export default App