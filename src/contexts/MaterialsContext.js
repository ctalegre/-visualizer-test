import { createContext, useState } from 'react'
import firebaseApi from '../firebase/firestore'

const MaterialsContext = createContext()

export const MaterialsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [materialList, setMaterialList] = useState([])
  const [materialAppliedMap, setMaterialAppliedMap] = useState({})

  const getMaterialsFromApi = async (pointId) => {
    setIsLoading(true)
    setError(null)

    try {
      const currentMaterialList = await firebaseApi.materials.getByPointId(pointId)
      setMaterialList(currentMaterialList)
      setIsLoading(false)
    } catch (error) {
      setError(error.message)
      setIsLoading(false)
    }
  }

  const applyMaterialByPointId = (material) => {
    setMaterialAppliedMap(prevMap => ({ ...prevMap, [material.pointId]: material }))
  }

  const contextValue = {
    isLoading,
    error,
    materialList,
    materialAppliedMap,
    applyMaterialByPointId,
    getMaterialsFromApi
  }

  return (
    <MaterialsContext.Provider value={contextValue}>
      {children}
    </MaterialsContext.Provider>
  )
}

export default MaterialsContext
