import React from 'react'
import { GrandChildComponent } from './GrandChildComponent'

export const ParentCompoenent = () => {
  return (
    <div style={{ border: '2px dashed gray', padding: '20px', marginTop: '20px' }}>
      <h2>Parent Component</h2>
      <p>I am just a pass-through. No props here!</p>
      <GrandChildComponent />
    </div>
  )
}
