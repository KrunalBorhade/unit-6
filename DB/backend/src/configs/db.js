const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect("mongodb+srv://krunal:krunal28@cluster0.arufa.mongodb.net/?retryWrites=true&w=majority")
}

module.exports = connect