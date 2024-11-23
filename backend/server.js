const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/connectDb')
const authRoutes = require('./routes/authRoutes')
const cookieParser = require('cookie-parser')

const app = express()

dotenv.config({ path: '../.env' })
app.use(
	cors({
		origin: 'http://localhost:5173', // Frontend URL
		credentials: true, // Allow credentials (cookies, etc.)
	})
)
app.use(express.json())
app.use(cookieParser())

connectDB()

app.use('/api/auth', authRoutes)

// app.get('/', (req, res) => {
// 	res.send('Server is running man! yaahoo!')
// })

// app.get('/api/notes', (req, res) => {
// 	res.send('Notes are ready to send')
// })

// app.get('/api/notes/:id', (req, res) => {
// 	res.send(`Notes are ready to send for the id: ${id}`)
// })

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server is running on ${PORT}`))
