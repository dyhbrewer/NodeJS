var React = require("react");
var ReactDOM = require("react-dom");
var HelloWorld = require("./components/HelloWorld.jsx");

// render application root component to "container" div from index.html
function render() {
    ReactDOM.render(<HelloWorld />, document.getElementById("container"));
}
render();