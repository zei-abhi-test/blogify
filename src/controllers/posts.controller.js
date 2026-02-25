const Post = require('../models/post.model')

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find()
  res.status(200).json({
    success: true,
    data: posts
  })
}

exports.getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id)
  res.status(200).json({
    success: true,
    data: post
  })
}