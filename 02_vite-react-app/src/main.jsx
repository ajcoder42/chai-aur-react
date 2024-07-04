import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

/****************************Custom App************************************ */
// function MyApp() {
//   /**only evaluated js is written in jsx element nothing evaluating expressions like if-else or anything */
//   const username = "chai aur react user";
//   return (
//     <div>
//       <h2> Custom App | Chai {username}</h2>
//     </div>
//   );
// }

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   content: "click me to visit the link",
// };

// const anotherUser = "chai aur react";

// const FacebookElement = (
//   <a href="https://www.facebook.com" target="_blank">
//     click me for facebook
//   </a>
// );

/**************** creating react element with react particular conventions ************/
// const ReactElement = React.createElement(
//   "a",
//   { href: "https://www.google.com", target: "_blank" },
//   "click me to visit the link",
//   /**we can also add other elements inside the react elements */
//   FacebookElement
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />

  /************************* Custom function ************************************** */
  // <MyApp />  // running
  // MyApp()   // will work fine but not used because of irregular convention

  /************************* Custom object definition********************************* */
  /** reactElement is a custom object but can not be rendered because although we are defining a component with some properties but react will not know what conventions are we using. these are custom conventions which only we know  but this can be rendered in the javascript code because we were defining out custom render function. similarly, react render function will also expect a specific syntax and conventions with which it is familiar. */
  // reactElement

  /*************rendering react element with react particular conventions************** */
  // <ReactElement />
  // ReactElement // will work because of the known convention of reactjs
  // anotherUser // works fine also because of the known convention of reactjs
);
