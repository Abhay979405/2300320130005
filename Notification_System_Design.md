# Stage 1 - Priority Inbox

## Problem Statement
We need to build a Priority Inbox for the campus notification system. It should display the top `n` most important unread notifications first. The priority is based on:
1. **Weight (importance)** → Placement > Result > Event
2. **Recency (latest first)**

## Approach
- Each notification type is assigned a weight:
  - Placement = 3
  - Result = 2
  - Event = 1
- Notifications are sorted first by weight (higher first).
- If two notifications have the same weight, they are sorted by timestamp (latest first).
- After sorting, the top `n` notifications are selected and displayed.

## Implementation
- Notification data is stored in `src/data/notification.js`.
- A component `PriorityInbox.jsx` imports this data and applies the sorting logic.
- In `App.jsx`, `<PriorityInbox n={10} />` is used to render the top 10 notifications.

## Output
The Priority Inbox shows the most important notifications at the top:
- Placement notifications appear first.
- Then Result notifications.
- Finally Event notifications.
All are ordered by latest timestamp within their category.

## Screenshots
Add screenshots of the running application here.

![Priority Inbox Output](./screenshots/priority_inbox_output.png)
