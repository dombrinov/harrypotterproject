import React from "react";
import { Input } from "../../components/Input/Input";
import { Select } from "../../components/Select/Select";
import { Container } from "../../components/Container/Container";
import s from "./Header.module.scss";

export const Header = ({ value, handler, selectValue, selectHandler }) => {
  return (
    <>
      <Container>
        <h1 className={s.title}>Harry Potter</h1>
        <h2 className={s.subtitle}>
          View all characters from the Harry Potter universe.
        </h2>
        <div className={s.headerFlex}>
          <Input value={value} handler={handler} />
          <Select selectValue={selectValue} selectHandler={selectHandler} />
        </div>
      </Container>
    </>
  );
};
