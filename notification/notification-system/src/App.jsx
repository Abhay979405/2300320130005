import React, { useState } from "react";
import NotificationList from "./components/NotificationList";
import Pagination from "./components/Pagination";
import "./styles/globals.css";

export default function App() {
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");

  return (
    <div className="app-container">
      <h1> Notifications System</h1>

      {/* Filter Dropdown */}
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">All</option>
        <option value="Event">Event</option>
        <option value="Result">Result</option>
        <option value="Placement">Placement</option>
      </select>

      {/* Notifications List */}
      <NotificationList page={page} type={type} />

      {/* Pagination */}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
