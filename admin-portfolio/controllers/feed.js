const Post = require('../models/post');
const User = require ('../models/user');

exports.getPosts = (req, res, next) => {
  
  User
    .findById(req.userId)
    .then(user => {
      if(!user) {
        const error = new Error('Could not find user');
        error.statusCode = 404;
        throw error;
      }
      
      return user.posts;
    })
    .then(result => {
      return Post.find();
    })
    .then(posts => {

      const userPosts = posts.filter(post => {
        return post.creator.toString() === req.userId
      });

      return userPosts;

    })
    .then(userPosts => {
      res
        .status(200)
        .json({
          message: 'Fetched success', 
          posts: userPosts
        });
    })
    .catch(err => {
      if(!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    })
}



exports.postPost = (req, res, next) => { 
  // const errors = validationResult(req);

  // if(!errors.isEmpty()) {
  //   const error = new Error('Validation failed, entered data is incorrect');
  //   error.statusCode = 422;
  //   throw error;
  // }
  const name = req.body.name;
  const skill1 = req.body.skill1; 
  const skill2 = req.body.skill2;
  const skill3 = req.body.skill3;
  const link = req.body.link;
  let creator;


  const post = new Post({
    name: name,
    skill1: skill1, 
    skill2: skill2,
    skill3: skill3,
    link: link,
    creator: req.userId
  });
  post
    .save()
    .then(result => {
      return User.findById(req.userId);
    })
    .then(user => {
      creator = user;
      user.posts.push(post);
      return user.save();
    })
    .then(result  => {
      res.status(201).json({
        message: 'Post created successfully!',
        post: post,
        creator: {
          _id: creator._id, 
          name: creator.name
        }
      })
    })
    .catch(err => {
      if(err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
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
      if(post.creator.toString() !== req.userId) {
        const error = new Error('Not authorized');
        error.statusCode = 403;
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
      return User.findById(req.userId);
    })
    .then(user => {
      console.log(user)
      user.posts.pull(postId);
      return user.save();
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
      if(post.creator.toString() !== req.userId) {
        const error = new Error('Not authorized');
        error.statusCode = 403;
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