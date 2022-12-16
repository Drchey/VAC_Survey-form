import HomeScreen from './screens/HomeScreen'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import ChartScreen from './screens/ChartScreen'
import ReportScreen from './screens/ReportScreen'
import UserScreen from './screens/UserScreen'
import OneReportScreen from './screens/OneReportScreen'
import ResetPassword from './screens/ResetPassword'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/users" element={<UserScreen />} />
          <Route path="/charts" element={<ChartScreen />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/reports" element={<ReportScreen />} />
          <Route path="/reports/:id" element={<OneReportScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
