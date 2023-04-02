import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import BackgroundLayout from '../components/Layout/BackgroundLayout'

import PointsAndLayouts from '../components/PointsAndLayouts'
import { applyMaterialByPointId } from '../redux/reducers/materialsSlice'

export default function Home () {
  const dispatch = useDispatch()
  // const loadPoints = async () => {
  //   const pointsData = await api.points.getAll()
  //   setpointList(pointsData)
  // }

  const materialList = useSelector((state) => state.materialsSlice.materialList)
  const isLoadingMaterialList = useSelector((state) => state.pointsSlice.isLoading)
  // const error = useSelector((state) => state.pointsSlice.error)

  // const loadMaterials = async (pointId) => {
  //   const materials = await api.materials.getByPointId(pointId)
  //   console.log(materials)
  //   setmaterialList(materials)
  // }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <div className='relative'>
        <BackgroundLayout />
        <PointsAndLayouts />
        <div
          style={{
            zIndex: '5',
            position: 'absolute',
            top: 0,
            right: 0
          }}>
          {materialList.map((material, i) => {
            const pointId = material.points[0]
            const materialUrl = material.layers[pointId]
            return <div key={i}
            onClick={() => dispatch(applyMaterialByPointId({ pointId, image: materialUrl }))}
            >
              <div>{material.name}</div>
              <div><img src={material.materialPreview} /></div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
