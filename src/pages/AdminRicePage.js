import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { AddRiceForm } from '../components/AddRiceForm'
import { EditRiceForm } from '../components/EditRiceForm'
import { GridContainer } from '../components/GridContainer'
import { FingerLoader } from '../components/loaders/FingerLoader'
// import { GridContainer } from '../components/GridContainer'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { Layout } from '../layouts/Layout'
import api from '../services/api'

export const AdminRicePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [exercises, setExercises] = useState([])

  const getExercises = () => {
    api()
      .getRicesAsMarked({ userId: 0 })
      .then((data) => {
        console.log({ data })
        setExercises(data.data)
      })
      .catch(() => {
        toast.error('Oops! algo salió mal')
      })
  }

  useEffect(getExercises, [])

  const updateView = () => {
    getExercises()
  }

  return (
    <Layout>
      <FlexContainer jc_c ai_c>
        <AddRiceForm updateView={updateView} />
      </FlexContainer>
      {exercises.length === 0
        ? (
            <FlexContainer jc_c ai_c pd="2rem 0">
        <FingerLoader />
            </FlexContainer>
          )
        : (
        <GridContainer
          autoFill={true}
          minMax='400px, 1fr'
          gap='2rem'
          pd='1.5rem 0'>
          {exercises.map((item, i) => (
            <EditRiceForm key={`${i}-riceEdit`} riceExercise={item} />
          ))}
        </GridContainer>
          )}
    </Layout>
  )
}
