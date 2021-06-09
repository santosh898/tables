import { h } from "preact";
import { useEffect, useState, useCallback } from "preact/hooks";
import { route, Link } from "preact-router";
import style from "./style.css";
import NumberPad from "../../components/numberpad";

const praises = ["Well done!", "Great!", "Super!"];

const Home = () => {
  const [startTable, setStartTable] = useState(0);
  const [endTable, setEndTable] = useState(0);

  const [random1, setRandom1] = useState(0);
  const [random2, setRandom2] = useState(0);

  const [numberpadValue, setNumberpadValue] = useState("");

  const [answerStatus, setAnswerStatus] = useState("");

  useEffect(() => {
    const startTable = localStorage.getItem("startTable");
    const endTable = localStorage.getItem("endTable");
    if (!startTable || !endTable) {
      route("/manage");
      return;
    }
    setStartTable(startTable);
    setEndTable(endTable);
  }, []);

  //https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const askRandom = useCallback(() => {
    setRandom1(getRandomInt(startTable, endTable));
    setRandom2(getRandomInt(1, 10));
  }, [startTable, endTable]);

  useEffect(() => {
    if (!startTable || !endTable) return;
    askRandom();
  }, [startTable, endTable, askRandom]);

  const changeValue = (v) => {
    setNumberpadValue(v);
  };

  const onSubmit = (value) => {
    if (random1 * random2 === value) {
      setAnswerStatus(praises[getRandomInt(0, 2)]);
      askRandom();
    } else {
      setAnswerStatus("Try again!");
    }
    setNumberpadValue("");
  };

  return (
    <div class={style.container}>
      <Link href="/manage" class={style.link}>
        Change Tables Range
      </Link>
      <div class={style.card}>
        <h2 class={style.h2}>
          {random1} x {random2}
        </h2>
        <h3 class={style.h3}>{answerStatus}</h3>
      </div>
      <NumberPad
        onSubmit={onSubmit}
        value={numberpadValue}
        changeValue={changeValue}
      />
    </div>
  );
};

export default Home;
