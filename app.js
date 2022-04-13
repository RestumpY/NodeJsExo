const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')

const router = require('./routes/index').router

app.set('view engine', 'ejs')
app.use('/public', express.static('public'))



mongoose.connect('mongodb+srv://Administrator:Administrator@cluster0.9pxxi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology: true
}).catch(err => {
    console.log(err)
})

app.use('', router)

app.listen(port, () => {
    console.log('Le server écoute sur le port ' + port)
})