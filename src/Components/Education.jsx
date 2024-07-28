import { useState } from "react";

export default function Education(props) {
  const [submitted, setSubmitted] = useState(false);
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [concentration, setConcentration] = useState("");

  function handleClick() {
    submitted == false ? setSubmitted(true) : setSubmitted(false);
  }
  if (submitted) {
    return (
      <>
        <h4>Education</h4>
        <span>{school}</span>
        <span>{degree}</span>
        <span>{concentration}</span>
        {!props.save && <button onClick={handleClick}>Edit</button>}
      </>
    );
  }
  return (
    <>
      <h4>Education</h4>
      <input
        type="text"
        value={school}
        placeholder="Name of School"
        onChange={(e) => {
          setSchool(e.target.value);
        }}
      />
      <input
        type="text"
        value={degree}
        placeholder="Degree/title"
        onChange={(e) => {
          setDegree(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Concentration"
        value={concentration}
        onChange={(e) => {
          setConcentration(e.target.value);
        }}
      />
      {!props.save && <button onClick={handleClick}>Submit</button>}
    </>
  );
}
