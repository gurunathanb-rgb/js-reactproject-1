import React, { useEffect, useState } from 'react'

const App = () => {
  const[count, setCount] = useState(0);

  //Witout dependencies using UseEffect
  useEffect( () =>  {

        fetch('https://6a03077f0d92f63dd254c14e.mockapi.io/Employeedet')

   .then(response => response.json())
   .then(Employeedet => console.log(Employeedet))

  })

  
  return (
    <div>
      <button onClick={() => setCount(count+1)}>
      Fetch Employee Details
      </button>
      </div>
  )
}

export default App