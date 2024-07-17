// import React, { useState } from 'react';
// import './RegistrationForm.css';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     userName: '',
//     email: '',
//     password: '',
//     phone: '',
//     education: '',
//     address: '',
//     dateOfBirth: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form data:', formData);
//   };

//   return (
//     <div className="registration-form-container">
//       <h2>Registration Form</h2>
//       <form onSubmit={handleSubmit} className="registration-form">
//         <div className="form-group">
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="lastName">Last Name:</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//           />
//         </div>
       
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="address">Address:</label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phone">Phone Number:</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="dateOfBirth">Date of Birth:</label>
//           <input
//             type="date"
//             id="dateOfBirth"
//             name="dateOfBirth"
//             value={formData.dateOfBirth}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="education">Education:</label>
//           <input
//             type="text"
//             id="education"
//             name="education"
//             value={formData.education}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="userName">User Name:</label>
//           <input
//             type="text"
//             id="userName"
//             name="userName"
//             value={formData.userName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
        
        
        
//         <button type="submit" className="register-button">Register</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;








// import React, { useState } from 'react';
// import './RegistrationForm.css';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     userName: '',
//     email: '',
//     password: '',
//     phone: '',
//     education: '',
//     address: '',
//     dateOfBirth: '',
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
//     // Handle form submission logic here
//     console.log('Form data:', formData);
//     setSubmitted(true);
//   };

//   return (
//     <div className="registration-form-container">
//       <h2>Registration</h2>
//       {submitted ? (
//         <div className="success-message">Registration successful!</div>
//       ) : (
//         <form onSubmit={handleSubmit} className="registration-form">
//           <div className="form-group">
//             <label htmlFor="firstName">First Name:</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="lastName">Last Name:</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="address">Address:</label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Phone Number:</label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//             </div>
//             <div className="form-group">
//             <label htmlFor="dateOfBirth">Date of Birth:</label>
//             <input
//               type="date"
//               id="dateOfBirth"
//               name="dateOfBirth"
//               value={formData.dateOfBirth}
//               onChange={handleChange}
//               required
//             />
          
//           </div>
//           <div className="form-group">
//             <label htmlFor="education">Education:</label>
//             <input
//               type="text"
//               id="education"
//               name="education"
//               value={formData.education}
//               onChange={handleChange}
//               required
//             />
//           </div>
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
          
         
          
          
//           <button type="submit" className="register-button">Registration</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default RegistrationForm;








import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = ({ setUser }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    phone: '',
    education: '',
    address: '',
    dateOfBirth: '',
    profilePicture: '', // New field for profile picture
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, profilePicture: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setSubmitted(true);
    setUser(formData);
  };

  return (
    <div className="registration-form-container">
      <h2>Registration</h2>
      {submitted ? (
        <div className="success-message">Registration successful!</div>
      ) : (
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="education">Education:</label>
            <input
              type="text"
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userName">User Name:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="profilePicture">Profile Picture:</label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              onChange={handleProfilePictureUpload}
              accept="image/*"
            />
          </div>
          <button type="submit" className="register-button">Registration</button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
