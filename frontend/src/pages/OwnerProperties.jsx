function OwnerProperties() {
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
        All Properties
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
            <th>Name</th>
            <th>Location</th>
            <th>Rent</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>2BHK House</td>
            <td>Hyderabad</td>
            <td>₹12000</td>
          </tr>

          <tr>
            <td>1BHK Apartment</td>
            <td>Bangalore</td>
            <td>₹9000</td>
          </tr>

          <tr>
            <td>3BHK Villa</td>
            <td>Chennai</td>
            <td>₹18000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OwnerProperties;
