import { Router, application } from "express";
import { getTodoItems, postTodoItems, deleteTodoItems,updateTodoItems } from "../controllers/todo.controllers.js";


const router = Router()

router.route('/').get(getTodoItems)

router.route('/add').post(postTodoItems)

router.route('/:_id').delete(deleteTodoItems)

router.route('/:_id').put(updateTodoItems)





export default router