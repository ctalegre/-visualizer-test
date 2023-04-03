
// TODO: parametizable / add redux
// TODO: mover a materialAppliedMap
const BACKGROUND_URL = 'https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554'
function BackgroundLayout () {
  return (
    <img
      data-test='base-img'
      className='rounded-[25px]'
      src={BACKGROUND_URL}
    />
  )
}

export default BackgroundLayout
