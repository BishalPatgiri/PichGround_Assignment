const mongoose=require("mongoose");

const todoSchema= mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  }
},{
  versionKey:false
})
const todoModel= mongoose.model("todo",todoSchema)
module.exports={
  todoModel
};