import '../../styles/globals.css'

import { MaterialsProvider } from '../contexts/MaterialsContext'
import { PointsProvider } from '../contexts/PointsContext'
import { UiProvider } from '../contexts/UiContext'
import { RoomProvider } from '../contexts/RoomContext'

function MyApp ({ Component, pageProps }) {
  return (
    <RoomProvider>
      <UiProvider>
        <MaterialsProvider>
          <PointsProvider>
            <Component {...pageProps} />
          </PointsProvider>
        </MaterialsProvider>
      </UiProvider>
    </RoomProvider>
  )
}
export default MyApp
