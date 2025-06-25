import React from "react";

const ChildComponent = React.memo((props) => {
  console.log("child component re-renders");
  return (
    <div>
      <div>
        <button onClick={props.onClick}>{props.btnName}</button>
      </div>
    </div>
  );
});
export default ChildComponent;

//React.memo -> wrap -> child component -> component gets re-rendered only if the props wiil be changes otherwise nothing renders..!!

//If you are sending a finction as a prop  , then the React.memo is not able to save you from re-rendering..
