import React, { useState } from "react";

// function Toggle() {
//   const [isOn,setIsOn] = useState('OFF')
//   return <button onClick={()=> isOn === 'OFF' ? setIsOn('ON'): setIsOn('OFF')}>{isOn}</button>;
// }


function Toggle() {
  //set isOn to the initial value of false
  //set setIsOn to a function that returns the argument passed in as a new value for isOn
  const [isOn, setIsOn] = useState(false);
  
  //set up a function to use as a callback in the event handler
  //this uses setIsOn and passes in an anonymous function that takes in isOn 
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  
  //defines color which changes depending on the value of isOn
  const color = isOn ? "red" : "white";
  
  //returns the React component with a dynamic style attribute and an onClick event handler
  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
export default Toggle;