import { defineMongooseModel } from '#nuxt/mongoose'

const accountInfo = defineMongooseModel<accountInfo>('accountInfo', {
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
	password: {
		type: String,
		required: true,
	},
	createTime: {
		type: Date,
		required: false,
		unique: true,
	},
})

export default accountInfo
