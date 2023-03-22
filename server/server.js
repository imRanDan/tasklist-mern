const path = require('path')
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5003

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
 
app.use('/api/tasks', require('./routes/taskRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// Serve the client
// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')))

//     app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html')))
// } else {
//     app.get('/', (req, res) => res.send('Set to production Please'))
// }

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))