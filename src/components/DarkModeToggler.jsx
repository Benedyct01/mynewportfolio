import React, { useState, useEffect } from 'react'

const DarkModeToggling = () => {
  const [darkMode, setDarkMode] = useState(()=> {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      return savedTheme === 'dark'
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    
    <div className='mr-10 ml-10'>
      <button onClick={toggleDarkMode} className='top-3 lg:top-4 right-5 lg:right-6 w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-amber-500 text-neutral-950 shadow-lg hover:bg-amber-600 transition-colors z-10'>
        <i className={`bx bx-${darkMode ? 'sun' : 'moon'} text-lg lg:text-xl`}></i>
        </button>
        </div>
  )
}

export default DarkModeToggling