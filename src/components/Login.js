// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <h2>Login</h2>
//       <div>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       </div>
//       <button type="submit">Login</button>
//       <p>
//         Don't have an account? <Link to="/register">Register here</Link>
//       </p>
//     </form>
//   );
// };

// export default Login;







// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';

// const Login = ({ onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginSuccess, setLoginSuccess] = useState(false);
//   const history = useHistory();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Perform login logic, e.g., API call
//     // Assuming login is successful
//     setLoginSuccess(true);
//     onLoginSuccess();
//     setTimeout(() => {
//       history.push('/home');
//     }, 1000); // 2 seconds delay before redirecting to the Home page
//   };

//   return (
//     <div>
//       {loginSuccess ? (
//         <h2>Login successful!</h2>
//       ) : (
//         <form onSubmit={handleLogin}>
//           <h2>Login</h2>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//           <p>
//             Don't have an account? <Link to="/register">Register here</Link>
//           </p>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Login;




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
//     <div>
//       {loginSuccess ? (
//         <h2>Login successful!</h2>
//       ) : (
//         <form onSubmit={handleLogin}>
//           <h2>Login</h2>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//           <p>
//             Don't have an account? <Link to="/register">Register here</Link>
//           </p>
//         </form>
//       )}
//     </div>
//   );
// };

// export default LoginForm;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    <div>
      {loginSuccess ? (
        <h2>Login successful!</h2>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </form>
      )}
    </div>
  );
};

export default LoginForm;

