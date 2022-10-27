const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json')


app.get('/', (req, res) => {
    res.send('Server Is Running')
})
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const checkoutInfo = courses.find(checkoutCourse => checkoutCourse.id == id)
    res.send(checkoutInfo)
})
app.get('/coursedetails/:id', (req, res) => {
    const id = req.params.id
    const coursedetailsdata = courses.find(course => course.id == id)
    res.send(coursedetailsdata)
})
app.listen(port, () => { console.log('server is running', port) })