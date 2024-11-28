const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js")
const productRoute = require("./routes/product.route.js")
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

// routes
app.use("/api/products", productRoute)


app.get("/", (req,res) => {
    res.send("Hello from node api server");
});

// sZ8slrSHfiFykJCY
mongoose.connect('mongodb+srv://admin:sZ8slrSHfiFykJCY@cluster0.hxsnj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> {
    console.log("Connected to database");
    app.listen(3000, ()=> {
        console.log("The Server is running at port 3000")
    });

})
.catch(()=> {
    console.log("connection failed")
})
