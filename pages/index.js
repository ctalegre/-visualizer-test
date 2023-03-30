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
    console.log(materials)
    setMaterialsList(materials)
  }

  const [layoutImg, setLayoutImg] = useState('')

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <div style={{ position: 'relative' }}>
        <div>
          <img src={'https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554'} />
          {layoutImg && <img src={layoutImg}
            style={{ position: 'absolute', zIndex: '2', top: '0' }}
          />}

        </div>
        {pointsList.map(point => {
          return <div key={point._id}
            onClick={() => loadMaterials(point._id)}
            style={{
              zIndex: '3',
              position: 'absolute',
              top: `${point.coordY}%`,
              left: `${point.coordX}%`,
              transform: 'scaleX(-1)'
            }}>
              <img width={35} height={35} src={'https://cdn-icons-png.flaticon.com/512/890/890122.png'} />
            </div>
        })}

        <div
          style={{
            zIndex: '3',
            position: 'absolute',
            top: 0,
            right: 0
          }}>
          {materialsList.map((material, i) => {
            return <div key={i} onClick={() => setLayoutImg(material.layers[material.points[0]])}>
              <div>{material.name}</div>
              <div><img src={material.materialPreview} /></div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
