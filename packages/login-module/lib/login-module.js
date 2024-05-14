import React, { useState } from 'react';

function loginmodule() {
  // Define state variable 'count' and its setter function 'setCount'
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      {/* Button to increment count */}
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      {/* Button to decrement count */}
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button> 
    
    </div>
  );
}

export default loginmodule;
