import { useEffect, useState } from 'react'
import api from '../firebase/firestore'

export default function Home () {
  const [pointsList, setPointsList] = useState([])
  const loadPoints = async () => {
    const pointsData = await api.points.getAll()
    setPointsList(pointsData)
  }

  useEffect(() => {
    loadPoints()
  }, [])

  const [materialsList, setMaterialsList] = useState([])
  const loadMaterials = async (pointId) => {
    const materials = await api.materials.getByPointId(pointId)
    setMaterialsList(materials)
  }

  const [layoutImgMap, setLayoutImgMap] = useState({})

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <div style={{ position: 'relative' }}>
        <img src={'https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554'} />
        {pointsList.map((point, i) => {
          return <div key={point._id}>
          {layoutImgMap[point._id] && <img src={layoutImgMap[point._id]}
            style={{ position: 'absolute', zIndex: `3.${i}`, top: '0' }}
          />}
          <div
            onClick={() => loadMaterials(point._id)}
            style={{
              zIndex: '4',
              position: 'absolute',
              top: `${point.coordY}%`,
              left: `${point.coordX}%`,
              transform: 'scaleX(-1)'
            }}>
              <img width={35} height={35} src={'https://cdn-icons-png.flaticon.com/512/890/890122.png'} />
            </div>
          </div>
        })}

        <div
          style={{
            zIndex: '5',
            position: 'absolute',
            top: 0,
            right: 0
          }}>
          {materialsList.map((material, i) => {
            const pointId = material.points[0]
            const materialUrl = material.layers[pointId]
            return <div key={i} onClick={() => setLayoutImgMap(prev => ({ ...prev, [pointId]: materialUrl }))}>
              <div>{material.name}</div>
              <div><img src={material.materialPreview} /></div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
