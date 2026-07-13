function AdminBookings() {
  const bookings = [
    {
      property: "2BHK House",
      tenant: "Rahul",
      amount: "₹12000",
      status: "Paid",
    },
    {
      property: "1BHK Apartment",
      tenant: "Priya",
      amount: "₹9000",
      status: "Pending",
    },
  ];

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#7c5cff" }}>
        Admin - All Bookings
      </h1>

      <table
        style={{
          width: "100%",
          marginTop: "30px",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr style={{ background: "#7c5cff" }}>
            <th style={th}>Property</th>
            <th style={th}>Tenant</th>
            <th style={th}>Amount</th>
            <th style={th}>Status</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b, i) => (
            <tr key={i}>
              <td style={td}>{b.property}</td>
              <td style={td}>{b.tenant}</td>
              <td style={td}>{b.amount}</td>
              <td style={td}>{b.status}</td>
            </tr>
          ))}
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

export default AdminBookings;
