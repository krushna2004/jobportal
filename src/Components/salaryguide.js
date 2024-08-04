import React, { useState } from 'react';
import './salaryguide.css';

const jobTitles = [
  { id: 1, title: 'Software Engineer', averageSalary: '₹10,00,000' },
  { id: 2, title: 'Data Scientist', averageSalary: '₹12,00,000' },
  { id: 3, title: 'Product Manager', averageSalary: '₹15,00,000' },
  { id: 4, title: 'Graphic Designer', averageSalary: '₹7,00,000' },
  // Add more job titles and salaries as needed
];

const SalaryGuide = () => {
  const [selectedJob, setSelectedJob] = useState(jobTitles[0]);

  const handleJobSelection = (e) => {
    const job = jobTitles.find(job => job.title === e.target.value);
    setSelectedJob(job);
  };

  return (
    <div className="salary-guide-container">
      <h3>Salary Guide</h3>
      <div className="salary-guide-content">
        <div className="job-selection">
          <label htmlFor="job-title">Select a Job Title:</label>
          <select id="job-title" onChange={handleJobSelection} value={selectedJob.title}>
            {jobTitles.map(job => (
              <option key={job.id} value={job.title}>{job.title}</option>
            ))}
          </select>
        </div>
        <div className="salary-info">
          <h4>Average Salary for {selectedJob.title}</h4>
          <p>{selectedJob.averageSalary}</p>
        </div>
      </div>
    </div>
  );
};

export default SalaryGuide;
