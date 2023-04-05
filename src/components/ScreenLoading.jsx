import { useContext } from 'react'
import UiContext from '../contexts/UiContext'

function ScreenLoading () {
  const { showingInView } = useContext(UiContext)

  const finalClass = showingInView !== 'Loading' ? 'hidden' : ''
  return (
    <div
      data-test='loading'
      className={`${finalClass} fixed top-0 z-50 h-full w-full bg-[#0000004f]`}
    />
  )
}

export default ScreenLoading
