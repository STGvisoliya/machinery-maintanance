import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("admin") !== "true") {
      navigate("/admin-login");
      return;
    }

    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/bookings");
      setBookings(res.data);
    } catch (error) {
      console.log("Error fetching bookings");
    }
  };

  const markCompleted = async (id) => {
    await axios.put(`http://localhost:5000/api/book/${id}`, {
      status: "Completed"
    });
    fetchData();
  };

  const deleteBooking = async (id) => {
    await axios.delete(`http://localhost:5000/api/book/${id}`);
    fetchData();
  };

  return (
    <div className="container mt-5 mb-5">
      <h2>Admin Dashboard</h2>
      <h5>Total Requests: {bookings.length}</h5>

      {bookings.map((booking) => (
        <div key={booking._id} className="border p-3 mb-3 rounded shadow-sm bg-white">
          <p><b>Name:</b> {booking.name}</p>
          <p><b>Company:</b> {booking.company}</p>
          <p><b>Email:</b> {booking.email || "-"}</p>
          <p><b>Service:</b> {booking.serviceType || "-"}</p>
          <p><b>Instrument:</b> {booking.instrumentType || booking.machine}</p>
          <p><b>Status:</b> {booking.status}</p>

          <button
            className="btn btn-success me-2"
            onClick={() => markCompleted(booking._id)}
          >
            Complete
          </button>

          <button
            className="btn btn-danger"
            onClick={() => deleteBooking(booking._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;
