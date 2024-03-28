// ai generated
import mongoose, { Schema, Document } from 'mongoose'

export interface User extends Document {
	username: string
	password: string
}

const UserSchema = new Schema<User>({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
})

const UserModel = mongoose.model<User>('User', UserSchema)

export default UserModel
