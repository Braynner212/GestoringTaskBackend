const { Router } = require('express');
const { getTask, createTask, updateTask } = require('../controllers/task.controller');

const router = Router();

router.get('/', getTask);
router.post('/', createTask);
router.put('/', updateTask);

module.exports = router;