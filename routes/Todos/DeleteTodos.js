const mongoose = require('mongoose');
const todoSchema = require('../../models/Todo');
var Schema = mongoose.Schema;


module.exports = (req, res) => {
    console.log(req.body);
    todoSchema.findById(req.body._id, (err, todo) => {
        if(!err && todo) {
            todo.remove((err) => {
                if(!err) {
                    res.send({_id:req.body._id});
                } else {
                    console.log(err);
                    res.status(500).send();
                }
            });
        } else {
            console.log(err);
            res.status(500).send();
        }
    })
}