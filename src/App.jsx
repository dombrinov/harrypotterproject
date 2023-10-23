import "./Global.css";
import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound/NotFound";
import { ShowLiked } from "./pages/ShowLiked/ShowLiked";
import { Home } from "./pages/Home/Home";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          inputValue={inputValue}
          selected={selected}
          fav={fav}
          inputHandler={inputHandler}
          inputSelect={inputSelect}
          disLikeIt={disLikeIt}
          likeHandler={likeHandler}
          data={data}
        />
      ),
    },
    {
      path: "/showliked",
      element: (
        <ShowLiked
          fav={fav}
          disLikeIt={disLikeIt}
          likeHandler={likeHandler}
          data={data}
        />
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
