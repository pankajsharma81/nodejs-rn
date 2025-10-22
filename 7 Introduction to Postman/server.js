const express = require("express");
const app = express();

// parsing karni hoti hai
app.use(express.json());
// middleware: json format data --> JS object

const books = [
  {
    id: 1,
    title: "reactjs",
    writer: "ram",
  },
  {
    id: 2,
    title: "nodejs",
    writer: "rohit",
  },
  {
    id: 3,
    title: "nextjs",
    writer: "pankaj",
  },
];

app.get("/book", (req, res) => {
  res.json({
    books,
    message: "data recived Successfully",
  });
});

app.get("/book/:id", (req, res) => {
  const id = req.params.id;
  const book = books.find((book) => book.id == id);
  res.json({
    book,
  });
});

app.post("/book", (req, res) => {
  const data = req.body;
  books.push(data);
  res.json({
    message: "data sended successfully",
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

// app.get("/user", (req, res) => {
//   res.json("getted user data");
// });

// app.post("/user", (req, res) => {
//   console.log(req.body);
//   res.json("sended user data");
// });
