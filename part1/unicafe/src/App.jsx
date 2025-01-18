import{ useState } from 'react';
const Button = (props) => {
  
  return(
  <button onClick={props.onClick} >
  {props.text}
</button>

)}
const Statistics = ({ props }) => {
  const { good, neutral, bad } = props;
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : ((1*good)+(bad*(-1)))/total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {average.toFixed(2)}</p>
      <p>Positive: {positivePercentage.toFixed(2)}%</p>
    </div>
  );
};
const App = () => {

  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const increaseGoodByOne = () => setGood(good+1)
  const increaseBadByOne = () => setBad(bad+1)
  const increaseNeutralByOne = () => setNeutral(neutral+1)
console.log()
  return(
    <div>
      <h1>Give feedback</h1>
      <Button onClick={increaseGoodByOne} text={"Good"} />
      <Button onClick={increaseBadByOne}  text= {"Bad"}/>

      <Button onClick={increaseNeutralByOne}   text= {"Neutral"}/>

      {/* <button onClick={(increaseGoodByOne)}>
        Good
      </button>
      <button onClick={increaseNeutralByOne}>
        Neutral
      </button>
      <button onClick={increaseBadByOne}>
        bad
      </button> */}
      <h1>Statistics</h1>

      <Statistics props={{ good, neutral, bad }} /> 
   

     </div>
  )
}

export default App;