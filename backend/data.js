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
    },
    {
      subject: "Your details have been updated",
      read: true ? "yes" : "no",
    },
    {
      subject: "You got rated",
      read: true ? "yes" : "no",
    },
    {
      subject: "You've been reported",
      read: true ? "yes" : "no",
    },
    {
      subject: "You have a new message",
      read: false ? "yes" : "no",
    },
    {
      subject: "Your details have been updated",
      read: false ? "yes" : "no",
    },
    {
      subject: "You got rated",
      read: false ? "yes" : "no",
    },
    {
      subject: "You've been reported",
      read: false ? "yes" : "no",
    },
  ],
};
export default data;
