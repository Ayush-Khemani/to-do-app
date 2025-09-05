const express = require('express');
const { authenticateUserFromToken } = require('../../middleware/protectRoutes/protectRoutes');
const router = express.Router();
const {createProject} = require('../../controllers/projectControllers/CreateProject')
const {getProjects} = require('../../controllers/projectControllers/getProjects');

router.get('/getProjects', authenticateUserFromToken, getProjects);
router.post('/createProject', authenticateUserFromToken, createProject)


module.exports = router;