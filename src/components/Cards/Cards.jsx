import React from "react";
import { Liked } from "../Liked/Liked";
import s from "./Cards.module.scss";

export const Cards = ({
  
  id,
  isLiked,
  likeHandler,
  image,
  name,
  actor,
  gender,
  house,
  wand,
  alive,
}) => {
  return (
    <div className={s.cards}>
      <Liked likeHandler={likeHandler} isLiked={isLiked} id={id} />
      <img
        className={s.cardsImg}
        src={image ? image : "https://placehold.co/334x330"}
        alt="Character's Photo"
      />
      <h2 className={s.cardsTitle}>{name}</h2>
      <p className={s.cardsText}>Actor: {actor}</p>
      <p className={s.cardsText}>Gender: {gender}</p>
      <p className={s.cardsText}>House: {house}</p>
      <p className={s.cardsText}>Wand core:{wand}</p>
      <p className={s.cardsText}>Alive: {alive === true ? "Yes" : "No"}</p>
    </div>
  );
};
