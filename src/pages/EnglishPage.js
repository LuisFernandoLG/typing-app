import { Outlet } from 'react-router-dom'
import { BackPageButton } from '../components/ui/BackPageButton'
import { Layout } from '../layouts/Layout'

export const EnglishPage = () => {
  return (
    <Layout>
        <BackPageButton/>
      <Outlet />
    </Layout>
  )
}
