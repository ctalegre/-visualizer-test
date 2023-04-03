import Head from '../components/Head'
import BackgroundLayout from '../components/Layout/BackgroundLayout'
import PointsAndLayouts from '../components/PointsAndLayouts'
import SideBarMaterials from '../components/Material/SideBarMaterials'
import Loading from '../components/Loading'

export default function Home () {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-[#c9c1bb] py-2'>
      <div className='relative'>
        <Head />
        <BackgroundLayout />
        <PointsAndLayouts />
        <SideBarMaterials />
        <Loading />
      </div>
    </div>
  )
}
