const express = require('express')
const dbconnect = require('./dbConnect')
const app = express()
app.use(express.json())
const userRoute = require('./routes/usersRoute')
const transactionRoute = require('./routes/transactionRoute')
app.use('/api/users/' , userRoute)
app.use('/api/transactions/',transactionRoute)
const port = 5000


app.listen(port, () => console.log(`Node js Server started at port 5000 ${port}!`))