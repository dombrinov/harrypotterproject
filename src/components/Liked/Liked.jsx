import React from "react";
import s from "./Liked.module.scss";
import Like from "./assets/Like.svg";
import liked from "./assets/Liked.svg";
export const Liked = ({ id, isLiked, likeHandler }) => {
  return (
    <>
      <button className={s.like} onClick={likeHandler} id={id}>
        <img src={isLiked ? liked : Like} alt="" />
      </button>
    </>
  );
};
