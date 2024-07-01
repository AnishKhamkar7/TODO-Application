import mongoose, { Types } from "mongoose";

const TodoSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    }
},
{
    timestamps:true
})

export const Todoo = mongoose.model("Todoo",TodoSchema)