const API_KEY = process.env.REACT_APP_RAWG_API_KEY;
// base url
const base_url = "https://api.rawg.io/api/";

const currentYear = new Date().getFullYear();
const currentMonth = String(new Date().getMonth() + 1).padStart(2, "0");
const currentDay = String(new Date().getDate()).padStart(2, "0");
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// fetching all popular games from last year to current date & order by rating
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=${API_KEY}`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=${API_KEY}`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10&key=${API_KEY}`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

// game details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${API_KEY}`;
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${API_KEY}`;
