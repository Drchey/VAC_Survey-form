import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  // changeRole,
  createUser,
  deleteUser,
  fetchUsers,
  reset,
  // resetPassword,
} from '../redux/user/userSlice'

const UserScreen = () => {
  const { user } = useSelector((state) => state.auth)
  const { users, isError, message } = useSelector((state) => state.users)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const { name, email } = formData
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onChange = (e) => {
    // OnChange Type
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const userData = { name, email }
    dispatch(createUser(userData))
    dispatch(reset())
    setFormData({
      name: '',
      email: '',
    })
    window.location.reload(false)
  }

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    if (isError) {
      console.log(message)
    } else if (user.user.isDefaultPass) {
      navigate('/reset')
    } else {
      dispatch(fetchUsers())
      return () => {
        dispatch(reset())
      }
    }
  }, [user, navigate, isError, message, dispatch])

  const renderList = () => {
    return users.map((user) => {
      return (
        <tbody key={user._id}>
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            {/* <td>{user.}</td> */}
            <td
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              {/* <button
                className="btn btn-secondary"
                onClick={() => dispatch(changeRole(user._id))}
              >
                Switch Role
              </button> */}
              <button
                className="btn btn-secondary"
                onClick={() => dispatch(deleteUser(user._id))}
              >
                Delete User
              </button>
            </td>
          </tr>
        </tbody>
      )
    })
  }

  return (
    <div>
      <Header />
      <div className="section">
        <div className="row">
          <div className="col-5 card">
            <p>Create New User</p>
            <form onSubmit={onSubmit} style={{ padding: '20px' }}>
              <input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                className="form-control"
                placeholder="Enter Name"
              />
              <input
                style={{ marginTop: '20px' }}
                type="email"
                value={email}
                onChange={onChange}
                name="email"
                className="form-control"
                placeholder="Enter Email Address"
              />
              <div
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <button className="btn btn-primary" type="submit">
                  Create New User
                </button>
              </div>
            </form>
          </div>
          <div className="col-7 table-responsive">
            <p style={{ display: 'flex', alignItems: 'right' }}>
              {' '}
              Users({users && users.length})
            </p>
            {users && users.length > 0 ? (
              <table className="table">{renderList()}</table>
            ) : (
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td
                      colSpan="4"
                      style={{
                        color: 'red',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      No Results Found
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserScreen
