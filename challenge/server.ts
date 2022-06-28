import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;

app.use(express.json());

mongoose
	.connect('mongodb+srv://Gili-Admin:rdsdyne6RdSdYnE6@cluster0.7mbcr.mongodb.net/myDB?retryWrites=true&w=majority')
	.then(() => {
		console.log(`connected to DB`);
	})
	.catch((err) => console.log(err));

app.use(express.static('public'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import userRoute from "./routes/userRoute"
app.use('/users', userRoute);