const express = require('express')
const app = express()
const { dbConnection } = require('./config/config')
const { typeError } = require('./middlewares/errors')
require('dotenv').config()

const PORT = process.env.PORT || 3001

dbConnection()

app.use(express.json())

app.use('/products', require('./routes/products'))
app.use('/users', require('./routes/users'))
app.use('/orders', require('./routes/orders'))

app.use(typeError)

app.listen(PORT, () => console.log(`server started ok at port ${PORT}`))
