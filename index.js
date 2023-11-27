import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { generateRandomData } from "./test.js";
const __dirname = dirname(fileURLToPath(import.meta.url));
var blogs = generateRandomData();

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {blog_list: blogs});
});

app.get("/write", (req, res)=>{
  res.render("write.ejs");
});

app.post("/written", (req, res)=>{
  var data = req.body;
  data.date = new Date();
  data.date_modified = NaN;
  blogs.push(data);
  res.redirect("/");
});

app.post("/delete", (req, res)=>{
  var data = req.body;
  console.log(data["idx"] - '0');
  blogs.splice(data["idx"] - '0', 1);
  res.redirect("/");
});

app.post("/read", (req, res)=>{
  var data = req.body["idx"] - '0';
  
  res.render("read.ejs", {blog: blogs[data]});
});

app.post("/edit", (req, res)=>{
  var data = req.body["idx"] - '0';
  
  res.render("edit.ejs", {blog: blogs[data], idx:data});
});

app.post("/edited", (req, res)=> {
  var data = req.body;
  blogs[data.idx].title = data.title;
  blogs[data.idx].content = data.content;
  blogs[data.idx].date_modified = new Date();
  // console.log(blogs[data.idx]);
  // res.redirect("back");
  // res.render("index.ejs", {blog_list: blog});
  res.redirect(200, "/edit");
});
var todo = [];
// to do list.
app.get("/todo", (req, res)=>{
  res.render("todo.ejs", {todo:todo});
});
// add task
app.post("/task", (req, res)=>{
  var data = req.body;
  console.log(data);
  data.date = new Date();
  todo.push(data);
  
  res.redirect("/todo");
});

app.post("/deleteTask", (req, res)=> {
  var data = req.body["idx"] - '0';
  console.log(data);
  todo.splice(data, 1);
  res.redirect("/todo");
});

app.post("/editTask", (req, res)=>{
  var data = req.body["idx"] - '0';
  res.render("todo_edit_task.ejs", {todo_list:todo, idx:data});
});
app.post("/editedTask", (req, res)=>{
  var data = req.body;
  todo[data["idx"] - '0']["task"] = data["task"]
  console.log(data);
  res.redirect("/todo");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});