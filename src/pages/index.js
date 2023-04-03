
import BackgroundLayout from '../components/Layout/BackgroundLayout'
import SideBarMaterials from '../components/Material/SideBarMaterials'

import PointsAndLayouts from '../components/PointsAndLayouts'

export default function Home () {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-[#c9c1bb] py-2'>
      <div className='relative'>
        <BackgroundLayout />
        <PointsAndLayouts />
        <SideBarMaterials />
      </div>
    </div>
  )
}
