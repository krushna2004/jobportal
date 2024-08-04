import React, { useState } from 'react';
import './companyreview.css';

const initialCompaniesData = [
  { id: 1, name: 'Google', logo: 'google-logo.png', review: 4.5 },
  { id: 2, name: 'Facebook', logo: 'facebook-logo.png', review: 4.0 },
  { id: 3, name: 'Amazon', logo: 'amazon-logo.png', review: 4.2 },
  { id: 4, name: 'Apple', logo: 'apple-logo.png', review: 4.8 },
  // Add more companies as needed
];

const CompanyReview = () => {
  const [companies, setCompanies] = useState(initialCompaniesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState(companies);
  const [reviewForm, setReviewForm] = useState({ companyName: '', stars: 0, description: '' });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    const term = searchTerm.toLowerCase();
    setFilteredCompanies(
      companies.filter(company =>
        company.name.toLowerCase().includes(term)
      )
    );
  };

  const handleReviewFormChange = (e) => {
    const { name, value } = e.target;
    setReviewForm({ ...reviewForm, [name]: value });
  };

  const handleAddReview = () => {
    const { companyName, stars, description } = reviewForm;
    const companyIndex = companies.findIndex(company => company.name.toLowerCase() === companyName.toLowerCase());

    if (companyIndex !== -1) {
      const newReview = {
        id: companies.length + 1,
        name: companyName,
        logo: companies[companyIndex].logo,
        review: parseFloat(stars),
        description,
      };
      const updatedCompanies = [...companies, newReview];
      setCompanies(updatedCompanies);
      setFilteredCompanies(updatedCompanies);
      setReviewForm({ companyName: '', stars: 0, description: '' });
    } else {
      alert('Company not found');
    }
  };

  return (
    <div className="company-review-container">
      <h3>Company Reviews</h3>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by company name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <div className="content-container">
        <div className="company-list">
          {filteredCompanies.map(company => (
            <div key={company.id} className="company">
              <img src={company.logo} alt={`${company.name} logo`} className="company-logo" />
              <div className="company-details">
                <h4>{company.name}</h4>
                <div className="company-review">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={i < company.review ? 'star filled' : 'star'}>★</span>
                  ))}
                  <span className="review-score">{company.review}</span>
                </div>
                {company.description && <p className="company-description">{company.description}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="add-review">
          <h4>Add Review</h4>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={reviewForm.companyName}
            onChange={handleReviewFormChange}
          />
          <input
            type="number"
            name="stars"
            placeholder="Stars (0-5)"
            value={reviewForm.stars}
            onChange={handleReviewFormChange}
            max="5"
            min="0"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={reviewForm.description}
            onChange={handleReviewFormChange}
          />
          <button onClick={handleAddReview}>Add Review</button>
        </div>
      </div>
    </div>
  );
};

export default CompanyReview;
