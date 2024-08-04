import React, { useState } from 'react';
import './home.css';

const jobsData = [
  { id: 1, position: 'Software Engineer', experience: '1 year', salary: '30000', city: 'New York' },
  { id: 2, position: 'Data Scientist', experience: '3 years', salary: '50000', city: 'San Francisco' },
  { id: 3, position: 'UI/UX Designer', experience: 'Fresher', salary: '25000', city: 'Los Angeles' },
  // Add more job listings as needed
];

const Home = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  const filterJobs = (filters) => {
    let filtered = jobsData;
    if (filters.experience) {
      filtered = filtered.filter(job => {
        if (filters.experience === 'fresher') return job.experience.toLowerCase() === 'fresher';
        if (filters.experience === 'up to 2 years') return parseInt(job.experience) <= 2;
        if (filters.experience === 'more than 2 years') return parseInt(job.experience) > 2;
        return true;
      });
    }
    if (filters.salary) {
      filtered = filtered.filter(job => {
        if (filters.salary === 'up to 10000') return parseInt(job.salary) <= 10000;
        if (filters.salary === '10000-30000') return parseInt(job.salary) > 10000 && parseInt(job.salary) <= 30000;
        if (filters.salary === 'more than 30000') return parseInt(job.salary) > 30000;
        return true;
      });
    }
    if (filters.city) {
      filtered = filtered.filter(job => job.city.toLowerCase() === filters.city.toLowerCase());
    }
    setFilteredJobs(filtered);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    filterJobs({ [name]: value });
  };

  return (
    <div className="home-container">
      <div className="filters">
        <h3>Filters</h3>
        <div className="filter">
          <label>Work Experience</label>
          <select name="experience" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="fresher">Fresher</option>
            <option value="up to 2 years">Up to 2 years</option>
            <option value="more than 2 years">More than 2 years</option>
          </select>
        </div>
        <div className="filter">
          <label>Salary</label>
          <select name="salary" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="up to 10000">Up to 10000</option>
            <option value="10000-30000">10000-30000</option>
            <option value="more than 30000">More than 30000</option>
          </select>
        </div>
        <div className="filter">
          <label>City</label>
          <select name="city" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="New York">New York</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Los Angeles">Los Angeles</option>
            {/* Add more cities as needed */}
          </select>
        </div>
      </div>
      <div className="job-listings">
        <h3>Job Openings</h3>
        {filteredJobs.map(job => (
          <div key={job.id} className="job">
            <h4>{job.position}</h4>
            <p>Experience: {job.experience}</p>
            <p>Salary: {job.salary}</p>
            <p>City: {job.city}</p>
            <button>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
