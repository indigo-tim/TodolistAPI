const mongoose = require('mongoose');
const todoSchema = require('../../models/Todo');
var Schema = mongoose.Schema;



module.exports = (req, res) => {
    // res.status(201).send(req.body);
    //create a new todo
    let newTodo = todoSchema({
        name: req.body.name
    });
    //save the new task
    newTodo.save((err, todo) => {
        if(!err) {
            res.status(201).send(todo);
        } else {
            console.log(err);
            res.status(500).send();
        }
    });
}