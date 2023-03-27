import React, { useState } from "react";

const MobilesChild = (props) => {
  const [state, changeState] = useState(props.Mobiless);
  var exMobile = props.Mobiless;

  let Acc = (b) => {
    let a = [...props.Mobiless].sort((a, b) => {
      let lc = a.name.toLowerCase(),
        uc = b.name.toLowerCase();
      if (lc < uc) return -1;
      if (lc > uc) return 1;
      return 0;
    });
    b === "pass" ? changeState(a) : changeState(a.reverse());
  };

  let Price = (P) => {
    let a = [...props.Mobiless].sort((a, b) => a.price - b.price);
    P === "pass" ? changeState(a) : changeState(a.reverse());
  };

  let Filter = (F) => {
    let a = [...props.Mobiless].filter((value) => value.isPurchased);
    F === "pass" ? changeState(a) : changeState(exMobile);
  };
  return (
    <div>
      <button onClick={() => Acc("pass")}>Accending</button>
      <button onClick={() => Acc()}>Decending</button>
      <button onClick={() => Price("pass")}>Low to High</button>
      <button onClick={() => Price()}>High to Low</button>
      <button onClick={() => Filter("pass")}>Filter</button>
      <button onClick={() => Filter()}>Filter None</button>

      {state.map((value, index) => {
        return (
          <div key={index}>
            <h1>
              {value.name} : {value.price}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default MobilesChild;
