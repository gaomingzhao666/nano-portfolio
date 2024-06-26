import { Types } from 'mongoose'
import { defineMongooseModel } from '#nuxt/mongoose'

const comment = defineMongooseModel<comment>('comment', {
	// ref on nuxt-mongoose official use cases
	user: {
		type: Types.ObjectId,
		required: true,
		ref: 'accountInfo',
	},

	comment: {
		type: String,
		required: true,
		unique: false,
	},

	addTime: {
		type: Date,
		required: true,
		unique: false,
		default: Date.now,
	},
})

export default comment
