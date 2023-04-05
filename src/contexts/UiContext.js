import { createContext, useState } from 'react'

const UiContext = createContext()

export const UiProvider = ({ children }) => {
  const [showingInView, setShowingInView] = useState('Points')

  const setActiveShowPoints = () => {
    setShowingInView('Points')
  }

  const setActiveShowMaterials = () => {
    setShowingInView('Materials')
  }

  const setActiveShowBackdrop = () => {
    setShowingInView('Loading')
  }

  return (
    <UiContext.Provider
      value={{
        showingInView,
        setActiveShowPoints,
        setActiveShowMaterials,
        setActiveShowBackdrop,
      }}
    >
      {children}
    </UiContext.Provider>
  )
}

export default UiContext
