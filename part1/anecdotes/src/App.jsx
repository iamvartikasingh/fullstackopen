const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  const items = [];

  // Using a for loop to iterate over the parts array
  for (let i = 0; i < props.parts.length; i++) {
    items.push(
      <Part
        key={i}
        name={props.parts[i].name}
        exercises={props.parts[i].exercises}
      />
    );
  }

  return <div>{items}</div>;
};

const Total = (props) => {
  let totalExercises = 0;

  // Using a for loop to calculate the total
  for (let i = 0; i < props.parts.length; i++) {
    totalExercises += props.parts[i].exercises;
  }

  return <p>Number of exercises {totalExercises}</p>;
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header name={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;