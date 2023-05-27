import { useState } from "react";
import "./App.css";
import "./Components No 1/Tolist.css";
import ToList from "./Components No 1/ToList";
function Apptodo() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const textEvent = (e) => {
    setText(e.target.value);
  };
  const clickEvent = (e) => {
    console.log("ok");
    setList((oldItems) => {
      return [...oldItems, text];
    });
    setText("");
  };
  const delEvent = (id) => {
    console.log("del");
    setList((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <div className="main-page">
        <div className="center">
          <h1>TO Do LIST</h1>
          <input
            type="text"
            placeholder="Add an item"
            value={text}
            onChange={textEvent}
          />
          <button className="btn1" onClick={clickEvent}>
            +
          </button>

          <ol>
            {list.map((itemval, index) => {
              return (
                <ToList
                  items={itemval}
                  key={index}
                  id={index}
                  onSelect={delEvent}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Apptodo;
