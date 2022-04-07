import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useFetch } from '../hooks/useFetch'
import { RankingUser } from '../components/stadistics/RankingUser'
import { endpoints } from '../components/signIn/api'
import { toast } from 'react-toastify'
import { FaTrophy } from 'react-icons/fa'
import { getArrayBySize } from '../helpers/getArrayBySize'

const Throphy1 = () => {
  const style = { color: '#FFD06C', fontSize: '2.5rem' }
  return <FaTrophy style={style} />
}

const Throphy2 = () => {
  const style = { color: '#808080', fontSize: '2.5rem' }
  return <FaTrophy style={style} />
}

const Throphy3 = () => {
  const style = { color: '#DC8C44', fontSize: '2.5rem' }
  return <FaTrophy style={style} />
}

const skeletons = getArrayBySize({ size: 12 })

export const RankingPage = () => {
  const [rankingUsers, setRankingUsers] = useState([])

  const { fetchData, fetchErrors, loading, data } = useFetch()

  useEffect(() => {
    fetchData(endpoints.ranking)
  }, [])

  useEffect(() => {
    if (data) {
      setRankingUsers(data.data)
    }
  }, [data])

  useEffect(() => {
    if (fetchErrors) {
      toast.error('Algo salió mal :(')
    }
  }, [fetchErrors])

  return (
    <RankingContainer>
      <Title>Ranking</Title>
      <UsersWrapper>
        {loading
          ? skeletons.map((_, i) => <RankingUser key={`${i}-ru`}/>)
          : rankingUsers.map(({ id, name, lastName, totalScore }, index) => (
              <RankingUser
                key={id}
                position={index + 1}
                name={name}
                score={totalScore}
              >
                {index === 0 ? <Throphy1 /> : null}
                {index === 1 ? <Throphy2 /> : null}
                {index === 2 ? <Throphy3 /> : null}
              </RankingUser>
          ))}
      </UsersWrapper>
    </RankingContainer>
  )
}

const UsersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  padding: 1rem;
  gap: 2rem;
`

const RankingContainer = styled.div`
  flex-grow: 1;

  .first {
    color: green;
  }

  .second {
    color: red;
  }

  .thrith {
    color: yellow;
  }
`
const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme: { fontColor } }) => fontColor};
`
