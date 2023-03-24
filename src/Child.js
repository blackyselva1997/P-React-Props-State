import React from "react";

const Child = (props) => {
  let x = props.Books;

  // console.log(x);
  return (
    <div>
      {x.map((value, index) => {
        return (
          <div key={index}>
            <h1>
              {value.name}
              <span>{value.year}</span>
            </h1>
            <button onClick={() => props.fun(value.year)}>Click Me</button>
          </div>
        );
      })}
    </div>
  );
};

export default Child;
