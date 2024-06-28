import { Types } from 'mongoose'
import { defineMongooseModel } from '#nuxt/mongoose'

const comment = defineMongooseModel<comment>('comment', {
	// ref on nuxt-mongoose official use cases
	username: {
		type: String,
		required: true,
		unique: false,
	},

	comment: {
		type: String,
		required: true,
		unique: false,
	},

	device: {
		type: String,
		required: true,
		unique: false,
	},

	like: {
		type: Number,
		required: true,
		unique: false,
		default: 0,
	},

	addTime: {
		type: Date,
		required: true,
		unique: false,
		default: new Date(),
	},
})

export default comment
