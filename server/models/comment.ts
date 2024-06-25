import { defineMongooseModel } from '#nuxt/mongoose'

const comment = defineMongooseModel('comment', {
	userId: {
		type: String,
		required: true,
		unique: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},

	comment: {
		type: String,
		required: true,
		unique: false,
	},

	childComment: {
		type: [], // Assuming child comments are strings, adjust if necessary
		required: false,
		unique: false,
	},

	addTime: {
		type: Date,
		required: false,
		unique: false,
	},
})

export default comment
