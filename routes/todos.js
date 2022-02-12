const express = require('express');
const todosController = require('../controllers/todos');
const router = express.Router()

router.get('/', (req, res, next) => {
    const data = todosController.find({}).then((data) => {
        res.json(data);
    })
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    todosController.findOne(id)
        .then((todo) => {
            if (!todo) {
                res.status(404).end()
                return
            }
            res.json(todo)
        })
        .catch(e => {
            res.status(500).json(e)
        })
});

router.post('/', (req, res, next) => {
    todosController.create(req.body).then((todo) => {
        res.json(todo);
    })
        .catch(e => res.status(422).json(e))
});

router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    todosController.Delete(id).then((todo) => {
        if (!todo) {
            res.status(404).json(err)
            return
        }
        res.status(200).json(err)
    })
        .catch((err) => {
            res.status(404).json(err.message)
        })
});

router.patch("/:id", (req, res, next) => {
    const { id } = req.params;
    todosController.edit(id, req.body)
        .then((response) => {
            res.json(response)
        })
        .catch(err => {
            res.status(400).end()
        })
})

module.exports = router;