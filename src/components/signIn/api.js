const PROTOCOL = "http",
  DOMAIN = "localhost:8000",
  HOST = `${PROTOCOL}://${DOMAIN}`;

const exercises = `${HOST}/exercises`;
const logIn = `${HOST}/logIn`;
const exercise = `${HOST}/exercise`;
const ranking = `${HOST}/ranking`;
const score = `${HOST}/score`;

export const endpoints = {
  exercises,
  logIn,
  exercise,
  ranking,
  score,
};
