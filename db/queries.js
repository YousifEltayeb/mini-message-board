const pool = require("./pool");

async function getMessages() {
  const client = await pool.connect();
  try {
    const { rows } = await client.query("SELECT * FROM messages");
    return rows;
  } finally {
    client.release();
  }
}

async function getMessageByID(id) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(
      "SELECT * FROM messages WHERE id = $1",
      [id],
    );
    return rows;
  } finally {
    client.release();
  }
}
async function insertMessage(message) {
  const client = await pool.connect();
  try {
    await client.query(
      "INSERT INTO messages (text, username) VALUES ($1, $2)",
      [message.text, message.username],
    );
  } finally {
    client.release();
  }
}
module.exports = {
  getMessages,
  getMessageByID,
  insertMessage,
};
