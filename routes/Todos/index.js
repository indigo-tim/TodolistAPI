var express = require('express');
var router = express.Router();
const create = require('./CreateTodos')
const read = require('./ReadTodos')
const update = require('./UpdateTodos')
const deleteTodos = require('./DeleteTodos')

/* CREATE User */
router.get('/', (req, res) => {res.send("Forbidden")});
router.put('/create', create);
router.get('/read', read);
router.patch('/update', update);
router.post('/delete', deleteTodos);

module.exports = router;
