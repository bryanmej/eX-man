const express = require("express");
const router = express.Router();
const {
  createExpense,
  getAllexpenses,
  deleteExpense,
  updateExpense,
  createReminder
} = require("../controllers/crudControllers");

//Expense
router.post("/expense", createExpense);

router.get("/expense", getAllexpenses);

router.delete("/expense/:id", deleteExpense);

router.patch("/expense/:id", updateExpense);

//Reminder
router.post("/reminder", createReminder);

module.exports = router;
