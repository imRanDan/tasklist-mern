import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import TaskForm from '../components/TaskForm'
import TaskItem from '../components/TaskItem'
import Spinner from '../components/Spinner'
import { getTasks} from '../features/tasks/taskSlice'
import { reset } from '../features/auth/authSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {tasks, isLoading, isError, message} = useSelector((state) => state.tasks)

  useEffect(() => {
    if(isError) {
      console.log(message)
    }

    if(!user) {
      navigate('/login')
    }

    dispatch(getTasks())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome to your tasklist page, {user && user.name}</h1>
      </section>

      <TaskForm />

      <section className="content">
        {tasks.length > 0 ? (
          <div className="tasks">
            {tasks.map((task) => (
              <TaskItem key={task._id} task={task}/>
            ))}
          </div>
        ) : (<h3>No tasks created!</h3>)}
      </section>
    </>
  )
}

export default Dashboard