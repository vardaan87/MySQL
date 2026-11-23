import Booking from "../model/booking.js";
import User from "../model/user.js";

const addBooking = async (req, res) => {
  try {
    const { seatNumber, UserId } = req.body;

    const booking = await Booking.create({
      seatNumber,
      UserId,
    });

    res.status(201).json({
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      include: {
        model: User,
      },
    });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addBooking, getAllBookings };
