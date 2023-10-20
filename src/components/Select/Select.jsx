import React from "react";
import s from "./Select.module.scss";

export const Select = ({ selectValue, selectHandler }) => {
  return (
    <>
      <label className={s.nameSelect} htmlFor="">
        School
      </label>
      <br />
      <select
        className={s.select}
        name=""
        id=""
        onChange={selectHandler}
        value={selectValue}
      >
        <option value="">Choose one</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </>
  );
};
