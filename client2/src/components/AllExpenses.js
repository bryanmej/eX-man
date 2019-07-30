import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateExpense from "./CreateExpense";
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

  const total = exps.reduce((acc, obj) => {
    return acc + obj.price;
  }, 0);

  const toggle = () => {
    document.querySelector(".exp-form").classList.toggle("display");
  };

  const all = exps.map((exps, i) => {
    return (
      <tr key={exps._id}>
        <td>{i + 1}</td>
        <td>{exps.name}</td>
        <td>{exps.price}</td>
        <td>
          <button className="btn btn-warning">Edit</button>
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
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4 text-white">
            Your total for this month: {`$ ${total}`}
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
        </div>
      </div>
      <CreateExpense />
      <table className="table table-dark table-striped">
        <tbody>
          <tr>
            <th>#</th>
            <th>Name:</th>
            <th>Amount:</th>
            <th />
          </tr>
          {all}
        </tbody>
      </table>
    </div>
  );
}

export default AllExpenses;
