import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { setActiveShowPoints } from '../../redux/reducers/uiSlice'

function Layout (props) {
  const dispatch = useDispatch()

  const zIndexClass = (props.index && `z-[3.${props.index}]`) || 'z-0'
  return (
    <img
      data-test='layout'
      onClick={() => dispatch(setActiveShowPoints())}
      src={props.src}
      className={`absolute left-0 top-0 h-full w-full rounded-[25px] ${zIndexClass}`}
    />
  )
}

Layout.propTypes = {
  src: PropTypes.string,
  index: PropTypes.number
}

export default Layout
