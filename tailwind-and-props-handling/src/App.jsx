import React from "react";
import Card from "./Card.jsx";

const App = function () {
  const link1 =
    "https://images.pexels.com/photos/7615526/pexels-photo-7615526.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
  const link2 =
    "https://images.pexels.com/photos/25478461/pexels-photo-25478461/free-photo-of-men-girl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
  return (
    <>
      <div className="w-100 h-screen  flex justify-center items-center gap-5">
        <Card linkForImage={link1} heading="Lazy Dog" />
        <Card linkForImage={link2} />
      </div>
    </>
  );
};

export default App;
