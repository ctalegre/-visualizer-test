import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getPointIdOfMaterial } from '../../utils/getPointIdOfMaterial'

function Material (props) {
  const { material, onClick } = props
  const materialAppliedMap = useSelector((state) => state.materialsSlice.materialAppliedMap)

  function isMaterialActive () {
    const pointId = getPointIdOfMaterial(material)
    const activeName = materialAppliedMap[pointId]?.name
    return activeName === material.name
  }

  const hiddenClass = !isMaterialActive() ? 'hidden' : ''
  return (
    <div
      onClick={onClick}
      className='my-3 flex rounded-md border-4 border-[#f5f2ef] bg-[#f5f2ef] shadow-md hover:cursor-pointer'
    >
      <div
        className={`${hiddenClass} flex w-36 items-center justify-center text-sm text-[#7a7676]`}
      >
        {material.name}
      </div>
      <div>
        <img
          className='h-[50px] w-[50px] sm:h-24 sm:w-24'
          src={material.materialPreview} />
      </div>
    </div>
  )
}

Material.propTypes = {
  material: PropTypes.object,
  onClick: PropTypes.func
}

export default Material
