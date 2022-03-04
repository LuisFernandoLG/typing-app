// // const PROTOCOL = "http",
// //   DOMAIN = "localhost:8000",
// const PROTOCOL = 'https'
// const DOMAIN = 'backendtypeandtpye.herokuapp.com'
// const HOST = `${PROTOCOL}://${DOMAIN}`

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

// const login = async ({ email, password }) => {
//   const options = {
//     method: 'POST',
//     body: JSON.stringify({ email, password }),
//     'Content-Type': 'application/json'
//   }

//   const response = await fetch(loginEndpoint, options)
//   if(!response.ok)
//   return response.json()
// }

// export { login }
