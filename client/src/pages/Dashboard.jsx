import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import TaskForm from '../components/TaskForm'
import Spinner from '../components/Spinner'
import { getTasks, reset } from '../features/tasks/taskSlice'

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
    </>
  )
}

export default Dashboard