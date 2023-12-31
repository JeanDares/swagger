const express = require("express")
const cors = require("cors")
const morgan = require("morgan");
const low = require("lowdb")
const sistemasRouter = require("./routes/sistemas")

const PORT = process.env.PORT || 4000;

const FileSync = require("lowdb/adapters/FileSync")

const adapter = new FileSync("db.json")
const db = low(adapter)

db.defaults({ sistemas: []}).write()

const app = express()

app.db = db

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.use("/sistemas",sistemasRouter)

app.listen(PORT,() => console.log(`The server is running o port ${PORT}`))

