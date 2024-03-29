import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import bookRoute from "./routes/book.route.js"; 

const app = express();
dotenv.config();
// mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGO_DB,{
  useNewUrlParser:true,useUnifiedTopology:true
}  
).then(()=>app.listen(process.env.PORT,    
()=>console.log(`Listening at ${process.env.PORT}`)
)
)
.catch((error)=>console.log(error));

// Serve static files from the "public" folder
app.use(express.static('public'));



const corsOptions={
  origin:"https://nayan-frontend.onrender.com"
}

app.use(cors({ origin: corsOptions, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// route
app.get("/api/",(req,res)=>{
  res.status(201).json({message:"Connected to backend"})
})

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/book",bookRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});


