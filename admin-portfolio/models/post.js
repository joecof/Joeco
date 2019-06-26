const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
  name: {
    type: String, 
    required: true
  },
  skill1: {
    type: String, 
    required: true 
  }, 
   skill2: { 
     type: String, 
     required: true
   }, 
   skill3: { 
     type: String, 
     required: true
   }, 
   link: { 
     type:String, 
     required:true
   },
}, { timestamps: true}
);

module.exports = mongoose.model('Post', postSchema);