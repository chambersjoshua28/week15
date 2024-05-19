import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const Finance102 = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make a POST request to the API endpoint with form data
      const response = await axios.post('https://6645732cb8925626f891e78f.mockapi.io/PC/finance102', {
        name: name,
        review: review
      });
      console.log('Submission successful:', response.data);
      // Reset form fields after submission
      setName('');
      setReview('');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <h2>Finance 102</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Finance102;
