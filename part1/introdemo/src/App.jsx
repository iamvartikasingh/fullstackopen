import React from 'react';

const App = () => {
  const now = new Date()
  const a = 120;
  const b = 20;

  console.log(now, a+b);

  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello world, it is', now.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a+b
        )
    )
  
  // return (
  //   <div>
  //     <p>Hello world, it is {now.toString()}</p>
  //     <p>
  //       {a} plus {b} is {a+b}
  //     </p>
  //   </div>
  // )
}

export default App