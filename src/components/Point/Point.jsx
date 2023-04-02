// import PropTypes from 'prop-types'
const FINGERPRINT = 'https://cdn-icons-png.flaticon.com/512/890/890122.png'

function Point (props) {
  const { point, onClick } = props
  if (point.coordX < 0 && point.coordY < 0) return ''

  return (
    <div
      onClick={onClick}
      style={{ left: `${point.coordX}%`, top: `${point.coordY}%` }}
      className={'absolute z-[4] translate-x-[-1]'}
      >
      <img className='h-9 w-9' src={FINGERPRINT} />
    </div>
  )
}

Point.propTypes = {}

export default Point
