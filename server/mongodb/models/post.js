import mongoose from "mongoose"

const Post = new mongoose.Schema({
  photo: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: String, required: true },
  likes: { type: Array, default: [] },
  comments: { type: Array, default: [] },
})

const PostSchema = mongoose.model("Post", Post)

export default PostSchema
