// import PropTypes from 'prop-types'
const FINGERPRINT = 'https://cdn-icons-png.flaticon.com/512/890/890122.png'

function Point (props) {
  const { point, onClick } = props

  // TODO: func inbounds viewport
  if (point.coordX < 0 || point.coordY < 0) return ''

  // TODO: styles tailw
  return (
    <div
      onClick={onClick}
      style={{ left: `${point.coordX}%`, top: `${point.coordY}%` }}
      className={'absolute z-[4] hover:cursor-pointer hover:opacity-20'}
      >
        <div className='rounded-full p-0.5' style={{ background: 'rgb(112 112 112 / 68%)' }}>
          <div className='rounded-full border-[1px] border-white bg-inherit p-[4px] sm:border-[2px]'>
            <img
              style={{ filter: 'invert(1)', transform: 'scaleX(-1)', rotate: '18deg' }}
              className='h-5 w-5 p-[2px] sm:h-9 sm:w-9'
              src={FINGERPRINT} />
          </div>
        </div>
    </div>
  )
}

Point.propTypes = {}

export default Point
