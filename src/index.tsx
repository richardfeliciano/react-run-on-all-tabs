import React, { useEffect } from "react"

type Props = {
  children?: JSX.Element | JSX.Element[]
  onChange: (storage: StringDictionary) => void
}

interface StringDictionary {
  [key: string]: string
}

const RunOnAllTabsProvider = ({ children, onChange }: Props) => {
  const allStorage = () => {
    const obj: StringDictionary = {}
    Object.keys(localStorage).forEach((key: string) => {
      const value = localStorage.getItem(key)
      if (typeof value === "string" && value) {
        obj[key] = value
      }
    })
    return obj
  }

  useEffect(() => {
    const handleStorageChange = () => onChange(allStorage())

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  return <>{children}</>
}

export default RunOnAllTabsProvider
