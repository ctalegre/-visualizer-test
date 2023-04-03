import { useSelector } from 'react-redux'

import Head from '../components/Head'
import BackgroundLayout from '../components/Layout/BackgroundLayout'
import PointsAndLayouts from '../components/PointsAndLayouts'
import SideBarMaterials from '../components/Material/SideBarMaterials'
import ScreenLoading from '../components/ScreenLoading'

export default function Kitchen () {
  const title = useSelector((state) => state.roomSlice.description)
  return (<>
    <Head title={title} />
    <div className='flex min-h-screen flex-col items-center justify-center bg-[#c9c1bb] py-2'>
      <div data-test='container-images' className='relative'>
        <BackgroundLayout />
        <PointsAndLayouts />
        <SideBarMaterials />
        <ScreenLoading />
      </div>
    </div>
  </>)
}
