import React, { Fragment, useState } from "react";
import "./styles.css";
import { OutputArea } from "./components/outputArea";
import { InputForm } from "./components/inputForm";

export const App = () => {
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
        <InputForm
          label={"年齢(歳)"}
          placeholder={"ex) 60"}
          onChange={onChangeAge}
        />
        <InputForm
          label={"身長(m)"}
          placeholder={"ex) 1.6"}
          onChange={onChangeHeight}
        />
        <InputForm
          label={"体重(kg)"}
          placeholder={"ex) 60"}
          onChange={onChangeWeight}
        />
        <InputForm
          label={"血清クレアチニン値(mg/dL)"}
          placeholder={"ex) 0.6"}
          onChange={onChangeCreatinine}
        />
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
      <OutputArea bmi={bmi} ccr={ccr} />
    </Fragment>
  );
};
