import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';

const ThankYouPage = ({ name, email, dob }) => {
  return (
    <div>
      <h2>Thank you for subscribing!</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Date of Birth: {dob}</p>
    </div>
  );
};

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', dob: '' });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/thank-you?name=${formData.name}&email=${formData.email}&dob=${formData.dob}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      
      <label>Date of Birth:</label>
      <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
      
      <button type="submit">Submit</button>
    </form>
  );
};


export default App;
