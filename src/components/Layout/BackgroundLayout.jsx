import { useContext } from 'react'
import RoomContext from '../../contexts/RoomContext'

function BackgroundLayout () {
  const { backgroundImage } = useContext(RoomContext)

  return (
    <img
      data-test='base-img'
      className='rounded-[25px]'
      src={backgroundImage}
    />
  )
}

export default BackgroundLayout
