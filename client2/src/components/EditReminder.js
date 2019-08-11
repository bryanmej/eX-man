import React from "react";
import axios from "axios";
import useForm from "./hooks/useForm";

function EditReminder({ id }) {
  const [form, handleInput] = useForm();

  const updateReminder = () => {
    axios
      .patch(`http://localhost:3000/reminder/${id}`, form)
      .then(({ data }) => {
        console.log(data);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className={`display editRem-form${id} editRemForm`}>
        <label>Date:</label>
        <input type="date" name="date" onChange={e => handleInput(e)} />
        <br />
        <label>Reminder:</label>
        <input type="textarea" name="reminder" onChange={e => handleInput(e)} />
        <br />
        <button className="btn btn-dark" onClick={updateReminder}>
          Update
        </button>
      </div>
    </div>
  );
}

export default EditReminder;
