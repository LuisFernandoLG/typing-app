import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { endpoints } from '../components/signIn/api'
import { useFetch } from './useFetch'

const initialExerciseItem = {
  id: null,
  title: null,
  time: null,
  textContent: null,
  points: null
}

export const useExercisePage = () => {
  const { idQuote } = useParams()

  const [exerciseItem, setExerciseItem] = useState(initialExerciseItem)
  const { loading, fetchData, data } = useFetch()
  const [timer, setTimer] = useState(null)
  const [isTimeOver, setIsTimeOver] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [results, setResults] = useState([])

  const dicrementTime = () => {
    setTimer((timer) => (timer > 0 ? timer - 1 : timer))
  }

  const markAsCompleted = () => setIsCompleted(true)
  const markAsTimeOver = () => setIsTimeOver(true)

  useEffect(() => {
    fetchData(`${endpoints.exercise}/${idQuote}`)
  }, [])

  useEffect(() => {
    if (data === null) return null
    setExerciseItem(data.data)
    setTimer(data.data.time)
  }, [data])

  return {
    markAsTimeOver,
    markAsCompleted,
    timeLeft: timer,
    dicrementTime,
    currentExercise: exerciseItem,
    loading,
    setResults,
    results,
    isTimeOver,
    isCompleted
  }
}
