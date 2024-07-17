// src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1 className="navbar-logo">E-Learning</h1>
//       <ul className="navbar-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/register">Registration</Link></li>
//         <li><Link to="/login">Login</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



























// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = ({ isLoggedIn }) => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/home">E-Learning Portal</Link>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/home">Home</Link></li>
//         {isLoggedIn ? (
//           <>
//             <li><Link to="/profile">Profile</Link></li>
//             <li><Link to="/logout">Logout</Link></li>
//           </>
//         ) : (
//           <>
//             <li><Link to="/register">Registration</Link></li>
//             <li><Link to="/login">Login</Link></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;









// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = ({ isLoggedIn }) => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/home">MyApp</Link>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/home">Home</Link></li>
//         {isLoggedIn ? (
//           <>
//             <li><Link to="/profile">Profile</Link></li>
//             <li><Link to="/logout">Logout</Link></li>
//           </>
//         ) : (
//           <>
//             <li><Link to="/register">Registration</Link></li>
//             <li><Link to="/login">Login</Link></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;







// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = ({ isLoggedIn }) => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/home">MyApp</Link>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/home">Home</Link></li>
//         {isLoggedIn ? (
//           <>
//             <li><Link to="/profile">Profile</Link></li>
//             <li><Link to="/logout">Logout</Link></li>
//           </>
//         ) : (
//           <>
//             <li><Link to="/register">Registration</Link></li>
//             <li><Link to="/login">Login</Link></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
















// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = ({ isLoggedIn }) => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/home">MyApp</Link>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/home">Home</Link></li>
//         {isLoggedIn ? (
//           <>
//             <li><Link to="/profile">Profile</Link></li>
//             <li><Link to="/logout">Logout</Link></li>
//           </>
//         ) : (
//           <>
//             <li><Link to="/register">Registration</Link></li>
//             <li><Link to="/login">Login</Link></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;







// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = ({ isLoggedIn, onLogout }) => {
//   const navigate = useNavigate();

//   const handleLogoutClick = () => {
//     onLogout();
//     navigate('/home');
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <h2>E-Learning Portal</h2>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/home">Home</Link></li>
//         {isLoggedIn ? (
//           <>
//             <li><Link to="/profile">Profile</Link></li>
//             <li><button onClick={handleLogoutClick}>Logout</button></li>
//           </>
//         ) : (
//           <>
//             <li><Link to="/register">Registration</Link></li>
//             <li><Link to="/login">Login</Link></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;







// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = ({ isLoggedIn, onLogout, currentPage }) => {
//   const navigate = useNavigate();

//   const handleLogoutClick = () => {
//     onLogout();
//     navigate('/home');
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <h2>E-Learning Portal</h2>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/home">Home</Link></li>
//         {isLoggedIn && currentPage === 'profile' ? (
//           <>
//             <li><Link to="/dashboard">Dashboard</Link></li>
//             <li><button onClick={handleLogoutClick}>Logout</button></li>
//           </>
//         ) : isLoggedIn ? (
//           <>
//             <li><Link to="/profile">Profile</Link></li>
//             <li><button onClick={handleLogoutClick}>Logout</button></li>
//           </>
//         ) : (
//           <>
//             <li><Link to="/register">Registration</Link></li>
//             <li><Link to="/login">Login</Link></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;













// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = ({ isLoggedIn, onLogout }) => {
//   const navigate = useNavigate();

//   const handleLogoutClick = () => {
//     onLogout();
//     navigate('/home');
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <h2>E-Learning Portal</h2>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/home">Home</Link></li>
//         {isLoggedIn ? (
//           <>
//             <li><Link to="/profile">Profile</Link></li>
//             <li><Link to="/dashboard">Dashboard</Link></li>
//             <li><button onClick={handleLogoutClick}>Logout</button></li>
//           </>
//         ) : (
//           <>
//             <li><Link to="/register">Registration</Link></li>
//             <li><Link to="/login">Login</Link></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;





import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/home');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h3>E-Learning Portal</h3>
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        {isLoggedIn ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><button onClick={handleLogoutClick}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/register">Registration</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;





