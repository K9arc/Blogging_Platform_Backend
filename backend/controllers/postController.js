const Post = require("../models/postModel");

exports.createPost = (req, res) => {
  const { title, content } = req.body;
  const userId = req.userId;
  Post.createPost(title, content, userId, (err) => {
    if (err) return res.status(500).send("Error creating post.");
    res.send("Post created.");
  });
};

exports.getAllPosts = (req, res) => {
  Post.getAllPosts((err, results) => {
    if (err) return res.status(500).send("Error fetching posts.");
    res.json(results);
  });
};

exports.getPostById = (req, res) => {
  Post.getPostById(req.params.id, (err, results) => {
    if (err || results.length === 0) return res.status(404).send("Post not found.");
    res.json(results[0]);
  });
};

exports.getMyPosts = (req, res) => {
  Post.getPostsByUserId(req.userId, (err, results) => {
    if (err) return res.status(500).send("Error fetching user posts.");
    res.json(results);
  });
};

exports.updatePost = (req, res) => {
  const { title, content } = req.body;
  Post.updatePost(req.params.id, title, content, (err) => {
    if (err) return res.status(500).send("Error updating post.");
    res.send("Post updated.");
  });
};

exports.deletePost = (req, res) => {
  Post.deletePost(req.params.id, (err) => {
    if (err) return res.status(500).send("Error deleting post.");
    res.send("Post deleted.");
  });
};
