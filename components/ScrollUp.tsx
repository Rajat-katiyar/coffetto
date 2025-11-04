'use client'

import { useEffect } from 'react'

export default function ScrollUp() {
  useEffect(() => {
    const scrollUp = () => {
      const scrollUpBtn = document.getElementById('scroll-up')
      if (scrollUpBtn) {
        if (window.scrollY >= 350) {
          scrollUpBtn.classList.add('show-scroll')
        } else {
          scrollUpBtn.classList.remove('show-scroll')
        }
      }
    }

    window.addEventListener('scroll', scrollUp)
    scrollUp()

    return () => {
      window.removeEventListener('scroll', scrollUp)
    }
  }, [])

  const handleScrollUp = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a href="#" className="scrollup" id="scroll-up" onClick={handleScrollUp}>
      <i className="ri-arrow-up-line"></i>
    </a>
  )
}

