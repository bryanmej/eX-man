const express = require('express')
const router = express.Router()
const {createExpense, getAllexpenses, deleteExpense, updateExpense} = require('../controllers/crudControllers')

router.post('/expense', createExpense)

router.get('/expense', getAllexpenses)

router.delete('/expense/:id', deleteExpense)

router.patch('/expense/:id', updateExpense)

module.exports = router