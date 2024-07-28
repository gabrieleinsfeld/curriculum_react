import { useState } from "react";
import "../Styles/Personal.css";

export default function Personal(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit() {
    submitted == false ? setSubmitted(true) : setSubmitted(false);
    console.log(submitted);
  }

  if (submitted) {
    return (
      <>
        <div id="personal-container">
          <h1>{name}</h1>
          <h4>{email}</h4>
          {!props.save && <button onClick={handleSubmit}>Edit</button>}
        </div>

        <hr />
      </>
    );
  }
  return (
    <>
      <div id="personal-container">
        <h1>Personal Section</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          action=""
        >
          <input
            placeholder="name"
            value={name}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            placeholder="email"
            value={email}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {!props.save && <button type="submit">Submit</button>}
        </form>
      </div>
    </>
  );
}
