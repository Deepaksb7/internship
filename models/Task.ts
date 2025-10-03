import mongoose, { Schema, Document, Model }from "mongoose";

interface Task extends Document{
  text:string,
  completed:boolean,
  user:string
}

const TaskSchema:Schema<Task>=new Schema({
  text:{
    type:String,
    required:true
  },
  completed:{
    type:Boolean,
    default:false
  },
  user:{
    type:String,
    required:true
  }
},{timestamps:true});

const Task:Model<Task>=mongoose.models.Task || mongoose.model<Task>("Task",TaskSchema);

export default Task;  