const express = require("express");
const cors = require("cors");
const patientRoutes = require("./routes/patientRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("ElderCare Tracker backend running"));
app.use("/api/patients", patientRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
