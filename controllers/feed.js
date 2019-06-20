exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{
      title: 'First Project', 
      content: 'Test Things'
    }]
  })
}

exports.postPost = (req, res, next) => { 
  const skill1 = req.body.skill1; 
  const skill2 = req.body.skill2;
  const skill3 = req.body.skill3;

  res.status(201).json({
    message: 'Post created successfully!', 
    post: {
      id: new Date().toISOString(), 
      skill1: skill1, 
      skill2: skill2,
      skill3: skill3
    }
  });
}