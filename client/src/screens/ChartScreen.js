import 'chart.js/auto'
import { useEffect } from 'react'
import { Chart } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { getPosts, reset } from '../redux/posts/postSlice'

const ChartScreen = () => {
  /**  */
  const { user } = useSelector((state) => state.auth)
  const { posts, message, isError } = useSelector((state) => state.posts)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    if (isError) {
      console.log(message)
    }

    if (user.user.isDefaultPass) {
      navigate('/reset')
    }

    dispatch(getPosts())
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  const signedCount = {
    labels: ['University', 'Polytechnics', 'College of Education'],
    datasets: [
      {
        label: 'Based on Questionnaire Data',
        data: [
          posts?.filter((x) => x.school_type === 'university').length,
          posts?.filter((x) => x.school_type === 'polytechnic').length,
          posts?.filter((x) => x.school_type === 'college_edu').length,
        ],
        backgroundColor: ['#4db6ac', '#4fc3f7', '#ffeb3b'],
      },
    ],
  }

  const inHouse = {
    labels: ['DIGITAL', 'MANUAL', 'UNCLEAR'],
    datasets: [
      {
        label: 'Presence of InHouse Storage (University)',
        data: [
          posts?.filter(
            (x) =>
              x.institution_store === 'digital' &&
              x.school_type === 'university',
          ).length,
          posts?.filter(
            (x) =>
              x.institution_store === 'manual' &&
              x.school_type === 'university',
          ).length,
          posts?.filter(
            (x) =>
              x.institution_store === 'unclear' &&
              x.school_type === 'university',
          ).length,
        ],
        backgroundColor: ['#4db6ac', '#4db6ac', '#4db6ac'],
      },
      {
        label: 'Presence ofInHouse Storage (Polytechnic)',
        data: [
          posts?.filter(
            (x) =>
              x.institution_store === 'digital' &&
              x.school_type === 'polytechnic',
          ).length,
          posts?.filter(
            (x) =>
              x.institution_store === 'manual' &&
              x.school_type === 'polytechnic',
          ).length,
          posts?.filter(
            (x) =>
              x.institution_store === 'unclear' &&
              x.school_type === 'polytechnic',
          ).length,
        ],
        backgroundColor: ['#4db6ac', '#f4511e', '#ffee58'],
      },
      {
        label: 'Presence of InHouse Storage(College of Education)',

        data: [
          posts?.filter(
            (x) =>
              x.institution_store === 'digital' &&
              x.school_type === 'college_edu',
          ).length,
          posts?.filter(
            (x) =>
              x.institution_store === 'manual' &&
              x.school_type === 'college_edu',
          ).length,
          posts?.filter(
            (x) =>
              x.institution_store === 'unclear' &&
              x.school_type === 'college_edu',
          ).length,
        ],
        backgroundColor: ['#4db6ac', '#f4511e', '#ffee58'],
      },
    ],
  }

  const counts = {
    labels: posts?.map((x) => x.school_name),
    datasets: [
      {
        label: 'Average Number of Students',
        data: posts?.map((x) => x.school_count),
        backgroundColor: '#26a69a',
      },
      {
        label: 'Average Number of Graduates Per Year',
        data: posts?.map((x) => x.grad_count),
        backgroundColor: '#29b6f6',
      },
      {
        label: 'Average Number of Verifications Per Year',
        data: posts?.map((x) => x.verify_count),
        backgroundColor: '#f4511e',
      },
    ],
  }

  const recoveryCount = {
    labels: ['YES', 'NO', 'UNCLEAR'],
    datasets: [
      {
        label: 'Presence of Disaster Recovery (University)',
        data: [
          posts?.filter(
            (x) =>
              x.disaster_recovery === 'yes' && x.school_type === 'university',
          ).length,
          posts?.filter(
            (x) =>
              x.disaster_recovery === 'no' && x.school_type === 'university',
          ).length,
          posts?.filter(
            (x) =>
              x.disaster_recovery === 'unclear' &&
              x.school_type === 'university',
          ).length,
        ],
        backgroundColor: ['#4db6ac', '#f4511e', '#ffee58'],
      },
      {
        label: 'Presence of Disaster Recovery (Polytechnic)',
        data: [
          posts?.filter(
            (x) =>
              x.disaster_recovery === 'yes' && x.school_type === 'polytechnic',
          ).length,
          posts?.filter(
            (x) =>
              x.disaster_recovery === 'no' && x.school_type === 'polytechnic',
          ).length,
          posts?.filter(
            (x) =>
              x.disaster_recovery === 'unclear' &&
              x.school_type === 'polytechnic',
          ).length,
        ],
        backgroundColor: ['#4db6ac', '#f4511e', '#ffee58'],
      },
      {
        label: 'Presence of Disaster Recovery (College of Education)',

        data: [
          posts?.filter(
            (x) =>
              x.disaster_recovery === 'yes' && x.school_type === 'college_edu',
          ).length,
          posts?.filter(
            (x) =>
              x.disaster_recovery === 'no' && x.school_type === 'college_edu',
          ).length,
          posts?.filter(
            (x) =>
              x.disaster_recovery === 'unclear' &&
              x.school_type === 'college_edu',
          ).length,
        ],
        backgroundColor: ['#4db6ac', '#f4511e', '#ffee58'],
      },
    ],
  }

  var options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        display: false,
        grid: {
          display: false,
        },
      },
      x: {
        beginAtZero: true,
        display: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
    },
  }
  return (
    <div className="charts">
      <Header />

      <div className="section">
        <p>Charts</p>

        <div className="card" style={{ padding: '20px', marginBottom: '20px' }}>
          <h6 style={{ marginBottom: '30px' }}>
            No of School that have filled the Questionnaire
          </h6>
          <Chart type="bar" data={signedCount} height="100" options={options} />
        </div>

        <div className="card" style={{ padding: '20px' }}>
          <h5 style={{ marginBottom: '30px' }}>Student & Verification Data</h5>
          <Chart type="line" data={counts} height="100" options={options} />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div className="chart-container">
            <h5>Presence of a Disaster Recovery Strategy</h5>
            <Chart
              type="bar"
              height="150"
              data={recoveryCount}
              options={options}
            />
          </div>

          <div className="chart-container">
            <h5>Presence of In-House Capabilities</h5>
            <Chart type="bar" height="150" data={inHouse} options={options} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChartScreen
