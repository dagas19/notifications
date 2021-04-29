import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Basir",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  notifications: [
    {
      subject: "New message",
      read: true ? "yes" : "no",
      receivedAt: "2020-05-15 00:00:00",
    },
    {
      subject: "Your details have been updated",
      read: true ? "yes" : "no",
      receivedAt: "2020-05-15 00:00:00",
    },
    {
      subject: "You got rated",
      read: true ? "yes" : "no",
      receivedAt: "2020-05-15 00:00:00",
    },
    {
      subject: "You've been reported",
      read: true ? "yes" : "no",
      receivedAt: "2020-05-15 00:00:00",
    },
    {
      subject: "You have a new message",
      read: false ? "yes" : "no",
      receivedAt: "2020-05-15 00:00:00",
    },
    {
      subject: "Your details have been updated",
      read: false ? "yes" : "no",
      receivedAt: "2020-05-15 00:00:00",
    },
    {
      subject: "You got rated",
      read: false ? "yes" : "no",
      receivedAt: "2020-05-15 00:00:00",
    },
    {
      subject: "You've been reported",
      read: false ? "yes" : "no",
      receivedAt: "2020-05-15 00:00:00",
    },
  ],
};
export default data;
