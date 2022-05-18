/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { AddCourseForm } from '../AddCourseForm'
import { FingerLoader } from '../components/loaders/FingerLoader'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { EditCourseForm } from '../EditCourseForm'
import { Layout } from '../layouts/Layout'
import { routesV3 } from '../routes'
import api from '../services/api'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { FloatContainer } from '../components/FloatContainer'
import { Loader } from '../components/Loader'

export const EnglishAdminPage = () => {
  const [courses, setCourses] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const getData = () => {
    setIsLoading(true)
    api()
      .getCourseTemplates()
      .then((data) => {
        setCourses(data.data)
      })
      .catch(() => {
        toast.error('Algo salió mal :(')
        setCourses(null)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(getData, [])

  return (
    <Layout pd='1rem 5rem'>
      <FlexContainer fd_c gap='1rem'>
        <AddCourseForm updateView = {getData}/>
        <GridContainer>
          {courses
            ? (
                courses.map((course) => (
              <div key={course.courseId}>
                <EditCourseForm course={course} />
                <FlexContainer jc_c ai_c>
                  <ExercisesLink
                    to={`${routesV3.ENGLISH_PAGE.subRoutes.ENGLISH_ADMIN_PAGE.subRoutes.ENGLISH_EXERCISE_ADMIN_PAGE.route}/${course.courseId}`}>
                    <FlexContainer jc_c ai_c>
                      Ejercicios <IoArrowForwardOutline />
                    </FlexContainer>
                  </ExercisesLink>
                </FlexContainer>
              </div>
                ))
              )
            : (
            <FlexContainer aj_c jc_c pd='2rem'>
              <FingerLoader />
            </FlexContainer>
              )}
        </GridContainer>
      </FlexContainer>
      <FloatContainer right="2rem" bottom="2rem" zIndex={200}>
         {isLoading && <Loader medium={true}/>}
      </FloatContainer>
    </Layout>
  )
}

const ExercisesLink = styled(Link)`
  background: ${({ theme: { disableColor } }) => disableColor};
  margin: 0 auto;
  font-weight: 600;
  padding: 1rem;
  color: ${({ theme: { bgColor } }) => bgColor};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};

  transform: translateY(-2rem);
`

const GridContainer = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;

  align-items: center;
  justify-content: center;
  /* background:red */
`
