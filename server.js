const express = require("express")
const container = require('./di-container');
const connectDB = require('./database');

const app = express()
app.use(express.json())

connectDB();


const userRoutes = require('./routes/user-routes')(container.cradle);
app.use('/api/users', userRoutes);


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})