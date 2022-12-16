import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../redux/auth/authSlice'
import Header from '../components/Header'

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  )

  useEffect(() => {
    if (isError) {
      alert(message)
    }

    if (user) {
      navigate('/')
    }

    return () => {
      dispatch(reset())
    }
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  return (
    <div style={{ backgroundColor: 'whitesmoke' }}>
      <Header />
      <div className="section">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <form
            onSubmit={onSubmit}
            action=""
            style={{
              width: '70%',
              marginTop: '30px',
              border: '2px solid #555',
              padding: '40px',
              height: '340px',
              borderRadius: '10px',
            }}
          >
            <div className="form-group">
              <span
                style={{
                  color: 'teal',
                  paddingTop: '30px',
                  paddingBottom: '40px',
                }}
              >
                Click Here to Login
              </span>
              <input
                type="email"
                onChange={onChange}
                value={email}
                name="email"
                className="form-control"
                placeholder="Enter Email"
                style={{
                  marginTop: '30px',
                }}
              />
              <input
                onChange={onChange}
                value={password}
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter Password"
                style={{
                  marginTop: '30px',
                }}
              />
              <button
                className="btn btn-primary"
                style={{
                  marginTop: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                type="submit"
              >
                Click Here to Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
