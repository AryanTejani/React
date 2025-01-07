import React, { useEffect, useState } from 'react';

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1); // Increment count on button click
  };

  useEffect(() => {
    console.log(`Count updated: ${count}`); // This will log whenever `count` changes
  }, [count]); // Dependency array ensures this effect runs when `count` changes

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default CounterEffect;
