'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/') return

    const scrollHeader = () => {
      const header = document.getElementById('header')
      if (header) {
        if (window.scrollY >= 50) {
          header.classList.add('scroll-header')
        } else {
          header.classList.remove('scroll-header')
        }
      }
      setScrollY(window.scrollY)
    }

    const scrollActive = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.pageYOffset

      sections.forEach((current) => {
        const sectionElement = current as HTMLElement
        const sectionHeight = sectionElement.offsetHeight
        const sectionTop = sectionElement.offsetTop - 58
        const sectionId = sectionElement.getAttribute('id')

        if (sectionId && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId)
          const sectionClass = document.querySelector(`.nav__menu a[href*="${sectionId}"]`)
          if (sectionClass) {
            document.querySelectorAll('.nav__link').forEach((link) => {
              link.classList.remove('active-link')
            })
            sectionClass.classList.add('active-link')
          }
        }
      })
    }

    window.addEventListener('scroll', scrollHeader)
    window.addEventListener('scroll', scrollActive)
    
    scrollHeader()
    scrollActive()

    return () => {
      window.removeEventListener('scroll', scrollHeader)
      window.removeEventListener('scroll', scrollActive)
    }
  }, [pathname])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (pathname !== '/') {
      return
    }
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header" id="header">
      <div className="header__border"></div>
      <nav className="nav container">
        <Link href="/" className="nav__logo">
          <img src="/images/coffee_images.jpeg" alt="Coffetto logo" />
          Coffetto
        </Link>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                href="/"
                className={`nav__link ${activeSection === 'home' && pathname === '/' ? 'active-link' : ''}`}
                onClick={(e) => pathname === '/' && handleLinkClick(e, 'home')}
              >
                <i className="ri-home-5-fill"></i>
                <span>Home</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="/"
                className={`nav__link ${activeSection === 'about' && pathname === '/' ? 'active-link' : ''}`}
                onClick={(e) => pathname === '/' && handleLinkClick(e, 'about')}
              >
                <i className="ri-award-fill"></i>
                <span>About</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="/"
                className={`nav__link ${activeSection === 'steps' && pathname === '/' ? 'active-link' : ''}`}
                onClick={(e) => pathname === '/' && handleLinkClick(e, 'steps')}
              >
                <i className="ri-compass-3-fill"></i>
                <span>Steps</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="/"
                className={`nav__link ${activeSection === 'testimonial' && pathname === '/' ? 'active-link' : ''}`}
                onClick={(e) => pathname === '/' && handleLinkClick(e, 'testimonial')}
              >
                <i className="ri-message-3-line"></i>
                <span>Testimonial</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="/login"
                className={`nav__link ${pathname === '/login' ? 'active-link' : ''}`}
              >
                <i className="ri-login-box-line"></i>
                <span>Login</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="/signup"
                className={`nav__link ${pathname === '/signup' ? 'active-link' : ''}`}
              >
                <i className="ri-user-add-line"></i>
                <span>Sign Up</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

