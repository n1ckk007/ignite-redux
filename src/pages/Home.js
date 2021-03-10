import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../redux/actions/gamesAction";

const Home = () => {
  // fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default Home;
