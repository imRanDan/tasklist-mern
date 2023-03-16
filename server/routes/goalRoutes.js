const express = require('express')
const router = express.Router()
const {getGoals, createGoal, updateGoal, deleteGoal} = require('../controllers/goalController')

const {protecc} = require('../middleware/authMiddleware')

router.route('/').get(protecc, getGoals).post(protecc, createGoal)
router.route('/:id').delete(protecc, deleteGoal).put(protecc, updateGoal)

module.exports = router 