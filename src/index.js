import _ from "lodash";
import "./style.css";
// import Print from "./print";

// import toml from "./data.toml";
// import yaml from "./data.yaml";
// import json from "./data.json5";

// console.log(toml.title); // output `TOML Example`
// console.log(toml.owner.name); // output `Tom Preston-Werner`

// console.log(yaml.title); // output `YAML Example`
// console.log(yaml.owner.name); // output `Tom Preston-Werner`

// console.log(json.title); // output `JSON5 Example`
// console.log(json.owner.name); // output `Tom Preston-Werner`

// async function getComponent() {
//   const { default: _ } = await import("lodash");
//   const element = document.createElement("div");
//   element.innerHTML = _.join(["Hello", "webpack"], " ");
//   element.classList.add("hello");
//   return element;
// }

// getComponent().then((component) => {
//   document.body.appendChild(component);
// });

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  // element.onclick = Print.bind(null, "Hello webpack!");
  return element;
}

document.body.appendChild(component());
