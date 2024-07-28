import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Experience(props) {
  const [experiences, setExperiences] = useState([]);
  const [keys, setKeys] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit() {
    submitted == false ? setSubmitted(true) : setSubmitted(false);
    console.log(submitted);
  }

  function addItem() {
    let expArray = [...experiences];
    expArray.push({
      experience: "",
      title: "",
      desc1: "",
      desc2: "",
      desc3: "",
    });
    setExperiences(expArray);
    let keysArray = [...keys];
    keysArray.push([uuidv4(), uuidv4()]);
    setKeys(keysArray);
  }

  return (
    <>
      {!submitted ? (
        <h4>Experience</h4>
      ) : (
        experiences.length == 0 && <h4>Experience</h4>
      )}

      {submitted
        ? experiences &&
          experiences.map((experience, index) => {
            return (
              <div key={keys[index][1]}>
                <h4>{experiences[index]["experience"]}</h4>
                <span>{experiences[index]["title"]}</span>
                <ul>
                  <li>{experiences[index]["desc1"]}</li>
                  <li>{experiences[index]["desc2"]}</li>
                  <li>{experiences[index]["desc3"]}</li>
                </ul>
              </div>
            );
          })
        : experiences &&
          experiences.map((experience, index) => {
            return (
              <div key={keys[index][1]}>
                <input
                  value={experiences[index]["experience"]}
                  type="text"
                  placeholder="Experience"
                  onChange={(e) => {
                    const array = [...experiences];
                    array[index]["experience"] = e.target.value;
                    setExperiences(array);
                  }}
                />
                <input
                  type="text"
                  placeholder="Job title and date "
                  value={experiences[index]["title"]}
                  onChange={(e) => {
                    console.log(e.target.value);
                    const array = [...experiences];
                    array[index]["title"] = e.target.value;
                    setExperiences(array);
                  }}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={experiences[index]["desc1"]}
                  onChange={(e) => {
                    console.log(e.target.value);
                    const array = [...experiences];
                    array[index]["desc1"] = e.target.value;
                    setExperiences(array);
                  }}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={experiences[index]["desc2"]}
                  onChange={(e) => {
                    console.log(e.target.value);
                    const array = [...experiences];
                    array[index]["desc2"] = e.target.value;
                    setExperiences(array);
                  }}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={experiences[index]["desc3"]}
                  onChange={(e) => {
                    console.log(e.target.value);
                    const array = [...experiences];
                    array[index]["desc3"] = e.target.value;
                    setExperiences(array);
                  }}
                />
              </div>
            );
          })}
      {!props.save && (
        <button onClick={handleSubmit}>{submitted ? "Edit" : "Submit"}</button>
      )}
      {!props.save && <button onClick={addItem}>Add</button>}
    </>
  );
}
