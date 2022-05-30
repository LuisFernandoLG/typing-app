import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import { RiceExercise } from '../components/RiceExercise'
import { Layout } from '../layouts/Layout'
import api from '../services/api'
import { toast } from 'react-toastify'
import { RiceExercise } from '../components/RiceExercise'
import { FingerLoader } from '../components/loaders/FingerLoader'
import { useSession } from '../hooks/useSession'

export const RiceExercisePage = () => {
  const { riceId } = useParams()
  const { user } = useSession()
  const [currentExercise, setCurrentExercise] = useState(null)

  useEffect(() => {
    api()
      .getRice({ riceId })
      .then((data) => {
        setCurrentExercise(data.data)
      })
      .catch(() => {
        toast.error('Oops! Hubo un error.')
      })
  }, [])

  const setIsDone = ({ isUserWinner }) => {
    if (isUserWinner) api().markRiceAsDone({ riceId, userId: user.id })
  }

  return <Layout>
      { currentExercise ? <RiceExercise exercise={currentExercise} setIsDone={setIsDone}/> : <FingerLoader/> }

  </Layout>
}
