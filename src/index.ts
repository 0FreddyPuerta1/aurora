import express from "express";
import cors from "cors";
import helmet from "helmet";
import "dotenv/config";
import userRoutes from "./routes/userRoutes";

export const server = express();

const createServer = async () => {
  const corsOptions = {
    origin: ["*"],
    credentials: true,
  };

  const { API_PORT } = process.env;

  server.set("port", API_PORT || 3004);
  server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    next();
  });
  server.use(cors(corsOptions));
  server.use(helmet());
  server.use(express.json());
  server.use("/api/users", userRoutes);

  try {
    server.listen(server.get("port"), () => {
      console.log(`The server is running on port: ${server.get("port")}`);
    });
  } catch (error) {
    console.log(error);
  }
};

createServer();
