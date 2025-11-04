'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError('')
    setSuccess('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    // Basic validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      setLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      // In a real app, you would make an API call here
      console.log('Signup attempt:', formData)
      setSuccess('Account created successfully! Redirecting...')
      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push('/login')
      }, 2000)
      setLoading(false)
    }, 1000)
  }

  return (
    <>
      <Header />
      <div className="auth__container">
        <div className="auth__card">
          <h1 className="auth__title">Sign Up</h1>
          {error && <div className="auth__error">{error}</div>}
          {success && <div className="auth__success">{success}</div>}
          <form className="auth__form" onSubmit={handleSubmit}>
            <div className="auth__input-group">
              <label htmlFor="name" className="auth__label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="auth__input"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
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
            <div className="auth__input-group">
              <label htmlFor="confirmPassword" className="auth__label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="auth__input"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="button auth__button" disabled={loading}>
              {loading ? 'Creating account...' : 'Sign Up'} <i className="ri-arrow-right-s-line"></i>
            </button>
          </form>
          <div className="auth__footer">
            Already have an account?{' '}
            <Link href="/login" className="auth__link">
              Login
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

