/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { FingerLoader } from '../components/loaders/FingerLoader'
import { useSession } from '../hooks/useSession'
import { Layout } from '../layouts/Layout'
import api from '../services/api'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { GridContainer } from '../components/GridContainer'
import { ExerciseItem } from '../components/homepage/ExerciseItem'
import { Link } from 'react-router-dom'
import { routesV3 } from '../routes'

export const LearMecaHomePage = () => {
  const [exercisesByDifficulty, setExercisesByDifficulty] = useState([])
  const { user } = useSession()

  function groupArrayOfObjects ({ list, key }) {
    return list.reduce(function (rv, x) {
      ;(rv[x[key]] = rv[x[key]] || []).push(x)
      return rv
    }, {})
  }
  useEffect(() => {
    api()
      .getMecaExercises({ userId: user.id })
      .then((data) => {
        const dataGroupedByDifficulty = groupArrayOfObjects({
          list: data.data,
          key: 'difficulty'
        })
        const arrayConverted = Object.entries(dataGroupedByDifficulty)
        console.log({ arrayConverted })
        setExercisesByDifficulty(arrayConverted)
      })
      .catch(() => {
        toast.error('Oops! Hubo un error.')
      })
  }, [])

  return (
    <Layout>
      {exercisesByDifficulty.length === 0
        ? (
        <FlexContainer jc_c ai_c>
          <FingerLoader />
        </FlexContainer>
          )
        : (
            exercisesByDifficulty.map((item, i) => (
          <Layout key={`${i}-meca`} mg='2rem 0'>
            <Title>{item[0]}</Title>
            <GridContainer
              autoFill={true}
              minMax='120px, 300px'
              gap='1rem'
              pd='1.5rem 0'>
              {item[1].map(
                ({ id, title, textContent, category, difficulty, isCompleted }) => (
                  <Link
                    key={id}
                    to={`${routesV3.MECA_PAGE.subpages.EXERCISE.route}/${id}`}>
                    <ExerciseItem
                      id={id}
                      title={title}
                      content={textContent}
                      category={category}
                      difficulty={difficulty}
                      isCompleted={isCompleted}
                    />
                  </Link>
                )
              )}
            </GridContainer>
          </Layout>
            ))
          )}
    </Layout>
  )
}

const Title = styled.h3`
  color: ${({ theme: { fontColor } }) => fontColor};
  font-size: 2rem;
  width: 6.25rem;
`
