

const Header = (course) => {
return (
<h1>{course.name}</h1>
)
}

const Part =(exercises)=> {
 
  return (

       <div>
      <p>
    {exercises.part} {exercises.number}

     </p>
    </div>
   
  )
}
const Content = (prop) => {
  return (
    <div>
     <Part part={prop.part1} number={prop.exercises1} />
     <Part part={prop.part2} number={prop.exercises2} />
     <Part part={prop.part3} number={prop.exercises3} />

     
    </div>
   
  )
  }
  const Total = (props) => {
    
    return (
      <p>
        Number of exercises  {props.number1 + props.number2+props.number3}
    </p>
    )
    }
      
  


const App = () => {
  const course1 = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course1} />
      <Content
  part1={part1} exercises1={exercises1}
  part2={part2} exercises2={exercises2}
  part3={part3} exercises3={exercises3}
/>
<Total  number1={exercises1} number2={exercises2} number3={exercises3} />
    </div>
  )
}

export default App