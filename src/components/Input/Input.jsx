import React from "react";
import s from "./Input.module.scss";

export const Input = ({value, handler}) => {
  return (
    <>
      <label className={s.labelInput} htmlFor="">
        Name
      </label>
      <br />
      <input className={s.input} type="text" value={value} onChange={handler} />
    </>
  );
};
