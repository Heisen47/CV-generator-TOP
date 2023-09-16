import "../styles/style.css";

export default function Skills() {
  const handleFileUpload = () => {
    document.getElementById("fileInput").click();
  };
  return (
    <>
      <div className="cv-container">
        <div className="skill-list">
          <h1 className="cv-header">Your Skills </h1>
          <textarea
            name="skills"
            id="skills"
            cols="50"
            rows="3"
            className="naming-details"
          ></textarea>
        </div>
        <div className="CV">
          <h1 className="upload">Image </h1>
          <input type="file" id="fileInput" style={{ display: "none" }} ></input>
          <button id="btn" onClick={handleFileUpload}>
            Upload
          </button>
        </div>
      </div>
      <button id="btn-delete"> Delete</button>
    </>
  );
}
