import { useState } from "react"
import {useDispatch} from 'react-redux'
import {createTask} from '../features/tasks/taskSlice'

function TaskForm() {
  const [text, setText] = useState('')
  const [assignee, setAssignee] = useState("")
  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()

    dispatch(createTask({text, assignee}))
    setText('')
    setAssignee('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Task</label>
          <input type="text" name='text' id='text' value= {text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="assignee">Assign To</label>
          <select
            name="assignee"
            id="assignee"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            >
              <option value="">Select Assignee</option>
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
              <option value="user3">User 3</option>
            </select>
        </div>
        <div className="form-group">
          <button className="btn btn-block type=submit">
            Add Task
          </button>
        </div>
      </form>
    </section>
  )
}

export default TaskForm