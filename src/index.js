import morgan from "morgan"
import express from "express"
const app = express()

app.use(morgan("combined"))

// app.get("/", (req, res) => {
//   res.status(200).send({
//     message: "Hello from server side",
//     app: "Natours",
//   })
// })

// app.post("/", (req, res) => {
//   res.send("You can now post this routes")
// })

app.get("/api/v1/tours", (req, res) => {})

app.listen(3000, () => {
  console.log("Listening on port 3000")
})
