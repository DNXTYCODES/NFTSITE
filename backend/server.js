import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import newsletterRouter from "./routes/newsletterRoute.js"; // Import newsletter route
import playerRouter from "./routes/playerRoute.js"; // Import player route
import solarPackageRouter from "./routes/solarPackageRoute.js"; // Import solar package route

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API Endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/newsletter", newsletterRouter); // Add newsletter route
app.use("/api/player", playerRouter); // Add player route
app.use("/api/solarpackage", solarPackageRouter); // Add solar package route

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Server started on PORT : " + port));