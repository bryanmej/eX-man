const express = require("express");
const router = express.Router();
const {
  createExpense,
  getAllexpenses,
  deleteExpense,
  updateExpense,
  createReminder,
  getAllReminders
} = require("../controllers/crudControllers");

//Expense
router.post("/expense", createExpense);

router.get("/expense", getAllexpenses);

router.delete("/expense/:id", deleteExpense);

router.patch("/expense/:id", updateExpense);

//Reminder
router.post("/reminder", createReminder);

router.get("/reminder", getAllReminders);

module.exports = router;
