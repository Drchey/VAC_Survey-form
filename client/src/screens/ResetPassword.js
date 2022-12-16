import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { changePassword, logout, reset } from '../redux/auth/authSlice'

const ResetPassword = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)
  const { isError, message } = useSelector((state) => state.posts)
  const [formData, setFormData] = useState({
    password: '',
    password_confirm: '',
  })
  const onChange = (e) => {
    // OnChange Type
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    } else if (!user.user.isDefaultPass) {
      navigate('/')
    }

    return () => {
      console.log(user.user.isDefaultPass)
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== password_confirm) {
      alert('Password Does not Match')
    } else {
      const userData = {
        password,
      }
      dispatch(changePassword(userData))
      console.log('Password:', userData)
      alert(`Password Changed`)
      dispatch(logout())
    }
  }
  const { password, password_confirm } = formData

  return (
    <div>
      <Header />
      <div className="row mt-4">
        <div className="container card" style={{ padding: '30px' }}>
          <label style={{ color: 'teal', marginTop: '23', fontWeight: 'bold' }}>
            Change Password
          </label>

          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="Enter New Password"
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password_confirm"
                name="password_confirm"
                value={password_confirm}
                placeholder="Confirm Password"
                onChange={onChange}
              />
            </div>

            <button className="btn btn-primary" type="submit">
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
