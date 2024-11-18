const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/connectDb')

const app = express()
dotenv.config({ path: '../.env' })

connectDB()

app.get('/', (req, res) => {
	res.send('Hello India!')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server is running on ${PORT}`))
