import React from "react";
import { useSelector } from "react-redux";
import {
  CardShadow,
  Detail,
  Stats,
  Info,
  Platforms,
  Media,
  Description,
} from "./GameDetailStyles";

const GameDetail = () => {
  // get the state via useSelector and we can extract state.detail
  const { game, screens } = useSelector((state) => state.detail);
  return (
    <CardShadow>
      <div className="card-shadow">
        <Detail>
          <Stats>
            <div className="rating">
              <h3>{game.name}</h3>
              <p>Rating: {game.rating}</p>
            </div>
            <Info>
              <h3>Platforms</h3>
              <Platforms>
                {/* map because platforms is an array */}
                {game &&
                  game.platforms.map(data, (i) => (
                    <h3 key={i}>{data.platform.name}</h3>
                  ))}
              </Platforms>
            </Info>
          </Stats>
          <Media>
            <img src={game.background_image} alt="image" />
          </Media>
          <Description>
            <p>{game.description_raw}</p>
          </Description>
          <div className="gallery">
            {game &&
              game.platforms &&
              screens.results.map((screens, i) => (
                <img key={i} src={screens.image} alt="game" />
              ))}
          </div>
        </Detail>
      </div>
    </CardShadow>
  );
};

export default GameDetail;
