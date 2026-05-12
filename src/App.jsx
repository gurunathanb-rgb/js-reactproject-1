import React, { useEffect, useState } from 'react'

const App = () => {
  const[count, setCount] = useState(0);

  //With empty dependencies [] using UseEffect
  useEffect( () =>  {

        fetch('https://6a03077f0d92f63dd254c14e.mockapi.io/Employeedet')

   .then(response => response.json())
   .then(Employeedet => console.log(Employeedet))

  } , [])  // adding an Empty array in bottom of the UseEffect hook function

  
  return (
    <div>
      <button onClick={() => setCount(count+1)}>
      Fetch Employee Details
      </button>
      </div>
  )
}

export default App