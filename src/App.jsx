import "./Global.css";
import { Cards } from "./components/Cards/Cards";
import { Layout } from "./layout/Layout";
import { data } from "./data/characters.js";
import { useEffect, useState } from "react";

function App() {
  let LIKED_ARR = "hasLiked";
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [fav, setFav] = useState(
    JSON.parse(localStorage.getItem(LIKED_ARR)) ?? []
  );

  const inputHandler = (evt) => {
    setInputValue(evt.target.value);
  };

  const inputSelect = (evt) => {
    setSelected(evt.target.value);
  };
  const disLikeIt = (id) => {
    setFav(fav.filter((el) => el !== id));
  };

  const likeHandler = (id) => {
    setFav([...fav, id]);
  };

  console.log(fav);

  useEffect(() => {
    localStorage.setItem(LIKED_ARR, JSON.stringify(fav));
  }, [fav]);
  
  return (
    <>
      <Layout
        value={inputValue}
        handler={inputHandler}
        selectValue={selected}
        selectHandler={inputSelect}
      >
        <div className="flex">
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
      </Layout>
    </>
  );
}

export default App;
