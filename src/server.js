const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const animalRoutes = require("./routes/animalRoutes");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api', animalRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))