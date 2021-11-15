import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={name} />
    </section>
  );
}



export default Gallery;

// -----------------------------Example code of how to update STATE properly in React-----------------------------
// -----------------------------Improper code-----------------------------
// function SomeComponent() {
// let seconds = 0

// function startStopwatch() {
//   setInterval(() => {
//     console.log(seconds)
//     seconds += 1
//   }, 1000)
// }

// return (
//   <div>
//     {seconds}
//     <button onClick={startStopwatch} >Start</button>
//   </div>
// )
// }

// -----------------------------Proper code-----------------------------
// import React, { useState } from "react"

// function SomeComponent() {
//   const [seconds, setSeconds] = useState(0)

//   function startStopwatch() {
//     let updatedSeconds = seconds;
//     setInterval(() => {
//       updatedSeconds += 1;
//       console.log(updatedSeconds);
//       setSeconds(updatedSeconds);
//     }, 1000);
//   }

// return (
//   <div>
//     {seconds}
//     <button onClick={startStopwatch} >Start</button>
//   </div>
// )
// }

// -----------------------------Rules for using hooks-----------------------------

// _______1________
// The first rule is "Only call Hooks from React functions." This should be easy to remember, 
// because you often use Hooks to affect the state of a component in some way and trigger the component to render.

// _______2________
// The second rule is "Only call Hooks at the top level". This means that you cannot use them inside for loops, 
// nested functions within your React component, or conditionals. For organizational purposes and to ensure that 
// you're following these rules, you may want to use Hooks towards the top of your React component.