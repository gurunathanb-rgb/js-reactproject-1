const App = () => {

  const tn_cities = [
    'Thanjavur',
    'Trichy',
    'Madurai',
    'Coimbatore',
    'Chennai',
    'Salem',
    'Kanchipuram',
    'Tiruvallur',
    'Chennai',
    'Ramanathapuram'
  ];

  return (
    <>
      <h1>Tamil Nadu Cities</h1>
      <ul>
        {
          tn_cities
            .map((tn_cities, index) => {
              return <li key={index}>{tn_cities}</li>
            }
            )
        }
      </ul>
    </>
  )
}

export default App;