import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Game from "../components/game/Game";
import { loadGames } from "../redux/actions/gamesAction";

const Home = () => {
  // fetch games, useEffect will only run when the dispatch happens
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //   pull data from the state
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  //   console.log(games);
  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  /* repeat column as many times as u can and auto fity them. 
  minmax means 500 should be the min space it should take on the screen,
  if the pic doesn't have 500px anymore it will jump to next row and expand  */
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
