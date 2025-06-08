function customRender(reactElement, container) {
  // this function takes a reactElement and a container to render the element into
  const domElement = document.createElement(reactElement.type); // create a new DOM element with the type of the reactElement
  domElement.innerHTML = reactElement.children; // set the innerHTML of the DOM element to the children of the reactElement
  for (const prop in reactElement.props) {
    // iterate over the props of the reactElement
    if (prop === "children") continue; // skip the children prop
    domElement.setAttribute(prop, reactElement.props[prop]); // set the attribute of the DOM element to the value of the prop
  }
  container.appendChild(domElement); // append the DOM element to the container
}

const reactElement = {
  // this is a simple react element that represents a link , including its type, props, and children
  type: "a", // the type of the react element, in this case, it is an anchor tag
  props: {
    // the props of the react element, including href and target attributes
    href: "https://google.com",
    target: "_blank",
  },
  children: "click to google",
};

const mainContainer = document.querySelector("#root"); // select the main container where the react element will be rendered
customRender(reactElement, mainContainer); // call the customRender function to render the reactElement into the mainContainer
//here we are using a custom render function to  render a simple react element that represents a link, including its type, props, and children
// here we not using any React library or framework, just a simple custom render function to render a react element into the DOM
