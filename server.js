import User from "./models/User.js";
import Company from "./models/Company.js";

import express from 'express';
// const express = require("express");
const app = express();
const port = 8000;

// Middleware
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// * Redirect to /api

app.get("", (req, res) => {
  res.redirect("/api");
});

// * Fake API Welcome

app.get("/api", (req, res) => {
  res.send(`
  <h2>Welcome to Fake API (Core)</h2>
  <ul>
    <li>Go to <a href="api/users/new">/api/users/new</a> to get a new User</li>
    <li>Go to <a href="api/companies/new">/api/companies/new</a> to get a new Company</li>
    <li>Go to <a href="api/user/company">/api/user/company</a> to get a new User and Company</li>
  </ul>
  `);
});

// * New User

app.get("/api/users/new", (req, res) => {
  const user = new User();
  res.json(user);
});

// * New Company

app.get("/api/companies/new", (req, res) => {
  const company = new Company();
  res.json(company);
});

// * New User and Company

app.get("/api/user/company", (req, res) => {
  const user = new User();
  const company = new Company();
  res.json({...user, company: company});
})

// * Listen to Port

const server = app.listen(port, () =>
  console.log(`Fake API (Core) on port ${server.address().port}!`)
);