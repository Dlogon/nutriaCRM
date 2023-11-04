import '../App.css';
import React from "react";
import Button from './Button';
function Counter() {

  //const [data, setData] = React.useState(null);
  const [counter, setCounter] = React.useState(0);
  const handleCounterClick = () =>{
    setCounter(count => count+1)
  }

  const handleReset = () =>{
    setCounter(0)
  }

//   React.useEffect(()=> {
//     fetch("/api")
//     .then((res) => res.json())
//     .then((data) => setData(data.message))
//     .catch(err => setData(err.message) )
//   })
  return (
    <div className="App">
      <header className="App-header p-6">
        <p className='bg-white-100'>{counter}</p>
        <Button text={"click"} clickHandler={handleCounterClick} />
        <Button text={"RESET"} clickHandler={handleReset} />
      </header>
    </div>
  );
}

export default Counter;
