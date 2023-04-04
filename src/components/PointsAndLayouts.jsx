import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPointsFromApi } from '../redux/reducers/pointsSlice'
import { getMaterialsFromApi } from '../redux/reducers/materialsSlice'
import { setActiveShowMaterials } from '../redux/reducers/uiSlice'

import Layout from './Layout/Layout'
import Point from './Point/Point'

function PointsAndLayouts () {
  const dispatch = useDispatch()

  const pointList = useSelector((state) => state.pointsSlice.pointList)

  useEffect(() => {
    dispatch(getPointsFromApi())
  }, [dispatch])

  const loadMaterials = async (pointId) => {
    dispatch(getMaterialsFromApi(pointId))
    dispatch(setActiveShowMaterials())
  }

  const materialAppliedMap = useSelector((state) => state.materialsSlice.materialAppliedMap)
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
