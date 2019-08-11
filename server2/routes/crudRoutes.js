const express = require("express");
const router = express.Router();
const {
  createExpense,
  getAllexpenses,
  deleteExpense,
  createReminder,
  getAllReminders,
  deleteReminder,
  updateExpense,
  updateReminder
} = require("../controllers/crudControllers");

//Expense

router.post("/expense", createExpense);

router.get("/expense", getAllexpenses);

router.patch("/expense/:id", updateExpense);

router.delete("/expense/:id", deleteExpense);

//Reminder

router.post("/reminder", createReminder);

router.get("/reminder", getAllReminders);

router.patch("/reminder/:id", updateReminder);

router.delete("/reminder/:id", deleteReminder);

module.exports = router;
