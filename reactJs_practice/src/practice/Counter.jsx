import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  function incrementOne() {
    setCount(count + 1);
  }

  function incrementThree() {
    setCount(count + 3);
  }

  return (
    <>
      <h1>It's Your Count: {count}</h1>
      <button onClick={incrementOne}>You pressed count add 1</button>
      <br />
      <br />
      <button onClick={incrementThree}>You pressed count add 3</button>
    </>
  );
}

export default Counter;
