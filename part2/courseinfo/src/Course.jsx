const Course = ({ course }) => {
    // Ensure 'course' is being passed down correctly
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    );
  };
  
  const Header = ({ name }) => {
    return <h1>{name}</h1>;
  };
  
  const Part = ({ name, exercises }) => {
    return (
      <p>
        {name} {exercises}
      </p>
    );
  };
  
  const Content = ({ parts }) => {
    // Ensure 'parts' is valid and not undefined
    if (!parts) {
      return <p>No parts available</p>;
    }
  
    return (
      <div>
        {parts.map((part)=>
        < Part key={part.id} name={part.name} exercises={part.exercises} />
       
        )}
      </div>
    );
  };
  
  const Total = ({ parts }) => {
    // Ensure 'parts' is valid
    if (!parts) {
      return <p>No exercises to count</p>;
    }
  
    const totalExercises =parts.reduce((sum,part) => sum+part.exercises, 0)
  
    return <p>Number of exercises {totalExercises}</p>;
  };
  export default Course;