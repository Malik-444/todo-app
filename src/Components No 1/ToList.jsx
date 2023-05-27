// import React, { useState } from "react";

const ToList = (props) => {
  return (
    <>
      <div className="toDo-Style">
        <button
          className="cancel"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          -
        </button>
        <li>{props.items}</li>
      </div>
    </>
  );
};
export default ToList;
