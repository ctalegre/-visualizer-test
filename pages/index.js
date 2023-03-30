import { useEffect } from 'react'
import api from '../firebase/firestore'

export default function Home () {
  const loadPoints = async () => {
    const data = await api.points.getAll()
    console.log(data)
  }
  const loadMaterials = async () => {
    const data = await api.materials.getByPointId()
    console.log(data)
  }

  useEffect(() => {
    loadPoints()
  }, [])
  useEffect(() => {
    loadMaterials()
  }, [])

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <div>
        <img src={'https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554'} />
      </div>
      <div>

      </div>
    </div>
  )
}
