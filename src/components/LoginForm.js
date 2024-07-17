// import React, { useState } from 'react';
// import './LoginForm.css';

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     userName: '',
//     password: '',
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Login data:', formData);
//     setSubmitted(true);
//   };

//   return (
//     <div className="login-form-container">
//       <h2>Login</h2>
//       {submitted ? (
//         <div className="success-message">Login successful!</div>
//       ) : (
//         <form onSubmit={handleSubmit} className="login-form">
//           <div className="form-group">
//             <label htmlFor="userName">User Name:</label>
//             <input
//               type="text"
//               id="userName"
//               name="userName"
//               value={formData.userName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">Login</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default LoginForm;






// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './LoginForm.css';

// const LoginForm = ({ onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginSuccess, setLoginSuccess] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Perform login logic, e.g., API call
//     // Assuming login is successful
//     setLoginSuccess(true);
//     onLoginSuccess();
//     setTimeout(() => {
//       navigate('/home');
//     }, 1000); // 1 second delay before redirecting to the Home page
//   };

//   return (
//     <div className="login-form-container">
//       {loginSuccess ? (
//         <h2>Login successful!</h2>
//       ) : (
//         <form onSubmit={handleLogin}>
//           <h2>Login</h2>
//           <div className="input-container">
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-container">
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default LoginForm;






// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './LoginForm.css';

// const LoginForm = ({ onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginSuccess, setLoginSuccess] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Perform login logic, e.g., API call
//     // Assuming login is successful
//     setLoginSuccess(true);
//     onLoginSuccess();
//     setTimeout(() => {
//       navigate('/home');
//     }, 1000); // 1 second delay before redirecting to the Home page
//   };

//   return (
//     <div className="login-form-container">
//       {loginSuccess ? (
//         <h2>Login successful!</h2>
//       ) : (
//         <form onSubmit={handleLogin}>
//           <h2>Login</h2>
//           <div className="input-container">
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-container">
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default LoginForm;








import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic, e.g., API call
    // Assuming login is successful
    setLoginSuccess(true);
    onLoginSuccess();
    setTimeout(() => {
      navigate('/home');
    }, 1000); // 1 second delay before redirecting to the Home page
  };

  return (
    <div className="login-form-container">
      {loginSuccess ? (
        <h2>Login successful!</h2>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="input-container">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
