import '../styles/style.css';
export default function Name() {
  return (
    <div className='All'>
    <div className="container">
        <h1>Your Details</h1>
      <form action="GET" className="naming-details">
        <div className="input-container">
          <label className="firstName">First Name :</label>
          <input type="text" className='input' id='firstName'/>
        </div>
        <div className="input-container">
          <label className="LastName">Last Name :</label>
          <input type="text" className='input'/>
        </div>
        <div className="input-container">
          <label className="Email">E-mail :</label>
          <input type="email" className='input'/>
        </div>
        <div className="input-container">
          <label className="phone">Contact Number :</label>
          <input type="number" className='input'/>
        </div>
      </form>
    </div>
    </div>
  );
}
