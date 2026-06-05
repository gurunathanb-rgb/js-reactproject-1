const App = () => {
  const receipes = [
    'Briyani',
    'Pulao',
    'Sambar rice',
    'Curd Rice',
    'Noodles',
    'Sambar idli',
    'Doza'
  ]
  //const list =[<li>Briyani</li>]

  const list = []
  receipes.forEach(receipe  => {
    list.push(<li>{receipe}</li>)

  })

    
  return (
    <>
      <h1>Receipes List</h1>
      <ul>
        {list}
      </ul>

    </>
    
  )
}

export default App