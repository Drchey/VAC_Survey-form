import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { deletePost, getPosts, reset } from '../redux/posts/postSlice'
import ExportExcel from '../components/ExportExcel'

const ReportScreen = () => {
  const { posts, isError, message } = useSelector((state) => state.posts)
  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    if (isError) {
      console.log(message)
    } else if (user.user.isDefaultPass) {
      navigate('/reset')
    } else {
      dispatch(getPosts())
      return () => {
        dispatch(reset())
      }
    }
  }, [user, navigate, isError, message, dispatch])

  const renderList = () => {
    return posts.map((post) => {
      return (
        <tbody key={post._id}>
          <tr>
            <td>{post.school_name}</td>
            <td>{post.school_type}</td>
            <td>{post.institution_store}</td>
            <td>{post.servers}</td>
            <td>{post.disaster_recovery}</td>
            <td>{post.uptime_service} %</td>
            <td
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <Link to={`/reports/${post._id}`} className="btn btn-primary">
                View
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deletePost())}
              >
                Delete
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <p>Reports Catalog ({posts && posts.length})</p>
          <ExportExcel
            apiData={posts}
            fileName="Data Export of All VAC Inputs"
          />
        </div>

        {posts && posts.length > 0 ? (
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>School Name</th>
                <th>School Type</th>
                <th>Institution Storage</th>
                <th>Servers Availability</th>
                <th>Disaster Recovery</th>
                <th>Uptime Service</th>
                <th>Actions</th>
              </tr>
            </thead>
            {renderList()}
          </table>
        ) : (
          <table className="table table-striped">
            <thead className="table-primary">
              <tr>
                <th>Reports</th>
              </tr>
            </thead>
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
  )
}

export default ReportScreen
