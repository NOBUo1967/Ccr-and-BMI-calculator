import React, { Fragment, useState } from "react";
import "./styles.css";

export const Calculator = () => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [creatinine, setCreatinine] = useState("");
  const [gender, setGender] = useState("male");
  const [ccr, setCcr] = useState("0");
  const [bmi, setBmi] = useState("0");

  const onChangeAge = (e) => setAge(e.target.value);
  const onChangeHeight = (e) => setHeight(e.target.value);
  const onChangeWeight = (e) => setWeight(e.target.value);
  const onChangeCreatinine = (e) => setCreatinine(e.target.value);
  const onChangeGender = (e) => setGender(e.target.value);

  const calcCcr = () => {
    let newCcr = Math.round(((140 - age) * weight) / (72 * creatinine));
    if (gender === "female") {
      newCcr = newCcr * 0.85;
    }
    setCcr(newCcr);
  };

  const calcBmi = () => {
    const newBmi = Math.round(weight / (height * height));
    setBmi(newBmi);
  };

  const onClickCalc = () => {
    calcBmi();
    calcCcr();
  };

  return (
    <Fragment>
      <div className="input-area">
        <div>
          <p>年齢(歳)</p>
          <input placeholder="ex) 60" onChange={onChangeAge} />
        </div>
        <div>
          <p>身長(m)</p>
          <input placeholder="ex) 1.6" onChange={onChangeHeight} />
        </div>
        <div>
          <p>体重(kg)</p>
          <input placeholder="ex) 60" onChange={onChangeWeight} />
        </div>
        <div>
          <p>血清クレアチニン値(mg/dL)</p>
          <input placeholder="ex) 0.6" onChange={onChangeCreatinine} />
        </div>
        <div>
          <p>性別</p>
          <label>
            <input
              type="radio"
              value="male"
              onChange={onChangeGender}
              checked={gender === "male"}
            />
            男性
          </label>
          <label>
            <input
              type="radio"
              value="female"
              onChange={onChangeGender}
              checked={gender === "female"}
            />
            女性
          </label>
        </div>
        <button onClick={onClickCalc}>計算</button>
      </div>
      <br />
      <div className="output-area">
        <div>
          <p>BMI</p>
          <p>{bmi}</p>
        </div>
        <div>
          <p>クレアチニンクリアランス</p>
          <p>{ccr}mL/min</p>
        </div>
      </div>
    </Fragment>
  );
};
