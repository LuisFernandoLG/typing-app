/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { FingerLoader } from '../components/loaders/FingerLoader'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { Layout } from '../layouts/Layout'
import { routesV3 } from '../routes'
import api from '../services/api'

export const EnglishAdminPage = () => {
  const [courses, setCourses] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
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
  }, [])

  return (
    <Layout>
      <FlexContainer fd_c gap="1rem">

      {courses
        ? (
            courses.map(({ courseId, title, description }) => (
            <CourseCard key={courseId} to={`${routesV3.ENGLISH_PAGE.subRoutes.ENGLISH_ADMIN_PAGE.subRoutes.ENGLISH_EXERCISE_ADMIN_PAGE.route}/${courseId}`}>
            <h3>{title}</h3>
            <p>{description}</p>
          </CourseCard>
            ))
          )
        : (
              <FingerLoader />
          )}
              </FlexContainer>
    </Layout>
  )
}

const CourseCard = styled(Link)`
  padding: 2rem;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { accentColor } }) => accentColor};
  cursor:pointer;
  transition: background-image 300ms ease;

  &:hover {
    background-image: ${({ theme: { secondaryGradient } }) => secondaryGradient};
  }
`
