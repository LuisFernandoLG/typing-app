const PROTOCOL = "https",
  DOMAIN = "backendtypeandtpye.herokuapp.com",
  HOST = `${PROTOCOL}://${DOMAIN}`;

const exercises = `${HOST}/exercises`;
const logIn = `${HOST}/logIn`;
const exercise = `${HOST}/exercise`;
const ranking = `${HOST}/ranking`;
const score = `${HOST}/score`;
const categories = `${HOST}/categories`;
const search = `${HOST}/exercises/search`;

export const endpoints = {
  exercises,
  logIn,
  exercise,
  ranking,
  score,
  categories,
  search,
};
