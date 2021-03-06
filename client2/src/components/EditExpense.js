import React from "react";
import axios from "axios";
import useForm from "./hooks/useForm";

function EditExpense({ id }) {
  const [form, handleInput] = useForm();

  const updateExpense = () => {
    axios
      .patch(`http://localhost:3000/expense/${id}`, form)
      .then(({ data }) => {
        console.log(data);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className={`display editExp-form${id} editExpform`}>
        <label>Name:</label>
        <input type="text" name="name" onChange={e => handleInput(e)} />
        <br />
        <label>Amount:</label>
        <input type="number" name="price" onChange={e => handleInput(e)} />
        <br />
        <button className="btn btn-dark" onClick={updateExpense}>
          Update
        </button>
      </div>
    </div>
  );
}

export default EditExpense;
