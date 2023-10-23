import React from "react";
import { Layout } from "../../layout/Layout";

import { Cards } from "../../components/Cards/Cards";
import s from "./Home.module.scss";
import { Link } from "react-router-dom";
import  Vector from "./assets/Vector.svg";

export const Home = ({data,
  inputValue,
  selected,
  fav,
  inputHandler,
  inputSelect,
  disLikeIt,
  likeHandler,
}) => {
  // const linkShowLiked = [{path: "ShowLiked", label: "ShowLiked"}]
  return (
    <>
      <Layout
        value={inputValue}
        handler={inputHandler}
        selectValue={selected}
        selectHandler={inputSelect}
      >
        <div className={s.flex}>
          {data
            .filter((item) => {
              return inputValue.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(inputValue) ||
                    item.actor.toLowerCase().includes(inputValue);
            })
            .filter((item) => {
              return selected === "" ? item : item.house.includes(selected);
            })
            .map((el) => {
              return (
                <Cards
                  key={el.id}
                  id={el.id}
                  image={el.image}
                  name={el.name}
                  actor={el.actor}
                  gender={el.gender}
                  house={el.house}
                  wand={el.wand.core}
                  alive={el.alive}
                  likeHandler={() =>
                    fav.includes(el.id) ? disLikeIt(el.id) : likeHandler(el.id)
                  }
                  isLiked={fav.includes(el.id)}
                />
              );
            })}
        </div>
        <Link to="/ShowLiked">
          <button className={s.showLiked}>
            <img className={s.btnVector} src={Vector} alt="" />
            Show Liked
          </button>
        </Link>
      </Layout>
    </>
  );
};
