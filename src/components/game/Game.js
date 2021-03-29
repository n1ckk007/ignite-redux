import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadDetail } from "../../redux/actions/detailAction";
import { StyledGame } from "./GameStyles";

const Game = ({ name, released, image, id }) => {
  // load details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
      </Link>
    </StyledGame>
  );
};

export default Game;
