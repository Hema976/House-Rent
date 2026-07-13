function OwnerBookings() {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#7c5cff",
          marginBottom: "30px",
        }}
      >
        All Bookings
      </h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#1e293b",
        }}
      >
        <thead>
          <tr style={{ background: "#7c5cff" }}>
            <th style={th}>Property</th>
            <th style={th}>Tenant</th>
            <th style={th}>Phone</th>
            <th style={th}>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={td}>2BHK House</td>
            <td style={td}>Rahul</td>
            <td style={td}>9876543210</td>
            <td style={td}>Booked</td>
          </tr>

          <tr>
            <td style={td}>1BHK Apartment</td>
            <td style={td}>Priya</td>
            <td style={td}>9123456780</td>
            <td style={td}>Pending</td>
          </tr>

          <tr>
            <td style={td}>3BHK Villa</td>
            <td style={td}>Kiran</td>
            <td style={td}>9988776655</td>
            <td style={td}>Booked</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const th = {
  padding: "12px",
  border: "1px solid white",
};

const td = {
  padding: "12px",
  border: "1px solid #555",
  textAlign: "center",
};

export default OwnerBookings;
