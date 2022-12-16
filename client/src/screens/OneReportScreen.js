import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { getPost, reset } from '../redux/posts/postSlice'

const OneReportScreen = () => {
  const { user } = useSelector((state) => state.auth)
  const { posts, isError, message } = useSelector((state) => state.posts)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    if (isError) {
      console.log(message)
    } else if (user.user.isDefaultPass) {
      navigate('/reset')
    } else {
      dispatch(getPost(id))
      return () => {
        dispatch(reset())
      }
    }
    if (isError) {
      console.log(message)
    }
  }, [user, navigate, dispatch, isError, message, id])

  return (
    <div>
      <Header />
      <div className="container" style={{ padding: '15px' }}>
        <h4 style={{ color: 'teal' }}>{posts.school_name}</h4>
        <div className="card" style={{ padding: '10px', margin: '10px' }}>
          <p>
            <b>Institution Storage: </b>
            {posts.institution_store}
          </p>
          <p>
            <b>Data Storage:</b> {posts.database_type}
          </p>
          <p>
            <b>Presence of Database Recovery :</b> {posts.disaster_recovery}
          </p>
          <p>
            <b>Database Recovery Strategy :</b>
            {posts.disaster_recovery_strategy}
          </p>
          <p>
            <b>Data Privacy :</b> {posts.data_privacy}
          </p>
        </div>
        <div className="card" style={{ padding: '10px', margin: '10px' }}>
          <p>
            <b>Average Student Per Year : </b>
            {posts.school_count}
          </p>
          <p>
            <b>Average Graduands Per Year :</b> {posts.grad_count}
          </p>
          <p>
            <b>Average Verification Requests Per Year :</b> {posts.verify_count}
          </p>
        </div>
      </div>
    </div>
  )
}

export default OneReportScreen
