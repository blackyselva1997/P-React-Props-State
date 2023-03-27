import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Parent from "./Parent";
// import Mobile from "./props-state/Mobiles";
import MobileParent from "./props-state/props-state-classComponents/mobileParent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Parent /> */}
    {/* <Mobile /> */}
    <MobileParent />
  </React.StrictMode>
);
