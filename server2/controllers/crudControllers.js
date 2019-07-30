const Expense = require('../models/Expense')

exports.createExpense = (req, res, next) => {
  const {name, price, img} = req.body
  const newExpense = new Expense({
    name,
    price,
    img
  })
  newExpense.save()
    .then(exp =>{
      res.status(201).json(exp)
    })
    .catch(err => {
      res.status(500).json({message:'There was a problem creating the expense'})
    })
}

exports.getAllexpenses = (req, res, next) => {
  Expense.find()
  .then(exps => res.status(200).json({exps}))
  .catch(err => res.status(500).json({err}))
}

exports.deleteExpense = (req, res, next) => {
  const {id} = req.params
  Expense.findByIdAndDelete(id)
  .then(expense => res.status(200).json({ expense, msg: 'expense deleted' }))
  .catch(err => res.status(500).json({ err }))
}

exports.updateExpense = (req, res, next) => {
  const {id} = req.params
  Expense.findByIdAndUpdate(id, {...req.body}, {new:true})
  .then(exp => res.status(200).json({ exp }))
  .catch(err => res.status(500).json({ err }))
}