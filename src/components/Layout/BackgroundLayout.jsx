import { useSelector } from 'react-redux'

function BackgroundLayout () {
  const backgrounImage = useSelector((state) => state.roomSlice.backgroundImage)

  return (
    <img
      data-test='base-img'
      className='rounded-[25px]'
      src={backgrounImage}
    />
  )
}

export default BackgroundLayout
