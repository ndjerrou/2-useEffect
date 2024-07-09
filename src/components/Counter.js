import React, { useEffect, useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const listener = () => console.log('Counter = ', counter);

    document.body.addEventListener('click', listener);

    return () => {
      document.body.removeEventListener('click', listener);
    };
  }, [counter]);

  return (
    <div>
      <h1>Counter</h1>
      {counter}
      <div>
        <button onClick={e => setCounter(counter + 1)}>+</button>
      </div>
    </div>
  );
}

export default Counter;
