//error codes: 1000 = user not found
const mongoose = require('mongoose');
const todoSchema = require('../../models/Todo');
var Schema = mongoose.Schema;

module.exports = (req, res) => {
    todoSchema.findById(req.body._id, (err, todo) => {
        if(!err) {
            todo.name = req.body.name
            todo.save((err) => {
                if(!err) {
                    res.send(todo);
                } else {
                    console.log(err);
                    res.status(500).send();
                }
            });
        } else {
            if(err) {
                console.log(err);
                res.status(500).send();
            };
        };
    });
}