const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  Post
    .find()
    .then(posts => {
      res
        .status(200)
        .json({
          message: 'Fetched success', 
          posts: posts
        });
    })
    .catch(err => {
      if(!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
}

exports.postPost = (req, res, next) => { 
  const name = req.body.name;
  const skill1 = req.body.skill1; 
  const skill2 = req.body.skill2;
  const skill3 = req.body.skill3;
  const link = req.body.link;

  const post = new Post({
    name: name,
    skill1: skill1, 
    skill2: skill2,
    skill3: skill3,
    link: link
  });
  post
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Post created successfully!',
        post: result 
      })
    })
    .catch(err => {
        console.log(err)
    })
}

exports.getPost = (req, res, next) => {
  const postId = req.params.postId;
  Post
    .findById(postId) 
    .then(post => {
      if(!post) {
        const error = new Error('Could not find post');
        error.statusCode = 404;
        throw error;
      }
      res.status(200)
        .json({
          message: 'Post fetched', 
          post: post
        })
    })
    .catch(err => {
      if(!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    })
}

exports.deletePost = (req, res, next) => {
  const postId = req.params.postId; 

  Post
    .findById(postId)
    .then(post => {
      if(!post) {
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
      }
      return Post.findByIdAndRemove(postId);
    })
    .then(result => {
      console.log(result);
      res.status(200).json({message: 'Deleted post'});
    })
    .catch(err => {
      if(!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    })
}

exports.updatePost = (req, res, next ) => {
  const postId = req.params.postId;

  const name = req.body.name;
  const skill1 = req.body.skill1; 
  const skill2 = req.body.skill2;
  const skill3 = req.body.skill3;
  const link = req.body.link;

  Post
    .findById(postId)
    .then(post => {
      if(!post) {
        const error = new Error('Could not find post');
        error.statusCode = 404;
        throw error;
      }
      post.name = name;
      post.skill1 = skill1; 
      post.skill2 = skill2;
      post.skill3 = skill3;
      post.link = link;
      return post.save();
    })
    .then(result => {
      res.status(200).json({message: 'Post updated', post: result}  );
    })
    .catch(err => {
      if(!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    })
} 