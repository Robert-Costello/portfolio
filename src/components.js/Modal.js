import React, { useState, useRef, useEffect } from 'react'
import Resume from './Resume'
function Modal() {
  const inside = useRef()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e) => {
    if (inside.current.contains(e.target)) {
      return
    }
    setIsOpen(false)
  }

  useEffect(() => {
    const getClick = document.addEventListener('click', handleClick)

    return () => getClick()
  }, [])

  return (
    <div ref={inside}>
      <button onClick={() => setIsOpen(!isOpen)}>Resume</button>
      {isOpen ? (
        <div>
          <Resume />
        </div>
      ) : null}
    </div>
  )
}

export default Modal
