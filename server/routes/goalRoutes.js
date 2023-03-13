const express = require('express')
const router = express.Router()
const {getGoals, createGoal, updateGoal, deleteGoal} = require('../controllers/goalController')

router.route('/').get(getGoals).post(createGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router 