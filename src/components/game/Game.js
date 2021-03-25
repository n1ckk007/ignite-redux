import React from "react";
import { useDispatch } from "react-redux";
import { loadDetail } from "../../redux/actions/detailAction";
import { StyledGame } from "./GameStyles";

const Game = ({ name, released, image, id }) => {
  // load details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

export default Game;
