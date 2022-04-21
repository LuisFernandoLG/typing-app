import { MecaExercise } from '../components/MecaExercise'
import { BackPageButton } from '../components/ui/BackPageButton'
import { routesV3 } from '../routes'

export const MecaPage = () => {
  return (
    <>
      <BackPageButton backRoute={routesV3.MENU_PAGE.route} />
      <MecaExercise/>
    </>
  )
}
