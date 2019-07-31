const express = require("express");
const router = express.Router();
const {
  createExpense,
  getAllexpenses,
  deleteExpense,
  createReminder,
  getAllReminders,
  deleteReminder
} = require("../controllers/crudControllers");

//Expense

router.post("/expense", createExpense);

router.get("/expense", getAllexpenses);

router.delete("/expense/:id", deleteExpense);

//Reminder

router.post("/reminder", createReminder);

router.get("/reminder", getAllReminders);

router.delete("/reminder/:id", deleteReminder);

module.exports = router;
