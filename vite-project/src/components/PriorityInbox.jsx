import React from "react";
import notifications from "../data/notification";

const weights = { Placement: 3, Result: 2, Event: 1 };

const getPriorityNotifications = (data, n) => {
  return data
    .sort((a, b) => {
      const weightDiff = weights[b.Type] - weights[a.Type];
      if (weightDiff !== 0) return weightDiff;
      return new Date(b.Timestamp) - new Date(a.Timestamp);
    })
    .slice(0, n);
};

const PriorityInbox = ({ n = 10 }) => {
  const topNotifications = getPriorityNotifications(notifications, n);

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", fontFamily: "Arial" }}>
      <h3 style={{ textAlign: "center" }}>Priority Inbox</h3>
      <div style={{ maxHeight: "400px", overflowY: "auto" }}>
        {topNotifications.map((n) => (
          <div
            key={n.ID}
            style={{
              border: "1px solid #ccc",
              borderRadius: "6px",
              padding: "6px",
              marginBottom: "8px",
              fontSize: "14px",
              backgroundColor: "#f9f9f9"
            }}
          >
            <h4 style={{ margin: "0", fontSize: "15px", color: "#333" }}>{n.Type}</h4>
            <p style={{ margin: "2px 0", color: "#555" }}>{n.Message}</p>
            <small style={{ color: "#777" }}>
              {new Date(n.Timestamp).toLocaleString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriorityInbox;
