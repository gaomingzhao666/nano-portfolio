// ai generated
import express, { Express } from 'express'
import mongoose from 'mongoose'
import userRoutes from './routes/userRoutes'

const app: Express = express()
const port = process.env.PORT || 3000

// Middleware
app.use(express.json())

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/your-database-name', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

// Routes
app.use('/api/users', userRoutes)

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
