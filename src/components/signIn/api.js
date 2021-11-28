// const PROTOCOL = "http",
//   DOMAIN = "localhost:8000",
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
const signIn = `${HOST}/signIn`;
const adminExercises = `${HOST}/admin/exercises`;
const putExercise = `${HOST}/admin/exercise`;
const postExercise = `${HOST}/admin/exercise`;

export const endpoints = {
  exercises,
  logIn,
  exercise,
  ranking,
  score,
  categories,
  search,
  signIn,
  adminExercises,
  putExercise,
  postExercise,
};
