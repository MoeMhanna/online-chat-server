const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://hamoud:4MuTZs8YoC2SrcJP@atlascluster.4krdcpb.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster")
    .then(() => {
        console.log("connected to database successfully");
    })
    .catch((err) => {
        console.log(err)
    });

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})