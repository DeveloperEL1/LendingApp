const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const PORT = 5000
const uri = 'mongodb+srv://Sasha:9IXGXkOQQpddSJpx@cluster0.4dzllsm.mongodb.net/?retryWrites=true&w=majority'
const userRoutes = require('./controllers/userController')
const { errorHandler } = require('./middlewares/index')
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.json())
app.use('/api/users', userRoutes)
app.use(errorHandler)
async function connect() {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connected")
    } catch (error) {
        console.log(error)
    }
}
connect()
app.listen(PORT, () => {
    console.log(`The port ${PORT} is here`)
})