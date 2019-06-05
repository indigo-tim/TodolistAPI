const mongoose = require('mongoose');
const todoSchema = require('../../models/Todo');
var Schema = mongoose.Schema;

module.exports = (req, res) => {
    todoSchema.find({}, (err, todos) => {
        if(!err) {
            res.status(200).send(todos);
        } else {
            res.status(500).send();
        }
    })
}