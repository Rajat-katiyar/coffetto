'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      // In a real app, you would make an API call here
      console.log('Login attempt:', formData)
      // For demo purposes, redirect to home
      router.push('/')
      setLoading(false)
    }, 1000)
  }

  return (
    <>
      <Header />
      <div className="auth__container">
        <div className="auth__card">
          <h1 className="auth__title">Login</h1>
          {error && <div className="auth__error">{error}</div>}
          <form className="auth__form" onSubmit={handleSubmit}>
            <div className="auth__input-group">
              <label htmlFor="email" className="auth__label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="auth__input"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="auth__input-group">
              <label htmlFor="password" className="auth__label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="auth__input"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="button auth__button" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'} <i className="ri-arrow-right-s-line"></i>
            </button>
          </form>
          <div className="auth__footer">
            Don't have an account?{' '}
            <Link href="/signup" className="auth__link">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

