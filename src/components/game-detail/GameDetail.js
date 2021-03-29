import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
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
  };
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
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
                    {game.platforms.map((data) => (
                      <h3 key={data.platform.id}>{data.platform.name}</h3>
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
                {screens.results.map((screens) => (
                  <img key={screens.id} src={screens.image} alt="game" />
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
