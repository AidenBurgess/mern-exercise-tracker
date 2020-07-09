const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: false,
		},
		date: {
			type: Date,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const post = mongoose.model("Post", postSchema);

module.exports = post;
