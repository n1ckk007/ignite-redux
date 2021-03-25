import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../../api";

// when dispatching loadDetail action, thats when will pass id
export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id));
  const screenshotData = await axios.get(gameScreenshotURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screens: screenshotData.data,
    },
  });
};
