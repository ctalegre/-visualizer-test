import PropTypes from 'prop-types'
import { useContext } from 'react'
import UiContext from '../../contexts/UiContext'

function Layout (props) {
  const { setActiveShowPoints } = useContext(UiContext)
  const zIndexClass = (props.index && `z-[3.${props.index}]`) || 'z-0'
  return (
    <img
      data-test='layout'
      onClick={() => setActiveShowPoints()}
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
