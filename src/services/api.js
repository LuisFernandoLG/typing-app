// const PROTOCOL = 'http'
// const DOMAIN = 'localhost:8000'
const PROTOCOL = 'https'
const DOMAIN = 'backendtypeandtpye.herokuapp.com'
const HOST = `${PROTOCOL}://${DOMAIN}`

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

const api = () => {
  const getAllEnglishExercises = async ({ courseId, exerciseId }) => {
    try {
      const res = await fetch(
        `${allEnglishExercisesEndPoint}/${courseId}/${exerciseId}`
      )
      const json = res.ok ? res.json() : null
      return json
    } catch (error) {
      console.log({ myMess: 'something went wrong', error })
      return { error }
    }
  }

  const updateUser = ({ user }) => new Promise((resolve, reject) => {
    const options = getOptionsForPut({ body: user })
    fetch(updateUserEndPoint, options).then((res) => {
      resolve(res.json())
    }).catch((error) => {
      reject(error)
    })
  })

  // Functions hehe
  return { getAllEnglishExercises, updateUser }
}

export default api
