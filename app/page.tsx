'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollUp from '@/components/ScrollUp'

export default function Home() {
  useEffect(() => {
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

    // Initialize ScrollReveal after a short delay to ensure it's loaded
    setTimeout(initScrollReveal, 100)
  }, [])

  return (
    <>
      <Header />

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
                width={300}
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

      <Footer />
      <ScrollUp />
    </>
  )
}

