import React from "react";
import { Header } from "./Header/Header";
import { Container } from "../components/Container/Container";
import s from "./Layout.module.scss";

export const Layout = ({
  selectValue,
  selectHandler,
  value,
  handler,
  children,
}) => {
  return (
    <>
      <Header
        value={value}
        handler={handler}
        selectValue={selectValue}
        selectHandler={selectHandler}
      />
      <main className={s.main}>
        <Container>
          {children}
        </Container>
      </main>
    </>
  );
};
