// const PROTOCOL = 'http'
// const DOMAIN = 'localhost:80'

// const PROTOCOL = 'https'
// const DOMAIN = 'backendtypeandtpye.herokuapp.com'
// const HOST = `${PROTOCOL}://${DOMAIN}`
const PROTOCOL = 'http'
const DOMAIN = '155.248.201.14:8000'
const HOST = `${PROTOCOL}://${DOMAIN}`

const exercises = `${HOST}/exercises`
const logIn = `${HOST}/logIn`
const exercise = `${HOST}/exercise`
const ranking = `${HOST}/ranking`
const score = `${HOST}/score`
const categories = `${HOST}/categories`
const search = `${HOST}/exercises/search`
const signIn = `${HOST}/signIn`
const adminExercises = `${HOST}/admin/exercises`
const stadisticsUser = `${HOST}/stadistics`
const putExercise = `${HOST}/admin/exercise`
const postExercise = `${HOST}/admin/exercise`

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
  stadisticsUser
}
