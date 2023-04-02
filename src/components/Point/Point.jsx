// import PropTypes from 'prop-types'
const FINGERPRINT = 'https://cdn-icons-png.flaticon.com/512/890/890122.png'

function Point (props) {
  const { point, onClick } = props
  if (point.coordX < 0 && point.coordY < 0) return ''

  return (
    <div
      onClick={onClick}
      style={{ left: `${point.coordX}%`, top: `${point.coordY}%` }}
      className={'absolute z-[4]'}
      >
        <div style={{ background: 'rgb(112 112 112 / 68%)', borderRadius: '100%', padding: 2 }}>
          <div style={{ background: 'rgb(112 112 112 / 68%)', borderRadius: '100%', padding: 4, border: '2px solid white' }}>
            <img style={{ filter: 'invert(1)', transform: 'scaleX(-1)', rotate: '18deg', padding: 2 }} className='h-9 w-9' src={FINGERPRINT} />
          </div>
        </div>
    </div>
  )
}

Point.propTypes = {}

export default Point
