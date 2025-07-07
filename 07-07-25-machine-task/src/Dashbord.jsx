import { Children, useEffect } from "react";
import React from "react";

export default function Dashbord() {
  useEffect(() => {
    console.log("Dashbord Mounted");
    return console.log("Dashbord unmounted");
  }, []);
  return (
    <React.Fragment>
      <h1>Dashbord</h1>
      <Card>
        <p>Its card items</p>
      </Card>
      <Card>
        <p>Its card items 2</p>
      </Card>
    </React.Fragment>
  );
}

function Card(props) {
  useEffect(() => {
    console.log("Card Mounted");
    return console.log("card unmounted");
  }, []);

  return (
    <React.Fragment>
      <div>{props.children}</div>
    </React.Fragment>
  );
}
