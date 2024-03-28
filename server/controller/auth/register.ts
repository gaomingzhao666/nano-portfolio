// ai generated
import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import UserModel, { User } from '../models/userModel'

class UserController {
	async register(req: Request, res: Response) {
		try {
			const { username, password } = req.body

			// Check if user already exists
			const existingUser = await UserModel.findOne({ username })
			if (existingUser) {
				return res.status(400).json({ message: 'Username already exists' })
			}

			// Hash the password
			const salt = await bcrypt.genSalt(10)
			const hashedPassword = await bcrypt.hash(password, salt)

			// Create a new user
			const newUser = new UserModel({ username, password: hashedPassword })
			await newUser.save()

			res.status(201).json({ message: 'User created' })
		} catch (error) {
			res.status(500).json({ message: 'Error creating user', error })
		}
	}

	async login(req: Request, res: Response) {
		try {
			const { username, password } = req.body

			// Find the user
			const user = await UserModel.findOne({ username })
			if (!user) {
				return res.status(401).json({ message: 'Invalid username or password' })
			}

			// Compare the password
			const isPasswordValid = await bcrypt.compare(password, user.password)
			if (!isPasswordValid) {
				return res.status(401).json({ message: 'Invalid username or password' })
			}

			// Generate a JWT token
			const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
				expiresIn: '1h',
			})

			res.json({ token })
		} catch (error) {
			res.status(500).json({ message: 'Error logging in', error })
		}
	}
}

export default new UserController()
