import React from 'react'
import { useContext } from 'react'
import { themecontext } from '../ThemeContext'

export const GrandChildComponent = () => {
    const {theme,toggleTheme} = useContext(themecontext)
  return (
    <div style={{ border: '2px solid #007bff', padding: '20px', marginTop: '20px' }}>
      <h3>Grandchild Component</h3>
      <p>Current theme status: <b>{theme}</b></p>
      <button onClick={toggleTheme}>Switch Mode</button>
    </div>
  )
}
