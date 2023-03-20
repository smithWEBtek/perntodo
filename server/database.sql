CREATE DATABASE perntodo2;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

CREATE TABLE problem(
  problem_id SERIAL PRIMARY KEY,
  pat_problem_id INT,
  asset_id INT,
  pat_json jsonb,
  pat_json_modified jsonb
);

ALTER TABLE problem
ADD COLUMN pat_json_modified json;