const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "I am h1 tag")
  )
);
const parent2 = React.createElement("div", { id: "parent2" }, [
  React.createElement("h1", { id: "h1" }, "I am h1 tag of parent2"),
  React.createElement("h2", { id: "h2" }, "I am h2 tag of parent2"),
]);
// Note: To create a siblings of react object inside parent, put it in Array
/**
 * const parent = React.createElement(
 * "div",
 * { id: "parent" },
 * [ React.createElement("div", { id: "first_born" }, "This is elder sibling"), React.createElement("div", { id: "second_born"}, "This is younger sibling") ];
 * )
 * Above line is an array of two react object children inside parent object.
 */
// Note: var heading is a React object. tags, atttributes, childrens compiles props for a react element.
const heading = React.createElement("h1", {}, "Hello World from React!"); // {} to give attributes to tags like id, class etc
const root = ReactDOM.createRoot(document.getElementById("root"));
// Note: render function is converting the object into html tag and putting it up in its place.
// root.render(parent);
root.render(parent2);
