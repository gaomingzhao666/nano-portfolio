import mongoose from 'mongoose'
import { defineMongooseModel } from '#nuxt/mongoose'

const comment = defineMongooseModel('comment', {
	from: {
		type: String,
		required: true,
		unique: true,
	},

	to: {
		type: String,
		required: true,
		unique: false,
	},

	comment: {
		type: String,
		required: true,
		unique: false,
	},

	replies: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'comment',
		},
	],

	addTime: {
		type: Date,
		required: false,
		unique: false,
	},
})

export default comment
