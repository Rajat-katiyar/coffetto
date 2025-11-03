import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    // Change background header on scroll
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

    // Show scroll up button
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

    // Active section link highlighting
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
            // Remove active from all
            document.querySelectorAll('.nav__link').forEach((link) => {
              link.classList.remove('active-link')
            })
            // Add active to current
            sectionClass.classList.add('active-link')
          }
        }
      })
    }

    // ScrollReveal animations
    const initScrollReveal = () => {
      if (typeof window !== 'undefined' && (window as any).ScrollReveal) {
        const sr = (window as any).ScrollReveal({
          origin: 'top',
          distance: '60px',
          duration: 2500,
          delay: 400,
        })

        sr.reveal(`.home__data, .products__data, .steps__content, .footer__container`)
        sr.reveal(`.home__img`, { origin: 'bottom' })
        sr.reveal(`.products__card`, { interval: 100 })
        sr.reveal(`.about__img, .testimonial__img`, { origin: 'right' })
        sr.reveal(`.about__data, .testimonial__data`, { origin: 'left' })
      }
    }

    window.addEventListener('scroll', scrollHeader)
    window.addEventListener('scroll', scrollUp)
    window.addEventListener('scroll', scrollActive)
    
    // Initialize on mount
    scrollHeader()
    scrollUp()
    scrollActive()
    
    // Initialize ScrollReveal after a short delay to ensure it's loaded
    setTimeout(initScrollReveal, 100)

    return () => {
      window.removeEventListener('scroll', scrollHeader)
      window.removeEventListener('scroll', scrollUp)
      window.removeEventListener('scroll', scrollActive)
    }
  }, [])

  const handleScrollUp = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Header */}
      <header className="header" id="header">
        <div className="header__border"></div>
        <nav className="nav container">
          <a href="#" className="nav__logo" onClick={(e) => handleLinkClick(e, 'home')}>
            <img src="/images/logo.png" alt="logo" />
            Coffetto
          </a>
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#home"
                  className={`nav__link ${activeSection === 'home' ? 'active-link' : ''}`}
                  onClick={(e) => handleLinkClick(e, 'home')}
                >
                  <i className="ri-home-5-fill"></i>
                  <span>Home</span>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  className={`nav__link ${activeSection === 'about' ? 'active-link' : ''}`}
                  onClick={(e) => handleLinkClick(e, 'about')}
                >
                  <i className="ri-award-fill"></i>
                  <span>About</span>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#steps"
                  className={`nav__link ${activeSection === 'steps' ? 'active-link' : ''}`}
                  onClick={(e) => handleLinkClick(e, 'steps')}
                >
                  <i className="ri-compass-3-fill"></i>
                  <span>Steps</span>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#testimonial"
                  className={`nav__link ${activeSection === 'testimonial' ? 'active-link' : ''}`}
                  onClick={(e) => handleLinkClick(e, 'testimonial')}
                >
                  <i className="ri-message-3-line"></i>
                  <span>Testimonial</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="main">
        {/* Home Section */}
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__data">
              <h3 className="home__subtitle">EXCEPTIONAL QUALITY</h3>
              <h1 className="home__title">
                It's time for a <br />
                good coffee
                <img src="/images/home-coffee-title.png" alt="" />
              </h1>
              <p className="home__discription">
                Each select coffee bean reflects our commitment to Peruvian coffee growns, who bring
                the best select coffee to your table.
              </p>
              <a href="#" className="button" onClick={(e) => e.preventDefault()}>
                Get Started <i className="ri-arrow-right-s-line"></i>
              </a>
            </div>
            <img src="/images/home-coffee.png" alt="" className="home__img" />
          </div>
        </section>

        {/* Products Section */}
        <section className="products">
          <div className="products__bg section">
            <div className="products__container container grid">
              <div className="products__data">
                <a href="#" className="products__button" onClick={(e) => e.preventDefault()}>
                  Scroll Down <i className="ri-arrow-down-s-line"></i>
                </a>
                <p className="products__discription">
                  We strive to form deep partnerships with farmars from all over the world to create
                  perspective together built on trust and respact.
                </p>
              </div>

              <div className="products__contant">
                <article className="products__card">
                  <img src="/images/product-coffee-1.png" alt="" className="producds__img" />
                  <h3 className="products__name">Classic Coffee</h3>
                  <span className="produts__price">$17.90</span>
                </article>

                <article className="products__card">
                  <img src="/images/product-coffee-2.png" alt="" className="producds__img" />
                  <h3 className="products__name">Black Coffee</h3>
                  <span className="produts__price">$24.90</span>
                </article>

                <article className="products__card">
                  <img src="/images/product-coffee-3.png" alt="" className="producds__img" />
                  <h3 className="products__name">Strong Coffee</h3>
                  <span className="produts__price">$32.90</span>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <div className="about__bg section">
            <div className="about__container container grid">
              <div className="about__data">
                <h2 className="section__title">Our History</h2>
                <p className="about__description">
                  We make and frow the best coffee in Peru, accompanying families since 1930, with
                  profecctional workers who harvest, collect and select the coffee with quality work,
                  thus providing exquisite coffee to enjoy together as a family.
                </p>
              </div>
              <img
                src="/images/about-coffee.png"
                alt=""
                className="about__img"
                width="300"
              />
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="steps" id="steps">
          <div className="steps__bg section">
            <h2 className="section__title">Steps of manufacturing our products</h2>

            <div className="steps__container container grid">
              <img src="/images/coffee-beans-bg.png" alt="" className="steps__bg-img" />
              <div className="steps__content">
                <img src="/images/steps-curve-line.svg" alt="" className="steps__border" />
                <div className="steps__card">
                  <div className="steps__circle">
                    <div className="steps__subcircle">01</div>
                    <img src="/images/steps-green-coffee.png" alt="" className="steps__img" />
                  </div>
                  <p className="steps__description">
                    Harvest occurs annually when the coffee beans reach maturity and are collected
                    for processing.
                  </p>
                </div>

                <div className="steps__card steps__card-move">
                  <div className="steps__circle">
                    <div className="steps__subcircle">02</div>
                    <img src="/images/steps-coffee-beans.png" alt="" className="steps__img" />
                  </div>
                  <p className="steps__description">
                    The beans are dried using a wet or dry technique, depending ont he taste we want
                    to obtain.
                  </p>
                </div>

                <div className="steps__card">
                  <div className="steps__circle">
                    <div className="steps__subcircle">03</div>
                    <img src="/images/steps-ground-coffee.png" alt="" className="steps__img" />
                  </div>
                  <p className="steps__description">
                    The coffee is roasted and acquires its flavor by processing the grain in ovens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="testimonial" id="testimonial">
          <div className="testimonial__bg section">
            <div className="testimonial__container container grid">
              <div className="testimonial__data">
                <h2 className="section__title">
                  Coffee is the best drink in the morning, it keeps you focused.
                </h2>
                <span className="testimonial__name">Jhon Doe</span>
              </div>
              <img src="/images/testimonial-coffee.png" alt="" className="testimonial__img" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__bg">
          <img src="/images/coffee-beans-bg.png" alt="" className="footer__bg-img" />

          <div className="footer__container container grid">
            <div className="footer__data grid">
              <div>
                <a href="#" className="footer__logo" onClick={(e) => e.preventDefault()}>
                  <img src="/images/logo.png" alt="logo" />
                  Coffetto
                </a>
                <h3 className="footer__title">Sign up our newsletter</h3>
              </div>
              <form
                className="footer__form grid"
                onSubmit={(e) => {
                  e.preventDefault()
                  // Handle form submission
                }}
              >
                <input
                  type="email"
                  placeholder="Enter e-mail address"
                  className="footer__input"
                />
                <button className="button footer__button" type="submit">
                  Subscribe <i className="ri-arrow-right-s-line"></i>
                </button>
                <p className="footer__description">
                  We care about your data. Read Our{' '}
                  <a href="#" className="footer__privacy" onClick={(e) => e.preventDefault()}>
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>

            <div className="footer__content grid">
              <div className="footer__social">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                >
                  <i className="ri-instagram-fill"></i>
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                >
                  <i className="ri-twitter-fill"></i>
                </a>
              </div>
              <span className="footer__copy">&#169; Copyright Bedimcode. All rights resevred</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll Up Button */}
      <a href="#" className="scrollup" id="scroll-up" onClick={handleScrollUp}>
        <i className="ri-arrow-up-line"></i>
      </a>
    </>
  )
}

export default App

