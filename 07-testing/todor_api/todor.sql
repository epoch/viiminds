CREATE DATABASE todor;

\c todor;

CREATE TABLE tasks (
  id SERIAL4 PRIMARY KEY,
  body VARCHAR(40) NOT NULL
);

