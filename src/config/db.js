const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, "../../.env")});

const connectDB = async () => {
    try {
        await
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB conectado!");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB!", error.message
        );
        process.exit(1);
    }
};

connectDB();

module.exports = connectDB;