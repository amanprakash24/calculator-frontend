import React, { useEffect, useState } from "react";
import axios from "axios";
import "./calculator.css";
import getresult from "./Apis/getresult";
const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");
  const [history, sethistory] = useState([]);
  const inputkey = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "/",
    "*",
    "/",
    "-",
    "+",
  ];
  const handleChange = (e) => {
    setExpression((prev) => prev + e.target.name);
  };
  const inputChangeHandler = (e) => {
    if (inputkey.includes(e.nativeEvent.data)) {
      setExpression(e.target.value);
    }
  };
  const handleChangeoperator = (e) => {
    if (operator !== "") {
      return;
    }
    setOperator(e.target.name);
    setExpression((prev) => prev + e.target.name);
  };
  const handleClearAll = () => {
    setExpression("");
    setOperator("");
    setResult("");
  };
  const handleClearOneChar = () => {
    if (expression[expression.length - 1] == operator) {
      setOperator("");
    }
    let newExpression = expression.slice(0, expression.length - 1);
    setExpression(newExpression);
  };
  const handleResult = async (e) => {
    const [num1, num2] = expression.split(operator);

    let res = await getresult(num1, num2, operator);
    setResult(res.data);

    await axios.get("https://calculatorapi.onrender.com/history").then(
      (res) => {
        sethistory(res.data);
        console.log(res.data);
      },
      () => {
        console.log(history);
      }
    );
  };

  return (
    <div className="calc-body">
      <div className="calc-screen">
        <div id="calc-operation">
          <input
            type="text"
            value={expression}
            onChange={inputChangeHandler}
            placeholder="input digits"
          />
        </div>
        <div id="calc-typed">{result}</div>
      </div>

      <div className="calc-button-row">
        <div className="calc-button-row-first">
          <button onClick={handleClearAll} className="clearAll">
            Clear
          </button>
          <button className="ClearOne" onClick={handleClearOneChar}>
            C
          </button>
          <button name="/" onClick={handleChangeoperator} className="opt">
            &#247;
          </button>
        </div>

        <button name="7" onClick={handleChange}>
          7
        </button>
        <button name="8" onClick={handleChange}>
          8
        </button>
        <button name="9" onClick={handleChange}>
          9
        </button>
        <button name="*" onClick={handleChangeoperator} className="opt">
          &#215;
        </button>
        <button name="4" onClick={handleChange}>
          4
        </button>
        <button name="5" onClick={handleChange}>
          5
        </button>
        <button name="6" onClick={handleChange}>
          6
        </button>
        <button name="-" onClick={handleChangeoperator} className="opt">
          &#8722;
        </button>
        <button name="1" onClick={handleChange}>
          1
        </button>
        <button name="2" onClick={handleChange}>
          2
        </button>
        <button name="3" onClick={handleChange}>
          3
        </button>
        <button name="+" onClick={handleChangeoperator} className="opt">
          &#43;
        </button>
        <div className="calc-button-row-first">
          <button name="0" onClick={handleChange} className="zero">
            0
          </button>

          <button name="=" onClick={handleResult} className="opt">
            &#61;
          </button>
        </div>
      </div>
      {history.length > 0 && (
        <div className="history">
          <h3>History</h3>
          {history.map((item) => (
            <li key={item._id}>{item.operationhistory}</li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Calculator;
