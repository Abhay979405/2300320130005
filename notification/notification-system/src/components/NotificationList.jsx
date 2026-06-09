import { useEffect, useState } from "react";
import { List, ListItem, Typography, Badge, Alert } from "@mui/material";
import { fetchNotifications } from "../utils/api";
import NotificationItem from "./NotificationItem";

export default function NotificationList({ page, type }) {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNotifications(5, page, type)
      .then(data => setNotifications(data))
      .catch(() => setError("Failed to load notifications"));
  }, [page, type]);

  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <List>
      {notifications.map((n, idx) => (
        <NotificationItem key={idx} notification={n} />
      ))}
    </List>
  );
}
