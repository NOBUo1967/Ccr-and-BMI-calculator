import React from "react";

export const OutputArea = (props) => {
  const  {bmi, ccr} = props
  return (
    <div className="output-area">
      <div>
        <p>BMI</p>
        <p>　{bmi}</p>
      </div>
      <div>
        <p>クレアチニンクリアランス推算値(Cockcroft-Gault式)</p>
        <p>　{ccr}mL/min</p>
      </div>
    </div>
  );
};
