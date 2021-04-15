import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { smallImage } from "../../util";
import {
  CardShadow,
  Detail,
  Stats,
  Info,
  Platforms,
  Media,
  Description,
} from "./GameDetailStyles";

const GameDetail = ({ pathId }) => {
  // get the state via useSelector and we can extract state.detail
  const { game, screens, isLoading } = useSelector((state) => state.detail);
  const history = useHistory();
  // exit detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    // console.log(element);
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      // to set the route to home after exiting game detail
      history.push("/");
    }
    // console.log(typeof pathId);
  };
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <div className="card-shadow">
            <Detail layoutId={pathId}>
              <Stats>
                <div className="rating">
                  <motion.h3 layout={`title ${pathId}`}>{game.name}</motion.h3>
                  <p>Rating: {game.rating}</p>
                </div>
                <Info>
                  <h3>Platforms</h3>
                  <Platforms>
                    {/* map because platforms is an array */}
                    {game.platforms.map((data) => (
                      <h3 key={data.platform.id}>{data.platform.name}</h3>
                    ))}
                  </Platforms>
                </Info>
              </Stats>
              <Media>
                <motion.img
                  src={smallImage(game.background_image, 1280)}
                  alt="image"
                  layoutId={`image ${pathId}`}
                />
              </Media>
              <Description>
                <p>{game.description_raw}</p>
              </Description>
              <div className="gallery">
                {screens.results.map((screens) => (
                  <img
                    key={screens.id}
                    src={smallImage(screens.image, 1280)}
                    alt="game"
                    loading="lazy"
                  />
                ))}
              </div>
            </Detail>
          </div>
        </CardShadow>
      )}
    </>
  );
};

export default GameDetail;
