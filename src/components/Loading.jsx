import { useSelector } from 'react-redux'

function Loading (props) {
  const showingInView = useSelector((state) => state.uiSlice.showingInView)

  const finalClass = showingInView !== 'Loading' ? 'hidden' : ''
  return (
    <div
      data-test='loading'
      className={`${finalClass} fixed top-0 z-50 h-full w-full bg-[#0000004f]`}
    />
  )
}

Loading.propTypes = {}

export default Loading