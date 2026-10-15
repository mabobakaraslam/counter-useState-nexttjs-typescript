// File: App.tsx located in app-name/src/
 
import { useState } from "react";
 
export default function App() {
  const [count, setcount] = useState(0);
  const [decCount, setdecCount] = useState(100);
  const inc = ()=>{
    setcount(count + 1);
  }
  const dec = ()=>{
    setdecCount(decCount - 1);
  }
  return (
    <div>
       
      <h1>{count}</h1> 
      <button onClick={inc}>+</button>
       
      <br />
       
      <h1>{decCount}</h1>
      <button onClick={dec}>-</button>
     
    </div>
  );
}