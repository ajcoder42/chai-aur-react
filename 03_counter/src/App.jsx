import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  const onIncrement = () => {
    /***Method-1 to increase the counter **** */
    // setCounter(counter + 1);

    /***Method-2 to increase the counter **** */
    // setCounter(() => {
    //   return counter + 1;
    // });

    /************Assignment functionality********** */
    /*counter must not go above 20 */
    setCounter(() => {
      return counter === 20 ? 20 : counter + 1;
    });
  };

  const onDecrement = () => {
    /***Method-1 to deccrease the counter **** */
    // setCounter(counter - 1);

    /***Method-2 to deccrease the counter **** */
    // setCounter(() => {
    //   return counter - 1;
    // });

    /************Assignment functionality********** */
    /*counter must not go beyond 0 */
    setCounter(() => {
      return counter === 0 ? 0 : counter - 1;
    });
  };

  return (
    <>
      <h2>Chai aur code Counter</h2>
      <h2>Counter : {counter}</h2>
      <button onClick={onIncrement}>increase</button>
      <button onClick={onDecrement}>decrease</button>
    </>
  );
}

export default App;
