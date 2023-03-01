require("dotenv").config();
const express = require("express");
const app = express();
const UserRoutes = require("./router/users_routes");
const PerfumesRoutes = require("./router/perfumes_routes");
const mongoose = require("mongoose");
const port = process.env.API_PORT || 3000;
const dbUrl = process.env.DB_URL || "testdburl";
const dbName = process.env.DB_NAME || "perfumesTestDb";
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/perfumes", PerfumesRoutes);

try {
  mongoose.connect(`${dbUrl}${dbName}`, {}, () => {
    app.listen(
      port,
      console.log(`Server running on port ${port} -- db connection stablished `)
    );
  });
} catch (error) {
  console.log(error);
}
