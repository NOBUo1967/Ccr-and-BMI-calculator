import React from "react";

export const InputForm = (props) => {
  const { label, placeholder , onChange } = props
  return (
    <div>
      <p>{label}</p>
      <input placeholder={placeholder} onChange={onChange} />
    </div>
  );
};
