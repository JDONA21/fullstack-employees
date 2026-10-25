DROP TABLE IF EXISTS employees;
--CREATE DATABASE fullstack_employees;

CREATE TABLE employees (
  id serial PRIMARY KEY,
  name text NOT NULL,
  birthday date NOT NULL,
  salary integer NOT NULL
);