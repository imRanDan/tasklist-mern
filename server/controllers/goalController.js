const asyncHandler = require('express-async-handler')

//@desc Gets goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get goals' })
})

//@desc Create goals
// @route POST /api/goals
// @access Private
const createGoal = asyncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field!')
  }
   
  res.status(200).json({message: 'Create a goal'})
})

//@desc Update goals
// @route PUT /api/goals/id:
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Update goal ${req.params.id}`})
})

//@desc Deletes goals
// @route DELETE /api/goals/id:
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Delete goal ${req.params.id}`})
})



module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal
}