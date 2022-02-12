const Todo = require('../models/todos')

const find=()=>{
   return Todo.find();
}

const findOne = (id) => {
    return Todo.findById(id)//.populate('userId')
}
const create = (body) => {
  const {title , status , tags} = body
    const todo = { title, status , tags ,userId:"6205485411c0115c492ea298" };
    return Todo.create(todo);
}
const edit = (id,todo) => {
  return  Todo.findByIdAndUpdate(id,todo,{new:true})
}

const Delete = (id) => {
  return Todo.findByIdAndRemove(id)
}

module.exports = {
    find,
    findOne,
    create,
    edit,
    Delete,
}