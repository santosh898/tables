import { h } from "preact";
import style from "./style.css";

const NumberPad = ({ onSubmit, value, changeValue }) => {
  const enterNumber = (number) => {
    changeValue((c) => c + number);
  };

  const checkAndSubmit = () => {
    const enteredValue = parseInt(value, 10);
    onSubmit(enteredValue);
  };

  const deleteChar = () => {
    changeValue((v) => v.slice(0, -1));
  };

  return (
    <div class={style.numberpad}>
      <h2 class={style.currentValue}>{value}</h2>
      <div class={style.rows}>
        <div class={style.row}>
          <button onClick={() => enterNumber("1")} class={style.number}>
            1
          </button>
          <button onClick={() => enterNumber("2")} class={style.number}>
            2
          </button>
          <button onClick={() => enterNumber("3")} class={style.number}>
            3
          </button>
        </div>
        <div class={style.row}>
          <button onClick={() => enterNumber("4")} class={style.number}>
            4
          </button>
          <button onClick={() => enterNumber("5")} class={style.number}>
            5
          </button>
          <button onClick={() => enterNumber("6")} class={style.number}>
            6
          </button>
        </div>{" "}
        <div class={style.row}>
          <button onClick={() => enterNumber("7")} class={style.number}>
            7
          </button>
          <button onClick={() => enterNumber("8")} class={style.number}>
            8
          </button>
          <button onClick={() => enterNumber("9")} class={style.number}>
            9
          </button>
        </div>
        <div class={style.row}>
          <button
            class={style.number}
            onClick={deleteChar}
            disabled={value.length === 0}
          >
            ←
          </button>
          <button onClick={() => enterNumber("0")} class={style.number}>
            0
          </button>
          <button
            onClick={checkAndSubmit}
            disabled={value.length === 0}
            class={style.number}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumberPad;
