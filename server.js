const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config()
const connectDB = require('./config/db')
const cors = require('cors')

//init middleware
app.use(express.json({ limit: '2mb' }))
app.use(cors({ origin: process.env.CLIENT_URL }))
// app.use(express.urlencoded({ limit: '25mb' }))

//require routes
const messageRoutes = require('./routes/message')

//use routes
app.use('/api', messageRoutes)

//DB connection
connectDB()

//port listener
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`The app listening at http://localhost:${PORT}`)
})
