const { model, Schema } = require("mongoose");

const expenseSchema = new Schema({
  name: String,
  price: Number
});

module.exports = model("Expense", expenseSchema);
