import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {

  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("admin") !== "true") {
      navigate("/admin-login");
    } else {
      fetchData();
    }
  }, [navigate]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/bookings");
      setBookings(res.data);
    } catch (err) {
      console.log("Error fetching data");
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
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>

      <h5>Total Bookings: {bookings.length}</h5>

      {bookings.map((b) => (
        <div key={b._id} className="border p-3 mb-3 rounded shadow-sm">
          <p><b>Name:</b> {b.name}</p>
          <p><b>Machine:</b> {b.machine}</p>
          <p><b>Status:</b> {b.status}</p>

          <button
            className="btn btn-success me-2"
            onClick={() => markCompleted(b._id)}
          >
            Complete
          </button>

          <button
            className="btn btn-danger"
            onClick={() => deleteBooking(b._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;