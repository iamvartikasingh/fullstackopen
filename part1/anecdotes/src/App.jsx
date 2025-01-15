

const Header = (course1) => {
return (
<h1>{course1.name}</h1>
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

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return(
    <div>
      <Header name={course} />
      <Content
  part1={parts[0].name} exercises1={parts[0].exercises}
  part2={parts[1].name} exercises2={parts[1].exercises}
  part3={parts[2].name} exercises3={parts[2].exercises}
/>
<Total  number1={parts[0].exercises} number2={parts[1].exercises} number3={parts[2].exercises} />
    </div>
  )

}

export default App