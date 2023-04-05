import PropTypes from 'prop-types'
import { useContext } from 'react'
import UiContext from '../../contexts/UiContext'

const FINGERPRINT = 'https://cdn-icons-png.flaticon.com/512/890/890122.png'

function Point (props) {
  const { point, onClick } = props
  const { showingInView } = useContext(UiContext)

  if (point.coordX < 0 || point.coordY < 0) return ''

  const finalClass = showingInView !== 'Points' ? 'hidden' : ''

  return (
    <div
      data-test='point'
      onClick={onClick}
      style={{ left: `${point.coordX}%`, top: `${point.coordY}%` }}
      className={`${finalClass} absolute z-[4] hover:cursor-pointer hover:opacity-20`}
      >
        <div className='rounded-full bg-[#767575ad] p-0.5'>
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

Point.propTypes = {
  point: PropTypes.object,
  onClick: PropTypes.func
}

export default Point
