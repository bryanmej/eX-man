const Expense = require("../models/Expense");
const Reminder = require("../models/Reminder");

// Expense

exports.createExpense = (req, res, next) => {
  const { name, price } = req.body;
  const newExpense = new Expense({
    name,
    price
  });
  newExpense
    .save()
    .then(exp => {
      res.status(201).json(exp);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was a problem creating the expense" });
    });
};

exports.getAllexpenses = (req, res, next) => {
  Expense.find()
    .then(exps => res.status(200).json({ exps }))
    .catch(err => res.status(500).json({ err }));
};

exports.deleteExpense = (req, res, next) => {
  const { id } = req.params;
  Expense.findByIdAndDelete(id)
    .then(expense => res.status(200).json({ expense, msg: "expense deleted" }))
    .catch(err => res.status(500).json({ err }));
};

//Reminder

exports.createReminder = (req, res, next) => {
  const { date, reminder } = req.body;
  const newReminder = new Reminder({
    date,
    reminder
  });
  newReminder
    .save()
    .then(rem => {
      res.status(201).json(rem);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was a problem creating the reminder" });
    });
};

exports.getAllReminders = (req, res, next) => {
  Reminder.find()
    .then(rems => res.status(200).json({ rems }))
    .catch(err => res.status(500).json({ err }));
};

exports.deleteReminder = (req, res, next) => {
  const { id } = req.params;
  Reminder.findByIdAndDelete(id)
    .then(reminder =>
      res.status(200).json({ reminder, msg: "reminder deleted" })
    )
    .catch(err => res.status(500).json({ err }));
};
