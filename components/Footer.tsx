'use client'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <img src="/images/coffee-beans-bg.png" alt="" className="footer__bg-img" />

        <div className="footer__container container grid">
          <div className="footer__data grid">
            <div>
              <a href="#" className="footer__logo">
                <img src="/images/coffee_images.jpeg" alt="Coffetto logo" />
                Coffetto
              </a>
              <h3 className="footer__title">Sign up our newsletter</h3>
            </div>
            <form
              className="footer__form grid"
              onSubmit={(e) => {
                e.preventDefault()
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
                <a href="#" className="footer__privacy">
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
  )
}

