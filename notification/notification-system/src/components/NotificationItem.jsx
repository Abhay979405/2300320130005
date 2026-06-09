import { ListItem, Typography, Badge } from "@mui/material";

export default function NotificationItem({ notification }) {
  return (
    <ListItem>
      <Badge color={notification.isRead ? "default" : "primary"} variant="dot">
        <Typography style={{ fontWeight: notification.isRead ? "normal" : "bold" }}>
          {notification.type}: {notification.message}
        </Typography>
      </Badge>
    </ListItem>
  );
}
