import React, { Fragment, useState } from "react";
import classes from "./Container.module.css";
const DUMMY_DATA = [
  [{name: "A", display: false}, {name: "M", display: false}, {name: "N", display: false}],
  [{name: "P", display: false}, {name: "A", display: false}, {name: "O", display: false}],
  [{name: "K", display: false}, {name: "F", display: false}, {name: "A", display: false}],
];
const Container = () => {
  const [items, setItems] = useState(DUMMY_DATA);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverCount, setGameOverCount] = useState(0);
  const clickHandler = (index) => {
    setItems( (prevItems) =>  { prevItems[index.split('-')[0]][index.split('-')[1]].display = true; return [...prevItems] });
    let count = 0;
    if(index.split('-')[0] === index.split('-')[1]) {
      count = gameOverCount + 1;
      setGameOverCount(count);
    }
    if(count === items.length) {
      setGameOver(true);
    }
  };

  const grid = items.map((col, i) => {
    return (
      <div key={`container${i}`} className={classes["container__row"]}>
        {col.map((row, j) => (
          <button
            key={j}
            className={`${classes["container__row_Item"]} ${
              row.display === true ? classes["clickChange"] : ""
            }`}
            onClick={clickHandler.bind(this,`${i}-${j}`)}
          >
            {row.display ? row.name : '@'}
          </button>
        ))}
      </div>
    );
  });

  return (
    <Fragment>
      <div className={classes["container"]}>
        {gameOver && <p>Success Game is completed!</p>}
        {grid}
      </div>
    </Fragment>
  );
};
export default Container;
