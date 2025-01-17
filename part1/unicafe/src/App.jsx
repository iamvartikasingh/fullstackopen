import { useState } from 'react'



const App = () => {

  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
console.log()
  return(
    <div>
      <h1>Give feedback</h1>
   
    
      <button onClick={() => setGood(good + 1)}>
        Good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        Neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>

      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>Average {(good+bad+neutral)/3}</p>
      <p>positive {(good)*100/(good+bad+neutral)}%</p>

     </div>
  )
}

export default App;