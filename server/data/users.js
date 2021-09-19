const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin123", 10),
    isAdmin: true,
  },
  {
    name: "Jhimson Pamisa",
    email: "jhim@gmail.com",
    password: bcrypt.hashSync("pamisa123", 10),
  },
  {
    name: "Sharmine Obsioma",
    email: "shang@gmail.com",
    password: bcrypt.hashSync("pamisa123", 10),
  },
];

module.exports = users;
