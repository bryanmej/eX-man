import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateExpense from "./CreateExpense";
import CreateReminder from "./CreateReminder";
import AllReminders from "./AllReminders";
import EditExpense from "./EditExpense";
import "../App.css";

function AllExpenses(props) {
  const [exps, setExpenses] = useState([]);

  // Get all expenses
  useEffect(() => {
    axios
      .get(
        "http://localhost:3000/expense"
        //"https://exman007.herokuapp.com/expense"
      )
      .then(({ data }) => {
        setExpenses(prevState => {
          return [...prevState, ...data.exps];
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // Total of all expenses
  const total = exps.reduce((acc, obj) => {
    return acc + obj.price;
  }, 0);

  // Toggle forms
  const toggle = () => {
    document.querySelector(".exp-form").classList.toggle("display");
  };

  const toggle2 = () => {
    document.querySelector(".rem-form").classList.toggle("display");
  };

  // Display all expenses
  const listExpenses = exps.map((exps, i) => {
    return (
      <tr key={exps._id}>
        <td>{i + 1}</td>
        <td>
          {exps.name}
          <EditExpense id={exps._id} />
        </td>
        <td>{exps.price}</td>
        <td>
          <button
            className="btn btn-outline-warning"
            onClick={() => {
              document
                .querySelector(`.editExp-form${exps._id}`)
                .classList.toggle("display");
            }}
          >
            Edit
          </button>

          <button
            className="btn btn-outline-danger"
            onClick={() => {
              axios
                .delete(
                  `http://localhost:3000/expense/${exps._id}`
                  // `https://exman007.herokuapp.com/expense/${exps._id}`
                )
                .then(({ data }) => {
                  setExpenses(prevState => {
                    return prevState.filter(e => e._id !== data.expense._id);
                  });
                })
                .catch(err => console.log(err));
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="content">
      <div className="jumbotron text-white">
        <h1 className="display-4">
          Your total for this month:
          <span className="total font-weight-bold">{` $ ${total}`}</span>
        </h1>
        <p className="lead">
          This is a simple web app to help you keep track how you are spending
          your money, how much of it you are spending and will help you remember
          important things.
        </p>
        <hr className="my-4" />
        <p>Click on a button to add an expense to the list or a reminder</p>
        <button onClick={toggle} className="btn btn-info mr-3">
          Add an expense
        </button>
        <button onClick={toggle2} className="btn btn-purple">
          Add a reminder
        </button>
      </div>

      <CreateExpense />

      <CreateReminder />

      <div className="row">
        <div className="col-md-7 pr-0">
          <table className="table table-dark table-striped mb-0">
            <tbody>
              <tr>
                <th>#</th>
                <th>Name:</th>
                <th>Amount:</th>
                <th />
              </tr>
              {listExpenses}
            </tbody>
          </table>
        </div>

        <div className="col-md-5 pl-0">
          <AllReminders />
        </div>
      </div>
    </div>
  );
}

export default AllExpenses;
