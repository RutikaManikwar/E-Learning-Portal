// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Header from './components/Header';
// // import Home from './components/Home';
// // import Login from './components/Login';
// // import Register from './components/Register';
// // import Footer from './components/Footer';

// // const App = () => (
// //   <Router>
// //     <Header />
// //     <div className="container">
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/register" element={<Register />} />
// //       </Routes>
// //     </div>
// //     <Footer />
// //   </Router>
// // );

// // export default App;






// /// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// // Import other components like Register and Login if you have them

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* Define routes for Register and Login if needed */}
//           {/* <Route path="/register" element={<Register />} /> */}
//           {/* <Route path="/login" element={<Login />} /> */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;






// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import RegistrationForm from './components/RegistrationForm';
// import LoginForm from './components/LoginForm';
// // Import other components like Register and Login if you have them

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<RegistrationForm />} />
//           <Route path="/login" element={<LoginForm />} />
//           {/* Add a Login component as needed */}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;






//**********************###########//
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import RegistrationForm from './components/RegistrationForm';
// import LoginForm from './components/LoginForm';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLoginSuccess = () => {
//     setIsAuthenticated(true);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<RegistrationForm />} />
//           <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
//           <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
//************************##################//


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import RegistrationForm from './components/RegistrationForm';
// import LoginForm from './components/LoginForm';
// import Profile from './components/Profile';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLoginSuccess = () => {
//     setIsAuthenticated(true);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar isLoggedIn={isAuthenticated} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<RegistrationForm />} />
//           <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
//           <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
//           <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

//working code all//
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import RegistrationForm from './components/RegistrationForm';
// import LoginForm from './components/LoginForm';
// import Profile from './components/Profile';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLoginSuccess = () => {
//     setIsAuthenticated(true);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar isLoggedIn={isAuthenticated} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<RegistrationForm />} />
//           <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;////////////









// second working code //
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import RegistrationForm from './components/RegistrationForm';
// import LoginForm from './components/LoginForm';
// import Profile from './components/Profile';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLoginSuccess = () => {
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar isLoggedIn={isAuthenticated} onLogout={handleLogout} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<RegistrationForm />} />
//           <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
///////










// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import RegistrationForm from './components/RegistrationForm';
// import LoginForm from './components/LoginForm';
// import Profile from './components/Profile';
// import UserDashboard from './components/UserDashboard';
// import CourseDetails from './components/CourseDetails';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLoginSuccess = () => {
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar isLoggedIn={isAuthenticated} onLogout={handleLogout} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<RegistrationForm />} />
//           <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
//           <Route path="/dashboard" element={isAuthenticated ? <UserDashboard /> : <Navigate to="/login" />} />
//           <Route path="/courses/:courseId" element={isAuthenticated ? <CourseDetails /> : <Navigate to="/login" />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;






// import '@fortawesome/fontawesome-free/css/all.min.css';
// import './index.css';
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import RegistrationForm from './components/RegistrationForm';
// import LoginForm from './components/LoginForm';
// import Profile from './components/Profile';
// import UserDashboard from './components/UserDashboard';
// import CourseDetails from './components/CourseDetails';

// const AppContent = ({ isAuthenticated, handleLoginSuccess, handleLogout }) => {
//   const location = useLocation();
//   const isProfilePage = location.pathname === '/profile';

//   return (
//     <>
//       {!isProfilePage && <Navbar isLoggedIn={isAuthenticated} onLogout={handleLogout} />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={<RegistrationForm />} />
//         <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
//         <Route path="/dashboard" element={isAuthenticated ? <UserDashboard /> : <Navigate to="/login" />} />
//         <Route path="/courses/:courseId" element={isAuthenticated ? <CourseDetails /> : <Navigate to="/login" />} />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// };

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLoginSuccess = () => {
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <AppContent
//           isAuthenticated={isAuthenticated}
//           handleLoginSuccess={handleLoginSuccess}
//           handleLogout={handleLogout}
//         />
//       </div>
//     </Router>
//   );
// };

// export default App;






import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import UserDashboard from './components/UserDashboard';
import CourseDetails from './components/CourseDetails';

const AppContent = ({ isAuthenticated, handleLoginSuccess, handleLogout, user, setUser }) => {
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';

  return (
    <>
      {!isProfilePage && <Navbar isLoggedIn={isAuthenticated} onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm setUser={setUser} />} />
        <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={isAuthenticated ? <Profile user={user} /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={isAuthenticated ? <UserDashboard /> : <Navigate to="/login" />} />
        <Route path="/courses/:courseId" element={isAuthenticated ? <CourseDetails /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <AppContent
          isAuthenticated={isAuthenticated}
          handleLoginSuccess={handleLoginSuccess}
          handleLogout={handleLogout}
          user={user}
          setUser={setUser}
        />
      </div>
    </Router>
  );
};

export default App;









