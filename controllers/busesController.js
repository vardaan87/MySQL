import Bus from "../model/buses.js";
import { Op } from "sequelize";

// Add a new bus
const addBus = async (req, res) => {
  const { busNumber, totalSeats, availableSeats } = req.body;

  try {
    const bus = await Bus.create({
      busNumber,
      totalSeats,
      availableSeats,
    });
    res.status(201).json({
      message: `Bus ${busNumber} added successfully`,
      bus,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get buses with more than specified available seats
const getBuses = async (req, res) => {
  const seats = Number(req.params.seats);

  const buses = await Bus.findAll({
    where: {
      availableSeats: {
        [Op.gt]: seats,
      },
    },
  });
  res.status(200).json(buses);
};

export { addBus, getBuses };
