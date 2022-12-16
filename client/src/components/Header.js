import { logout, reset } from '../redux/auth/authSlice'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <div
      className="header"
      style={{
        height: '80px',
        background: '#455a64',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontWeight: '800',
        fontSize: '50',
        color: 'whitesmoke',
      }}
    >
      <span style={{ marginLeft: '20px' }}>VAC - Survey App</span>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          listStyle: 'none',
        }}
      >
        {user ? (
          <>
            <li>
              <Link to="/">Post Survey Report</Link>
            </li>

            <li>
              <Link to="/users">Create Users</Link>
            </li>
            <li>
              <Link to="/charts">View Charts</Link>
            </li>
            <li>
              <Link to="/reports">Reports</Link>
            </li>

            <li onClick={onLogout}>
              Logout
            </li>
          </>
        ) : (
          <></>
        )}
      </ul>
    </div>
  )
}

export default Header
