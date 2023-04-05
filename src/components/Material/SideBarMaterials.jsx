import { useContext } from 'react'

import MaterialsContext from '../../contexts/MaterialsContext'
import UiContext from '../../contexts/UiContext'

import Material from './Material'
import ArrowIcon from '../../assets/ArrowIcon'

import { sleep } from '../../utils/sleep'
import { getPointIdByMaterial } from '../../utils/getPointIdByMaterial'

function SideBarMaterials () {
  const { materialList, applyMaterialByPointId } = useContext(MaterialsContext)
  const { setActiveShowBackdrop, setActiveShowMaterials, showingInView } = useContext(UiContext)

  async function applyMaterial (material) {
    const pointId = getPointIdByMaterial(material)
    const materialUrl = material.layers[pointId]
    const name = material.name

    applyMaterialByPointId({ pointId, name, image: materialUrl })
    await applyLoadingApply()
  }

  async function applyLoadingApply () {
    setActiveShowBackdrop()
    await sleep(150)
    setActiveShowMaterials()
  }

  const finalClass = showingInView !== 'Materials' ? 'hidden' : ''

  return (
    <div data-test='sidebar' className={`${finalClass} fixed right-[20px] top-[0px] z-[5] flex h-full items-center`}>
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
