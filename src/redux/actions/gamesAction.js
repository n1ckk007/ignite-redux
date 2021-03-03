import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../../api";

// Action creator
// when using thunk and u want to make an api req, after arrow u add another arrow func
export const loadGames = () => async (dispatch) => {
  // fetch axios
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  //   dispatch to go to the reducer
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
