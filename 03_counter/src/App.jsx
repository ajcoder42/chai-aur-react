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
    // setCounter(() => {
    //   return counter === 20 ? 20 : counter + 1;
    // });
    /*********** Interview Question *************** */
    // Ques-> how much the value of counter increased on one click of the button if the below statements are written as it is in this increment function?
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // Ans-> The counter would be increased by 1 only, because, the fiber algorithm which is the backbone of reactjs do all the same kind of tasks in a single batch so all these statements have the same impact so, the fiber will execute all the 3 statements in one batch and then, update the counter by 1 only.
    // Ques-> if I want to achieve the functinality by writting the same statements as below to increase increase the counter by 3 on 1 click then, how can I acheive it ?
    // Ans-> we have to take the previous state of the counter and then update that previous state so, fiber will not execute all the statement in one go.
    // // method-1 of writting the statement
    // setCounter((prevCounter) => prevCounter + 1);
    // // method-2 of writting the statement
    // setCounter((prevCounter) => {
    //   return prevCounter + 1;
    // });
    // setCounter((prevCounter) => {
    //   return prevCounter + 1;
    // });
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
