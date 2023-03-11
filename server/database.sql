CREATE DATABASE perntodo;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

CREATE TABLE problem(
  problem_id SERIAL PRIMARY KEY,
  pat_problem_id INT,
  asset_id INT,
  pat_json jsonb
);