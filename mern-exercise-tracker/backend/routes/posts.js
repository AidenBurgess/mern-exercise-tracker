const router = require("express").Router();
let Post = require("../models/post.model");

router.route("/").get((req, res) => {
	Post.find()
		.then((posts) => res.json(posts))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
	const username = req.body.username;
	const title = req.body.title;
	const body = req.body.body;
	const image = req.body.image | null;

	const newPost = new Post({
		username,
		title,
		body,
		image,
	});

	newPost
		.save()
		.then(() => res.json("Post added!"))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").get((req, res) => {
	Post.findById(req.params.id)
		.then((post) => res.json(post))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").delete((req, res) => {
	Post.findByIdAndDelete(req.params.id)
		.then(() => res.json("Post deleted."))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

// Can reimplement this in the future if wanted
// router.route("/update/:id").post((req, res) => {
// 	Post.findById(req.params.id)
// 		.then((post) => {
// 			post.username = req.body.username;
// 			post.description = req.body.description;
// 			post.duration = Number(req.body.duration);
// 			post.date = Date.parse(req.body.date);

// 			exercise
// 				.save()
// 				.then(() => res.json("Exercise updated!"))
// 				.catch((err) => res.status(400).json(`Error: ${err}`));
// 		})
// 		.catch((err) => res.status(400).json(`Error: ${err}`));
// });

module.exports = router;
