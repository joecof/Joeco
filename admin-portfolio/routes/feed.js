const express = require('express');


const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

//GET ALL POST
router.get('/posts', isAuth, feedController.getPosts);

//POST
router.post('/post', isAuth, feedController.postPost);

//GET SINGLE POST
router.get('/post/:postId', isAuth, feedController.getPost);

//DELETE SINGLE POST 
router.delete('/post/:postId', isAuth, feedController.deletePost);

//UPDATE SINGLE POST
router.put('/post/:postId', isAuth, feedController.updatePost);

module.exports = router; 