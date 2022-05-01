import { isEnvLocalhost } from '../../helpers/isEnvLocalhost'
import { isPageHTTPS } from '../../helpers/isPageHTTPS'

const vicServer = 'http://typeandtype.duckdns.org:8000'
const herokuServer = 'https://backendtt.herokuapp.com'
const localhostServer = 'http://localhost:8000'
const HOST = isEnvLocalhost()
  ? localhostServer
  : isPageHTTPS()
    ? herokuServer
    : vicServer

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
