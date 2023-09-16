import "../styles/style.css";
import { useState } from "react";
// import DisplayFirstName from "../hooks/State";

export default function Name() {
  const [firstName, setFirstName] = useState("");

  const handler = (e)=>{
    setFirstName(e.target.value);
  }

  return (
    <div className="All">
      <div className="container">
        <h1>Your Details</h1>
        <form action="GET" className="naming-details">
          <div className="input-container">
            <label className="firstName" htmlFor="firstName">
              First Name : 
            </label>
            <input
              type="text"
              className="input"
              id="firstName"
              value={firstName}
              onChange={handler}
            />
            {/* <DisplayFirstName firstName = {firstName} /> */}
          </div>
          <div className="input-container">
            <label className="LastName">Last Name :</label>
            <input type="text" className="input" />
          </div>
          <div className="input-container">
            <label className="Email">E-mail :</label>
            <input type="email" className="input" />
          </div>
          <div className="input-container">
            <label className="phone">Contact Number :</label>
            <input type="number" className="input" />
          </div>
        </form>
      </div>
    </div>
  );
}
