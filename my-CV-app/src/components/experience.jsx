import "../styles/style.css";

export default function Work() {
  return (
    <div className="container">
      <h1>Work Experience</h1>
      <form action="get" className='naming-details'>
      <div className="input-container">
        <label className="company-name">Company Name :</label>
        <input type="text" />
      </div>
      <div className="input-container">
        <label className="Duration">From :</label>
        <input type="date" />
      </div>
      <div className="input-container">
        <label className="Duration">To :</label>
        <input type="date" />
      </div>
      <div className="input-container">
        <label className="Position">Position :</label>
        <input type="text" />
      </div>
      <div className="input-container">
        <label className="Location">Location :</label>
        <input type="text" />
      </div>
      </form>
    </div>
  );
}
