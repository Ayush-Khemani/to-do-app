const express = require('express');
const { authenticateUserFromToken } = require('../../middleware/protectRoutes/protectRoutes');
const router = express.Router();
const {createTask} = require('../../controllers/taskController/createTask')
const {getTasks} = require('../../controllers/taskController/getTasks');

router.get('/:project_id', authenticateUserFromToken, getTasks);

router.post('/createTask', authenticateUserFromToken, createTask);



module.exports = router;