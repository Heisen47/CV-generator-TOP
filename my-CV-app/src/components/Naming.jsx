import '../styles/style.css';
export default function Name() {
  return (
    <div className="container">
        <h1>Your Details</h1>
      <form action="GET" className="naming-details">
        <div className="input-container">
          <label className="firstName">First Name :</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label className="LastName">Last Name :</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label className="Email">E-mail :</label>
          <input type="email" />
        </div>
        <div className="input-container">
          <label className="phone">Contact Number :</label>
          <input type="number" />
        </div>
      </form>
    </div>
  );
}
