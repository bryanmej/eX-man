import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateExpense from "./CreateExpense";
import CreateReminder from "./CreateReminder";
import AllReminders from "./AllReminders";
import "../App.css";

function AllExpenses(props) {
  const [exps, setExpenses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/expense")
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
        <td>{exps.name}</td>
        <td>{exps.price}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              axios
                .delete(`http://localhost:3000/expense/${exps._id}`)
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
    <div>
      <div className="jumbotron text-white">
        <h1 className="display-4">
          Your total for this month: <b>{`$ ${total}`}</b>
        </h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <button onClick={toggle} className="btn btn-info">
          Add an expense
        </button>
        <button onClick={toggle2} className="btn btn-secondary">
          Add a reminder
        </button>
      </div>

      <CreateExpense />

      <CreateReminder />

      <div className="row">
        <div className="col-7 pr-0">
          <table className="table table-dark table-striped">
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

        <div className="col-5 pl-0">
          <AllReminders />
        </div>
      </div>
    </div>
  );
}

export default AllExpenses;
