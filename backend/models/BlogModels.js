const { Schema, model } = require('../connection');

const blogSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String },
    category: { type: String },
    content: { type: String, required: true },
    developer: { type: String, required: true, trim: true },
    tags: { type: String, trim: true },
    publishedDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
    featuredImage: {
      type: String,  // URL to the image 
      trim: true
    },
    views: { type: Number, default: 0 }
  }
)

module.exports = model('blog', blogSchema);
