import { Outlet } from 'react-router-dom'
// import { BackPageButton } from '../components/ui/BackPageButton'
import { Layout } from '../layouts/Layout'

const EnglishPage = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default EnglishPage
