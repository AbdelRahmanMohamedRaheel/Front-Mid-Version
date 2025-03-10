import React, { useEffect } from 'react'

export default function About() {
  useEffect(() => {
        document.title='About Us'
      }, [])
      
  return (
    <div>About</div>
  )
}
