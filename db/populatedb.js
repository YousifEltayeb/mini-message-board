#! /usr/bin/env node
const { argv } = require("node:process");

const { Client } = require("pg");

require("dotenv").config();
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const DB_URL = argv[2];
const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT,
  username VARCHAR ( 255 ),
  added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, username) 
VALUES ('Hi there!', 'Amando'),
       ('Hello World!', 'Charles')
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: DB_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
