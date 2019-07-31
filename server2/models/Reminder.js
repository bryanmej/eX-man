const { model, Schema } = require("mongoose");

const reminderSchema = new Schema({
  date: String,
  reminder: String
});

module.exports = model("Reminder", reminderSchema);
