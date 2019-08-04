import React, { useState, useEffect } from "react";
import axios from "axios";

function AllReminders() {
  const [rems, setReminders] = useState([]);

  // Get all reminders
  useEffect(() => {
    axios
      .get(
        "http://localhost:3000/reminder"
        // "https://exman007.herokuapp.com/reminder"
      )
      .then(({ data }) => {
        setReminders(prevState => {
          return [...prevState, ...data.rems];
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // Display all reminders
  const listReminders = rems.map((rems, i) => {
    return (
      <tr key={i}>
        <td className="pl-4">
          {rems.date}
          <br />
          {rems.reminder}
        </td>
        <td>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              axios
                .delete(`https://exman007.herokuapp.com/reminder/${rems._id}`)
                .then(({ data }) => {
                  setReminders(prevState => {
                    return prevState.filter(e => e._id !== data.reminder._id);
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
    <table className="table table-striped rem-table">
      <tbody>
        <tr>
          <th className="pl-4" colSpan="2">
            Reminders:
          </th>
        </tr>
        {listReminders}
      </tbody>
    </table>
  );
}

export default AllReminders;
