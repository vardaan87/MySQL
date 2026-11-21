import db from "../utils/db-connection.js";

const addUser = (req, res) => {
  const { name, email } = req.body;
  const insertQuery = "INSERT INTO users (name,email) VALUES (?,?)";

  db.execute(insertQuery, [name, email], (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    console.log("Value has been inserted");
    res.status(200).send(`User with name ${name} successfully added.`);
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const updateQuery = "UPDATE users SET name = ?, email = ? WHERE id = ?";

  db.execute(updateQuery, [name, email, id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).send("User not found");
      return;
    }
    res.status(200).send("User has been updated");
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  const deleteQuery = "DELETE FROM users WHERE id = ?";

  db.execute(deleteQuery, [id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
    }

    if (result.affectedRows === 0) {
      res.send(404).send("User not found");
      return;
    }

    res.status(200).send(`User with ${id} deleted.`);
  });
};

export { addUser, updateUser, deleteUser };
