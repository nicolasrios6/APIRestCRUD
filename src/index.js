const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080

// middleware
app.use(express.json())
app.use('/api', userRoutes)

// routes
app.get('/', (req, res) => {
	res.send('Welcome to my API')
})

// mongodb connection
mongoose.set('strictQuery', true)
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log('Connected to MongoDB Atlas')
	}).catch(error => {
		console.error(error)
	})

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})