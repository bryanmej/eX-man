const {model, Schema} = require('mongoose')

const expenseSchema = new Schema({
  name: String,
  price: Number,
  img: String,
})

module.exports = model('Expense', expenseSchema)