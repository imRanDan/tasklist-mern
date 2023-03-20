import { useState } from "react"
import {useSelector, useDispatch} from 'react-redux'

function GoalForm() {
  const [text, setText] = useState('')

  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input type="text" />
        </div>
      </form>
    </section>
  )
}

export default GoalForm