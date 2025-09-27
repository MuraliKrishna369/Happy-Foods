const express = require("express")

const cors = require("cors")
const restaurantRouter = require("./routes/restaurants")


const app = express()
app.use(cors({
    origin: "http://localhost:1234",
    credentials: true
}))


app.use("/", restaurantRouter)


app.listen(7777, () => {
    console.log("Server running on port 7777")
})