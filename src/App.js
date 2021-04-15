import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const { title, dates, duties, company } = jobs[value];
  return (
    <section className="container">
      <div>
        <h1>Experience</h1>
      </div>
      {/* button component */}
      <div className="btn-container">
        {jobs.map((job, index) => {
          return (
            <button
              className={`btn ${index === value && "btn-active"} `}
              onClick={() => {
                setValue(index);
              }}
            >
              {job.company}
            </button>
          );
        })}
      </div>
      {/* jobs component */}
      <div className="job">
        <div className="job-title">
          <h2>{title}</h2>
          <p>{dates}</p>
        </div>
        <div className="job-duties">
          {duties.map((duty) => {
            return (
              <ul>
                <li>{duty}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
