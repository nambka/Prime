import React from 'react';

var App1 = function (){
  return (
      <div>
        <h1>Hello World!</h1>
      </div>
  )
}

var App2 = function (){
  const greeting = 'Hello Function Component!';
  return <h1>{greeting}</h1>;
}

var All3 = function (){
  return (
      <div>
          <App1 />
          <App2 />
      </div>
      );
}

export default All3;




// References:
// Sieve of Eratosthenes: https://www.geeksforgeeks.org/sieve-of-eratosthenes/