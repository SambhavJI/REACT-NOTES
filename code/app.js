import React from "react";
import ReactDOM from "react-dom/client";

const JsxHeading = () => {
  return <h1>This shit is tough</h1>;
};
const header = <h2>I AM SAMBHAV YVL</h2>;

const Heading = () => (
  <div>
    {header}
    <JsxHeading />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
