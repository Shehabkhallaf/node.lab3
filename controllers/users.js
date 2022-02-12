const usersModul = require('../models/user')

const findOne = (id) => {
    return usersModul.findById(id)
}

const find = () => {
    return usersModul.find()
}

const create = (userData) => {
    const { userName, firstName, lastName } = userData;
    const user = { userName, firstName, lastName }
    return usersModul.create(user);
}

const edit = (id, editData) => {
    return usersModul.findByIdAndUpdate(id, editData, { new: true })
}

const Delete = (id) => {
    return usersModul.findByIdAndRemove(id.id)
}

module.exports = { create, find, findOne, edit, Delete };