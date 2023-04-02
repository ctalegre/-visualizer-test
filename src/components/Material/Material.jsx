import { useSelector } from 'react-redux'

function Material (props) {
  const { material, onClick } = props

  const materialAppliedMap = useSelector((state) => state.materialsSlice.materialAppliedMap)
  const pointId = material?.points[0]

  const activeName = materialAppliedMap[pointId]?.name
  const hiddenClass = activeName === material.name ? '' : 'hidden'

  return (
    <div onClick={onClick} className='my-3 flex rounded-md border-4 border-[#f5f2ef] bg-[#f5f2ef] shadow-md'>
      <div className={`${hiddenClass} flex w-36 items-center justify-center text-sm text-[#7a7676]`}>{material.name}</div>
      <div className=''><img className='h-24 w-24' src={material.materialPreview} /></div>
    </div>
  )
}

Material.propTypes = {}

export default Material
