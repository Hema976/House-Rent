function AdminProperties() {
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
        Admin - All Properties
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
            <th style={th}>Location</th>
            <th style={th}>Rent</th>
            <th style={th}>Owner</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={td}>2BHK House</td>
            <td style={td}>Hyderabad</td>
            <td style={td}>₹12,000</td>
            <td style={td}>Hema</td>
          </tr>

          <tr>
            <td style={td}>1BHK Apartment</td>
            <td style={td}>Bangalore</td>
            <td style={td}>₹9,000</td>
            <td style={td}>Ravi</td>
          </tr>

          <tr>
            <td style={td}>3BHK Villa</td>
            <td style={td}>Chennai</td>
            <td style={td}>₹18,000</td>
            <td style={td}>Priya</td>
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

export default AdminProperties;
