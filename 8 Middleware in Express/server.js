const express = require("express");
const app = express();

// parsing karni hoti hai
app.use(express.json());
// middleware: json format data --> JS object

const books = [
  {
    id: 1,
    title: "reactjs",
    author: "ram",
  },
  {
    id: 2,
    title: "nodejs",
    author: "rohit",
  },
  {
    id: 3,
    title: "nextjs",
    author: "pankaj",
  },
];

app.get("/book", (req, res) => {
  res.json({
    books,
    message: "data recived Successfully",
  });
});

app.get("/book/:id", (req, res) => {
  const id = parseInt(req.params.id);
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

app.patch("/book", (req, res) => {
  const id = req.body.id;

  const updateData = books.find((book) => book.id == id);

  if (req.body.title) updateData.title = req.body.title;
  if (req.body.author) updateData.author = req.body.author;

  res.send("updated");
});

app.put("/book", (req, res) => {
  const id = req.body.id;

  const updateData = books.find((book) => book.id == id);

  updateData.title = req.body.title;
  updateData.author = req.body.author;

  res.send("updated put");
});

app.delete("/book/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const idx = books.findIndex((info) => info.id === id);
  books.splice(idx, 1);

  res.send(`deleted ${id}`);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
