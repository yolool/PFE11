import React, { useState } from 'react';
import axios from 'axios';

import ReactDOM from 'react-dom/client';
import "./Style.css";


const Register = () => {
  const [login, setLogin] = useState('');
  const [nom, setNom] = useState('');
  const [role, setRole] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');



  const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        // Get the CSRF token from the meta tag in your HTML
          const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Include the CSRF token in the request headers
          axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

          const response = await axios.post('http://127.0.0.1:8000/api/register', {
              login,
              nom,
              role,
              email,
              password,
              password_confirmation: passwordConfirmation
          });
          localStorage.setItem('token', response.data.access_token);
          console.log('Registration successful', response.data);
          navigate('/');
      } catch (error) {
          // Improved error handling
          if (error.response) {
              console.error('Registration failed', error.response.data);
          } else {
              console.error('Error', error.message);
          }
      }
  };

  return (
  <>
      <form onSubmit={handleSubmit}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
          <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Login" required />
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Name" required />
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Confirm Password" required />
          <button type="submit">Register</button>
      </form>
      <a href="./login">Login ...</a>
  </>

  );
};

export default Register;

if (document.getElementById('Register')) {
  const Index = ReactDOM.createRoot(document.getElementById("Register"));

  Index.render(
    <React.StrictMode>
      <Register/>
    </React.StrictMode>
  )
}
