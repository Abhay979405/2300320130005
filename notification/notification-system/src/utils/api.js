import axios from "axios";

const API_URL = "http://4.224.186.213/evaluation-service/notifications";

export const fetchNotifications = async (limit=5, page=1, type=null) => {
  let url = `${API_URL}?limit=${limit}&page=${page}`;
  if (type) url += `&notification_type=${type}`;
  const res = await axios.get(url);
  return res.data;
};

