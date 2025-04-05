import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get("/api/symptoms", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }).then(res => setLogs(res.data));
  }, []);

  return (
    <div>
      <h2>Symptom History</h2>
      <ul>
        {logs.map(log => (
          <li key={log._id}>
            {log.date.slice(0, 10)}: {log.symptoms.join(", ")}<br />
            Notes: {log.notes}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
