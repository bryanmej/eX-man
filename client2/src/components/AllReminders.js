import React, { useState, useEffect } from "react";
import axios from "axios";

function AllReminders() {
  const [rems, setReminders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/reminder")
      .then(({ data }) => {
        setReminders(prevState => {
          return [...prevState, ...data.rems];
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  //display all reminders
  const listReminders = rems.map((rems, i) => {
    return (
      <tr key={i}>
        <td>
          {rems.date}
          <br />
          {rems.reminder}
        </td>
      </tr>
    );
  });

  return (
    <table className="table table-striped">
      <tbody>
        <tr>
          <th>Reminders:</th>
        </tr>
        {listReminders}
      </tbody>
    </table>
  );
}

export default AllReminders;
