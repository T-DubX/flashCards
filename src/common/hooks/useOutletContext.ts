import { useOutletContext } from 'react-router-dom'

export type AppOutletContext = {
  isAuthenticated: boolean
}

export const useAppOutletContext = () => {
  return useOutletContext<AppOutletContext>()
}
