const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

// middleware
app.use(cors())
app.use(express.json());

// routes

// create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) returning *", [description])
    return res.json(newTodo.rows[0])
  } catch (err) {
    console.log(err.message)
  }
});

// create a problem
app.post("/problem", async (req, res) => {
  console.log('********req.body: ', req.body)
  try {
    const { pat_problem_id, asset_id, pat_json, pat_json_modified } = req.body
    const newProblem = await pool.query("INSERT INTO problem (pat_problem_id, asset_id, pat_json, pat_json_modified ) VALUES($1, $2, $3, $4) returning *", [pat_problem_id, asset_id, pat_json, pat_json_modified])
    return res.json(newProblem.rows[0])
  } catch (err) {
    console.log(err.message)
  }
});

// get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * from todo");
    res.json(allTodos.rows)
  } catch (error) {
    console.error(error.message)
  }
});

// get one todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params
    const todo = await pool.query("SELECT * from todo WHERE todo_id = $1", [id])
    res.json(todo.rows[0]);
  } catch (error) {
    console.log('error: ', error.message);
  }
});

// update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { description } = req.body
    const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2 returning *", [description, id])
    res.json(updateTodo.rows[0])
  } catch (error) {
    console.log('error: ', error.message);
  }
});

// delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params
    const deletedTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]) 
    res.json(deletedTodo.rows[0])
  } catch (error) {
    console.log('error: ', error.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000")
});
