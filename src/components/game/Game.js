import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadDetail } from "../../redux/actions/detailAction";
import { smallImage } from "../../util";
import { StyledGame } from "./GameStyles";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();
  // load details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
    // console.log(typeof id);
  };

  return (
    <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layout={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
          loading="lazy"
        />
        {/* <motion.img
          layoutId={`image ${stringPathId}`}
          src={image}
          alt={name}
          loading="lazy"
        /> */}
      </Link>
    </StyledGame>
  );
};

export default Game;
