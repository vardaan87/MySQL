import db from "../utils/db-connection.js";

// Add a new bus
const addBus = (req, res) => {
  const { busNumber, totalSeats, availableSeats } = req.body;

  const insertQuery = `
    INSERT INTO buses (busNumber, totalSeats, availableSeats)
    VALUES (?, ?, ?)
  `;

  db.execute(
    insertQuery,
    [busNumber, totalSeats, availableSeats],
    (err, result) => {
      if (err) {
        console.log(err.message);
        return res.status(500).send(err.message);
      }

      console.log("New Bus Detail has been added");

      res.status(201).json({
        message: "Bus added successfully",
        busId: result.insertId,
      });
    },
  );
};

// Get buses with more than specified available seats
const getAvailableBuses = (req, res) => {
  const seats = Number(req.params.seats);

  const selectQuery = `
    SELECT *
    FROM buses
    WHERE availableSeats > ?
  `;

  db.execute(selectQuery, [seats], (err, result) => {
    if (err) {
      console.log(err.message);
      return res.status(500).send(err.message);
    }

    res.status(200).send(result);
  });
};

export { addBus, getAvailableBuses };
