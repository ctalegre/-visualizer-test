import { useDispatch, useSelector } from 'react-redux'
import { applyMaterialByPointId } from '../../redux/reducers/materialsSlice'
import Material from './Material'

function SideBarMaterials (props) {
  const dispatch = useDispatch()

  const materialList = useSelector((state) => state.materialsSlice.materialList)
  // const isLoadingMaterialList = useSelector((state) => state.pointsSlice.isLoading)

  function applyMaterial (material) {
    const pointId = material.points[0]
    const materialUrl = material.layers[pointId]
    const name = material.name

    // TODO: backdrop
    dispatch(applyMaterialByPointId({ pointId, name, image: materialUrl }))
  }

  return (
    <div className='fixed right-[20px] top-[150px] z-[5] flex flex-col items-end'>
      {materialList.map((material, i) => <Material
        key={i}
        onClick={() => applyMaterial(material)}
        material={material}
      />)}
    </div>
  )
}

export default SideBarMaterials
