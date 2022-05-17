import { isEnvLocalhost } from '../helpers/isEnvLocalhost'
import { isPageHTTPS } from '../helpers/isPageHTTPS'

const vicServer = 'http://typeandtype.duckdns.org:8000'
const herokuServer = 'https://backendtt.herokuapp.com'
const localhostServer = 'http://localhost:8000'
const HOST = isEnvLocalhost()
  ? localhostServer
  : isPageHTTPS()
    ? herokuServer
    : vicServer

// if (location.protocol === 'http:') {
// }
// // const exercisesEndpoint = `${HOST}/exercises`
// const loginEndpoint = `${HOST}/logIn`
// // const exerciseEndpoint = `${HOST}/exercise`
// // const rankingEndpoint = `${HOST}/ranking`
// // const scoreEndpoint = `${HOST}/score`
// // const categoriesEndpoint = `${HOST}/categories`
// // const searchEndpoint = `${HOST}/exercises/search`
// // const signInEndpoint = `${HOST}/signIn`
// // const adminExercisesEndpoint = `${HOST}/admin/exercises`
// // const stadisticsUserEndpoint = `${HOST}/stadistics`
// // const putExerciseEndpoint = `${HOST}/admin/exercise`
// // const postExerciseEndpoint = `${HOST}/admin/exercise`
const allEnglishExercisesEndPoint = `${HOST}/englishExercises`
const updateUserEndPoint = `${HOST}/user`
const recoverPassEndPoint = `${HOST}/recover/pass`
const getAllEnglishCoursesEndpoint = `${HOST}/courses`
const getCourseEndpoint = `${HOST}/course`
const getCoursesTemplateEndpoint = `${HOST}/coursesTemplate`
const updateMecaExerciseEndpoint = `${HOST}/course/mecaExercise`
const updateAbcExerciseEndpoint = `${HOST}/course/abcExercise`
const addAbcExerciseEndpoint = `${HOST}/course/abcExercise`
const addMecaExerciseEndpoint = `${HOST}/course/mecaExercise`

// const basicOptions = {
//   method: 'GET',
//   'Content-Type': 'application/json'
// }

// const login = async ({ email, password }) => {

//   const response = await fetch(loginEndpoint, options)
//   if(!response.ok)
//   return response.json()
// }

const getOptionsForPut = ({ body }) => ({
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-type': 'application/json'
  }
})

const getOptionsForPost = ({ body }) => ({
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-type': 'application/json'
  }
})

const api = () => {
  const getAllEnglishExercises = async ({ courseId, exerciseId }) => {
    try {
      const res = await fetch(
        `${allEnglishExercisesEndPoint}/${courseId}/${exerciseId}`
      )
      const json = res.ok ? res.json() : null
      return json
    } catch (error) {
      return { error }
    }
  }

  const updateUser = ({ user }) =>
    new Promise((resolve, reject) => {
      const options = getOptionsForPut({ body: user })
      fetch(updateUserEndPoint, options)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })

  const recoverPass = ({ email }) =>
    new Promise((resolve, reject) => {
      const options = getOptionsForPost({ body: { email } })
      fetch(recoverPassEndPoint, options)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })

  const getAllEnglishCourses = () =>
    new Promise((resolve, reject) => {
      fetch(getAllEnglishCoursesEndpoint)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })

  const getCourse = ({ courseId }) =>
    new Promise((resolve, reject) => {
      const endpointWithCourseId = `${getCourseEndpoint}/${courseId}`
      fetch(endpointWithCourseId)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })

  const getCourseTemplates = () =>
    new Promise((resolve, reject) => {
      // const endpointWithCourseId = `${getCourseEndpoint}/${courseId}`
      fetch(getCoursesTemplateEndpoint)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })

  const updateMecaExercise = ({ mecaExercise }) =>
    new Promise((resolve, reject) => {
      const options = getOptionsForPut({ body: { ...mecaExercise } })
      // console.log({ options })
      fetch(updateMecaExerciseEndpoint, options)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })

  const updateAbcExercise = ({ abcExercise }) =>
    new Promise((resolve, reject) => {
      const options = getOptionsForPut({ body: { ...abcExercise } })
      // console.log
      console.log({ options })
      fetch(updateAbcExerciseEndpoint, options)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })

  const addAbcExercise = ({ abcExercise, courseId }) =>
    new Promise((resolve, reject) => {
      const options = getOptionsForPost({ body: { ...abcExercise } })
      console.log({ options })
      fetch(`${addAbcExerciseEndpoint}/${courseId}`, options)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })

  const addMecaExercise = ({ mecaExercise, courseId }) =>
    new Promise((resolve, reject) => {
      const options = getOptionsForPost({ body: { ...mecaExercise } })
      console.log({ options })
      fetch(`${addMecaExerciseEndpoint}/${courseId}`, options)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })

  // Functions hehe
  return {
    getAllEnglishExercises,
    updateUser,
    recoverPass,
    getAllEnglishCourses,
    getCourse,
    getCourseTemplates,
    updateMecaExercise,
    updateAbcExercise,
    addAbcExercise,
    addMecaExercise
  }
}

export default api
