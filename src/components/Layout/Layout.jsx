import PropTypes from 'prop-types'

function Layout (props) {
  if (!props.src) return ''

  const zIndexClass = (props.index && `z-[3.${props.index}]`) || 'z-0'
  return (
    <img
      src={props.src}
      className={`absolute left-0 top-0 h-full w-full ${zIndexClass}`}
    />
  )
}

Layout.propTypes = {
  src: PropTypes.string,
  index: PropTypes.number
}

export default Layout
