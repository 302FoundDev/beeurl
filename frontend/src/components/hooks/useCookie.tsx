import { useState, useEffect } from "react"

const getCookie = (cookieName: string) => {
  const galleta: string  = document.cookie

  return galleta
}

export const useCookie = (cookieName: string) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(()=> {
    const galleta = getCookie(cookieName)
  }, [cookieName])
}