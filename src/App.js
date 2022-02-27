import { useState } from "react";
import "./App.css";
import {useSelector, useDispatch} from 'react-redux';
import  {increment, decrement} from "./store/actions/countActions"

function App() {
  const getCount = useSelector(state=>state.count)
   const dispatch= useDispatch()
   console.log(getCount)
  return (
    <div className="App">
       <button onClick={()=>{dispatch(decrement())}} >
        -
      </button>
      <div>{getCount.count}</div>
      <button onClick={()=>{dispatch(increment())}}>
        +
      </button>
    </div>
  );
}

export default App;
