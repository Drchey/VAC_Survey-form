const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const cors = require('cors')
const { errorHandler } = require('./middleware/error.middleware')
const cookieParser = require('cookie-parser')
const path = require('path')
const app = express()

connectDB()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
const port = process.env.PORT || 5000

/** Routes  */

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/posts', require('./routes/posts.routes'))
app.use('/api/users', require('./routes/user.routes'))

/** Serve Frontend */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/build')))

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, './', 'client', 'build', 'index.html'),
    ),
  )
} else {
  app.get('/', (req, res) => res.send('NODE ENV set to production'))
}

/** Call Error Handler */
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
