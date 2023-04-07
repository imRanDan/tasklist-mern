const express = require('express')
const router = express.Router()
const {getTasks, createTask, updateTask, deleteTask} = require('../controllers/taskController')

const {protecc} = require('../middleware/authMiddleware')

router.put('/api/tasks/:id/assignTo/:userId', protecc, async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id },
      { assignedTo: req.params.userId },
      { new: true }
    ).populate('assignedTo', '-password');

    if (!task) {
      return res.status(404).send({ error: 'Task not found!' });
    }

    res.send(task)
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Server Error!'});
  }
})

router.route('/').get(protecc, getTasks).post(protecc, createTask)
router.route('/:id').delete(protecc, deleteTask).put(protecc, updateTask)

module.exports = router 