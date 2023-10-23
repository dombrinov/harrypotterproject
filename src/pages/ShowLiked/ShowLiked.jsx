import React from "react";
import { Link } from "react-router-dom";
import s from "./ShowLiked.module.scss";
import { Container } from "../../components/Container/Container";
import { data } from "../../data/characters.js";
import { Cards } from "../../components/Cards/Cards";

export const ShowLiked = ({ fav, disLikeIt, likeHandler, data }) => {
  return (
    <>
      <Container>
        <Link to="/">
          <p className={s.showLiked}>← Back to All</p>
        </Link>
        <h1 className={s.title}>Liked ones</h1>
        <h2 className={s.subtitle}>
          Your favorite characters from the Harry Potter universe.
        </h2>
        <div className={s.flex}>
          {data
            .filter((item) => {
              return fav.includes(item.id) ? item : false;
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
                  isLiked={fav.includes(el.id)}
                  likeHandler={() =>
                    fav.includes(el.id) ? disLikeIt(el.id) : likeHandler(el.id)
                  }
                  
                />
              );
            })}
        </div>
      </Container>
    </>
  );
};
