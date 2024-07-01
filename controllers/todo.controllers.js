import { Todoo } from "../models/todo.models.js";

const getTodoItems = async(req,res)=>{
    try {
        const items = await Todoo.find()
        res
        .status(200)
        .json({items})
    
    } catch (error) {
        res
        .status(500)
        .json({
            message: message.error
        })
    }
}

const postTodoItems = async(req,res) =>{
    try {
        const items = await Todoo.create(req.body)
        

        res
        .status(200)
        .json(items)

    } catch (error) {
        res
        .status(400)
        .json(error)

    }

}

const deleteTodoItems = async(req,res)=>{
    try {
        const { _id } = req.params
        const items = await Todoo.findByIdAndDelete(_id)

        if (!items) {
            res.json({
                error:"NOT FOUND"
            })
        }

        res
        .status(200)
        .json("Item deleted")
    
    } catch (error) {
        res
        .status(200)
        .json({
            message: error.message
        })
    }
}


const updateTodoItems = async(req,res) => {
    try {
        const { _id } = req.params
        const item = await Todoo.findByIdAndUpdate(_id,req.body)
        
        if(!item){
            res.status(404).json({message: "Product not found"});
        }
        res
        .status(200)
        .json("Item uupdated")
    } catch (error) {
        res.status(200)
        .json({
            message: error.message
        })
    }
}




export {getTodoItems,
    postTodoItems,
    deleteTodoItems,
    updateTodoItems
}

