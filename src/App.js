import './App.css';
import React from 'react';
import { useReducer } from 'react';

const reducer = (state, action) => {
    switch(action.type) {
      case 'Increment':
        return { count: state.count + 1, showText: state.showText}
      case 'toggleShowtext':
        return {count: state.count, showText: !state.showText}
      default:
        return state;
    }
}


function App() {
  const [state, dispatch] = useReducer(reducer, {count:0, showText: true})

  return (
    <>
    <h1>{state.count}</h1>
    
    <button onClick={()=> {
      dispatch({type:'Increment'})
      dispatch({type:'toggleShowText'})
    }}>Click here</button>

    { state.showText && <p>This is a text</p>}
    </>

  );
}

export default App;
