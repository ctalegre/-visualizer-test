import { useDispatch, useSelector } from 'react-redux'
import { applyMaterialByPointId } from '../../redux/reducers/materialsSlice'
import Material from './Material'
import ArrowIcon from '../../assets/ArrowIcon'
import { setActiveShowBackdrop, setActiveShowMaterials } from '../../redux/reducers/uiSlice'
import { sleep } from '../../utils/sleep'

function SideBarMaterials (props) {
  const dispatch = useDispatch()

  const materialList = useSelector((state) => state.materialsSlice.materialList)
  // const isLoadingMaterialList = useSelector((state) => state.pointsSlice.isLoading)

  async function applyMaterial (material) {
    const pointId = material.points[0]
    const materialUrl = material.layers[pointId]
    const name = material.name

    dispatch(applyMaterialByPointId({ pointId, name, image: materialUrl }))
    await applyLoadingApply()
  }

  async function applyLoadingApply () {
    dispatch(setActiveShowBackdrop())
    await sleep(150)
    dispatch(setActiveShowMaterials())
  }

  const showingInView = useSelector((state) => state.uiSlice.showingInView)
  const finalClass = showingInView !== 'Materials' ? 'hidden' : ''

  return (
    <div className={`${finalClass} fixed right-[20px] top-[0px] z-[5] flex h-full items-center`}>
      <div className='flex flex-col items-end'>
        <div className='mx-[12px]'>
          <ArrowIcon direction='up' />
        </div>
        <div className='my-[25px] flex h-[65vh] flex-col items-end'>
          {materialList.map((material, i) => <Material
            key={i}
            onClick={() => applyMaterial(material)}
            material={material}
            />)}
        </div>
        <div className='mx-[12px]'>
          <ArrowIcon />
        </div>
      </div>
    </div>
  )
}

export default SideBarMaterials
