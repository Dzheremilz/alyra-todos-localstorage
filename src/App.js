import Todos from "./components/Todos"
import { useState, useEffect } from "react"

function App() {
  const getTheme = () => {
    const localStorage = JSON.parse(window.localStorage.getItem("dark-mode"))
    return localStorage !== null ? localStorage : window.matchMedia?.('(prefers-color-scheme: dark)').matches
  }

  const [darkMode, setDarkMode] = useState(getTheme);

  useEffect(() => {
    window.localStorage.setItem("dark-mode", JSON.stringify(darkMode))
    if (darkMode) {
      document.body.classList.add('bg-dark')
    } else {
      document.body.removeAttribute('class')
    }
  }, [darkMode])

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        if (event.matches) {
          setDarkMode(true)
        } else {
          setDarkMode(false)
        }
      })
  }, [])

  return (
    <div className={`container my-4 ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <h1 className="text-center" id="test" >ToDos App</h1>
      <Todos darkMode={darkMode} />
      <div className="form-check form-switch mt-3 d-flex justify-content-end">
        <label className="form-check-label" htmlFor="activate"> Mode Sombre </label>
        <input className="form-check-input ms-2 mb-3" type="checkbox" id="activate" checked={darkMode} onChange={() => setDarkMode((darkMode) => !darkMode)} />
      </div>
    </div>
  )
}

export default App
