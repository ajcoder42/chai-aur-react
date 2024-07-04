const root = document.querySelector("#root");

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  content: "click me to visit the link",
};

function customRender(root, reactElement) {
  const element = document.createElement(reactElement.type);
  //   element.setAttribute("href", reactElement.props.href);
  //   element.setAttribute("target", reactElement.props.target);
  let propSet = reactElement.props;
  for (let prop in propSet) {
    if (prop === "children") continue;
    element.setAttribute(prop, propSet[prop]);
  }
  element.innerHTML = reactElement.content;
  root.appendChild(element);
}

customRender(root, reactElement);
