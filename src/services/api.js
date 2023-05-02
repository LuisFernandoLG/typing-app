const HOST = 'https://backendtypandtyp.onrender.com'

// if (location.protocol === 'http:') {
// }
// const exercisesEndpoint = `${HOST}/exercises`
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
const getAllEnglishCoursesEndpoint = `${HOST}/courses/user`
const getCourseEndpoint = `${HOST}/course`
const getCoursesTemplateEndpoint = `${HOST}/coursesTemplate`
const updateMecaExerciseEndpoint = `${HOST}/course/mecaExercise`
const updateAbcExerciseEndpoint = `${HOST}/course/abcExercise`
const updateCourseEndpoint = `${HOST}/course`
const addAbcExerciseEndpoint = `${HOST}/course/abcExercise`
const addMecaExerciseEndpoint = `${HOST}/course/mecaExercise`
const addCourseEndpoint = `${HOST}/course`
const markExerciseCompleted = `${HOST}/course/exercise/markascompleted`
const getMecaExerciseEndpoint = `${HOST}/exercise`
const getMecaExercisesAsMarked = `${HOST}/meca/exercises`
const markMecaExercisesAsMarkedEndpoint = `${HOST}/meca/exercise/mark`
const getRicesAsMarkedeEndpoint = `${HOST}/rice/exercises/user`
const getRiceEndpoint = `${HOST}/rice/exercise`
const markRiceAsDoneEndpoint = `${HOST}/rice/exercise/mark`
const addRiceEndpoint = `${HOST}/rice/exercise`
const updateRiceEndpoint = `${HOST}/rice/exercise`

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

  const getAllEnglishCourses = ({ userId }) =>
    new Promise((resolve, reject) => {
      const defualtUserId = userId || 0
      fetch(`${getAllEnglishCoursesEndpoint}/${defualtUserId}`)
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
      console.log({ options })
      fetch(updateAbcExerciseEndpoint, options)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })
  const updateCourse = ({ course }) =>
    new Promise((resolve, reject) => {
      const options = getOptionsForPut({ body: { ...course } })
      console.log({ options })
      fetch(updateCourseEndpoint, options)
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
      fetch(`${addMecaExerciseEndpoint}/${courseId}`, options)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })

  const addCourse = ({ course }) =>
    new Promise((resolve, reject) => {
      const options = getOptionsForPost({ body: { ...course } })
      fetch(`${addCourseEndpoint}/`, options)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })

  const markExerciseFromEnglishCourseCompleted = ({ courseId, exerciseId, userId }) =>
    new Promise((resolve, reject) => {
      const options = getOptionsForPost({ body: { courseId, exerciseId, userId } })
      fetch(`${markExerciseCompleted}`, options)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })

  const getMecaExercises = ({ userId }) =>
    new Promise((resolve, reject) => {
      // const options = getOp({ body: { courseId, exerciseId, userId } })
      fetch(`${getMecaExercisesAsMarked}/${userId}`)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })

  const getMecaExercise = ({ idQuote }) =>
    new Promise((resolve, reject) => {
      // const options = getOp({ body: { courseId, exerciseId, userId } })
      fetch(`${getMecaExerciseEndpoint}/${idQuote}`)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })

  const markMecExerciseAsCompleted = ({ mecaId, userId }) =>
    new Promise((resolve, reject) => {
      const options = getOptionsForPost({ body: { mecaId, userId } })
      console.log({ options })
      fetch(`${markMecaExercisesAsMarkedEndpoint}`, options)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })

  const getRicesAsMarked = ({ userId }) =>
    new Promise((resolve, reject) => {
      const defualtUserId = userId || 0
      fetch(`${getRicesAsMarkedeEndpoint}/${defualtUserId}`)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })

  const getRice = ({ riceId }) =>
    new Promise((resolve, reject) => {
      fetch(`${getRiceEndpoint}/${riceId}`)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })

  const markRiceAsDone = ({ riceId, userId }) =>
    new Promise((resolve, reject) => {
      const options = getOptionsForPost({ body: { riceId, userId } })
      fetch(`${markRiceAsDoneEndpoint}`, options)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })

  const addRice = ({ riceExercise }) =>
    new Promise((resolve, reject) => {
      const options = getOptionsForPost({ body: { ...riceExercise } })
      fetch(`${addRiceEndpoint}`, options)
        .then((res) => {
          resolve(res.json())
        })
        .catch((error) => {
          reject(error)
        })
    })

  const updateRice = ({ riceExercise }) =>
    new Promise((resolve, reject) => {
      const options = getOptionsForPut({ body: { ...riceExercise } })
      console.log({ options })
      fetch(updateRiceEndpoint, options)
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
    updateCourse,
    addAbcExercise,
    addMecaExercise,
    addCourse,
    markExerciseFromEnglishCourseCompleted,
    getMecaExercises,
    getMecaExercise,
    markMecExerciseAsCompleted,
    getRicesAsMarked,
    getRice,
    markRiceAsDone,
    addRice,
    updateRice
  }
}

export default api
