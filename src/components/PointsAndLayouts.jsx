import { useEffect, useContext } from 'react'

import PointsContext from '../contexts/PointsContext'
import MaterialsContext from '../contexts/MaterialsContext'
import UiContext from '../contexts/UiContext'

import Layout from './Layout/Layout'
import Point from './Point/Point'

function PointsAndLayouts () {
  const { pointList, getPointsFromApi } = useContext(PointsContext)
  const { getMaterialsFromApi, materialAppliedMap } = useContext(MaterialsContext)
  const { setActiveShowMaterials } = useContext(UiContext)

  useEffect(() => {
    getPointsFromApi()
  }, [getPointsFromApi])

  const loadMaterials = async (pointId) => {
    getMaterialsFromApi(pointId)
    setActiveShowMaterials()
  }

  return pointList.map((point, i) => {
    const selectedMaterial = materialAppliedMap[point._id]
    return (
      <>
        <Layout key={point._id} src={selectedMaterial?.image} index={i} />
        <Point point={point} onClick={() => loadMaterials(point._id)} />
      </>
    )
  })
}

export default PointsAndLayouts
