

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
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }

  return(
    <div>
      <Header name={course1} />
      <Content
  part1={part1.name} exercises1={part1.exercises}
  part2={part2.name} exercises2={part2.exercises}
  part3={part3.name} exercises3={part3.exercises}
/>
<Total  number1={part1.exercises} number2={part2.exercises} number3={part3.exercises} />
    </div>
  )
}

export default App