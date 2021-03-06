import React from "react";
import useForm from "./hooks/useForm";
import AuthService from "./services/Service";
import "../App.css";

function CreateReminder({ toggle2 }) {
  const service = new AuthService();
  const [form, handleInputs] = useForm();

  const createRem = () => {
    service
      .createReminder(form)
      .then(response => {
        console.log(response);
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="form-group">
      <div className="rem-form display">
        <label style={{ display: "flex", justifyContent: "space-between" }}>
          Date:
          <span onClick={toggle2} className="hide">
            Hide
          </span>
        </label>
        <input
          type="date"
          name="date"
          className="form-control date"
          onChange={e => handleInputs(e)}
        />
        <label>Reminder/Comment</label>
        <input
          type="textarea"
          name="reminder"
          className="form-control"
          onChange={e => handleInputs(e)}
        />
        <br />
        <button onClick={createRem} className="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateReminder;
