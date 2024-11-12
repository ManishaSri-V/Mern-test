const express = require("express"); // npm install express
const { connectToDatabase } = require("./config/db");
const PORT = 5000;
const cors = require("cors");

const app = express();

const userRoutes = require("./routes/userRoute");
const employeeRoutes = require("./routes/employeeRoute");

app.use(express.json());
app.use(cors());

connectToDatabase();

app.use("/api/user", userRoutes);
app.use("/api/employee", employeeRoutes);

app.listen(PORT, () => {
  console.log("My server has started on the port " + PORT);
});
