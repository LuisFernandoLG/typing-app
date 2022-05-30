import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { GridContainer } from '../components/GridContainer'
import { ExerciseItem } from '../components/homepage/ExerciseItem'
import { FingerLoader } from '../components/loaders/FingerLoader'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { BackPageButton } from '../components/ui/BackPageButton'
import { groupArrayOfObjects } from '../helpers/groupArrayOfObjects'
import { useSession } from '../hooks/useSession'
import { Layout } from '../layouts/Layout'
import { routesV3 } from '../routes'
import api from '../services/api'

export const RiceHomePage = () => {
  const { user } = useSession()
  // eslint-disable-next-line no-unused-vars
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    api().getRicesAsMarked({ userId: user.id }).then((data) => {
      const groupedByDifficulty = groupArrayOfObjects({ list: data.data, key: 'difficulty' })
      const exercisesArray = Object.entries(groupedByDifficulty)
      console.log({ exercisesArray })
      setExercises(exercisesArray)
    }).catch(() => {
      toast.error('Oops! algo salió mal')
    })
  }, [])

  return <Layout>
<BackPageButton backRoute={routesV3.MENU_PAGE.route} />
{exercises.length === 0
  ? (
 <FlexContainer jc_c ai_c>
   <FingerLoader />
 </FlexContainer>
    )
  : (
      exercises.map((item, i) => (
   <Layout key={`${i}-meca`} mg='2rem 0'>
     <Title>{item[0]}</Title>
     <GridContainer
       autoFill={true}
       minMax='120px, 300px'
       gap='1rem'
       pd='1.5rem 0'>
       {item[1].map(
         ({ id, title, description, difficulty, difficultyId, isDone }) => (
           <Link
             key={`${id}-rice`}
             to={`${routesV3.MECA_PAGE.subpages.EXERCISE.route}/${id}`}>
             <RiceCard>
             <ExerciseItem
                    id={id}
                    title={title}
                    content={description}
                    category="Carrera"
                    difficulty={difficulty}
                    isCompleted={isDone}
                  />
             </RiceCard>
           </Link>
         )
       )}
     </GridContainer>
   </Layout>
      ))
    )}
</Layout>
}

const RiceCard = styled.div``

const Title = styled.h3`
color: ${({ theme: { fontColor } }) => fontColor};
font-size: 2rem;
width: 6.25rem;
`
