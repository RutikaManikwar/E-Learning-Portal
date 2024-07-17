// import React from 'react';

// const Profile = () => {
//   // Assuming profile data would be fetched and stored in state
//   const profile = { email: 'user@example.com' };

//   return (
//     <div>
//       <h2>Profile</h2>
//       <p>Email: {profile.email}</p>
//     </div>
//   );
// };

// export default Profile;





// import React, { useState } from 'react';
// import './Profile.css';

// const Profile = () => {
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     class: 'Class 10',
//     email: 'john.doe@example.com',
//     address: '123 Main St, City',
//     profilePicture: '',
//     uploadedImage: null,
//   });

//   const handleProfilePictureUpload = (e) => {
//     const file = e.target.files[0];
//     // Handle file upload to the server and update profile picture
//     // Example: For local preview only
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setUser({ ...user, profilePicture: reader.result, uploadedImage: file });
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-picture">
//       <h2>User Profile</h2>
//         <img src={user.profilePicture || 'default-profile.png'} alt="Profile" />
//         <input type="file" onChange={handleProfilePictureUpload} />
//         {user.uploadedImage && (
//           <p className="uploaded-image">{user.uploadedImage.name}</p>
//         )}
//       </div>
//       <div className="profile-info">
       
//         <p><strong>Name:</strong> {user.name}</p>
//         <p><strong>Class:</strong> {user.class}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>Address:</strong> {user.address}</p>
//       </div>
//     </div>
//   );
// };

// export default Profile;
/////////////////////////////////




// import React, { useState } from 'react';
// import Navbar from './Navbar'; // Ensure the Navbar component is imported
// import './Profile.css';

// const Profile = () => {
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     class: 'Class 10',
//     email: 'john.doe@example.com',
//     address: '123 Main St, City',
//     profilePicture: '',
//     uploadedImage: null,
//   });

//   const handleProfilePictureUpload = (e) => {
//     const file = e.target.files[0];
//     // Handle file upload to the server and update profile picture
//     // Example: For local preview only
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setUser({ ...user, profilePicture: reader.result, uploadedImage: file });
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <>
//       <Navbar isLoggedIn={true} onLogout={() => {}} currentPage="profile" />
//       <div className="profile-container">
//         <div className="profile-picture">
//           <h2>User Profile</h2>
//           <img src={user.profilePicture || 'default-profile.png'} alt="Profile" />
//           <input type="file" onChange={handleProfilePictureUpload} />
//           {user.uploadedImage && (
//             <p className="uploaded-image">{user.uploadedImage.name}</p>
//           )}
//         </div>
//         <div className="profile-info">
//           <p><strong>Name:</strong> {user.name}</p>
//           <p><strong>Class:</strong> {user.class}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Address:</strong> {user.address}</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;





// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import './Profile.css';

// const Profile = () => {
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     class: 'Class 10',
//     email: 'john.doe@example.com',
//     address: '123 Main St, City',
//     profilePicture: 'https://randomuser.me/api/portraits/men/75.jpg', // Default profile picture
//     uploadedImage: null,
//   });

//   const handleProfilePictureUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setUser({ ...user, profilePicture: reader.result, uploadedImage: file });
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <>
//       <Navbar isLoggedIn={true} onLogout={() => {}} currentPage="profile" />
//       <div className="profile-container">
//         <div className="profile-picture">
//           <h2>User Profile</h2>
//           <img src={user.profilePicture} alt="Profile" />
//           <input type="file" onChange={handleProfilePictureUpload} />
//           {user.uploadedImage && (
//             <p className="uploaded-image">{user.uploadedImage.name}</p>
//           )}
//         </div>
//         <div className="profile-info">
//           <p><strong>{user.name}</strong></p>
//           <p>{user.class}</p>
//           <p>{user.email}</p>
//           <p>{user.address}</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;






// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import './Profile.css';

// const Profile = () => {
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     class: 'Class 10',
//     email: 'john.doe@example.com',
//     address: '123 Main St, City',
//     profilePicture: 'https://randomuser.me/api/portraits/men/75.jpg', // Default profile picture
//     uploadedImage: null,
//   });

//   const handleProfilePictureUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setUser({ ...user, profilePicture: reader.result, uploadedImage: file });
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleImageClick = () => {
//     document.getElementById('fileInput').click();
//   };

//   return (
//     <>
//       <Navbar isLoggedIn={true} onLogout={() => {}} currentPage="profile" />
//       <div className="profile-container">
//         <div className="profile-picture" onClick={handleImageClick}>
//           <h2>User Profile</h2>
//           <img src={user.profilePicture} alt="Profile" />
//           <input 
//             type="file" 
//             id="fileInput" 
//             onChange={handleProfilePictureUpload} 
//             style={{ display: 'none' }} 
//           />
//           {user.uploadedImage && (
//             <p className="uploaded-image">{user.uploadedImage.name}</p>
//           )}
//         </div>
//         <div className="profile-info">
//           <p>
//             <strong>Name:</strong> {user.name}, 
//             <strong> Class:</strong> {user.class}, 
//             <strong> Email:</strong> {user.email}, 
//             <strong> Address:</strong> {user.address}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;







// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import './Profile.css';

// const Profile = () => {
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     class: 'Class 10',
//     email: 'john.doe@example.com',
//     address: '123 Main St, City',
//     profilePicture: 'https://randomuser.me/api/portraits/men/75.jpg', // Default profile picture
//     uploadedImage: null,
//   });

//   const handleProfilePictureUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setUser({ ...user, profilePicture: reader.result, uploadedImage: file });
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleImageClick = () => {
//     document.getElementById('fileInput').click();
//   };

//   return (
//     <>
//       <Navbar isLoggedIn={true} onLogout={() => {}} currentPage="profile" />
//       <div className="profile-container">
//         <div className="profile-picture" onClick={handleImageClick}>
//           <h2>User Profile</h2>
//           <img src={user.profilePicture} alt="Profile" />
//           <input 
//             type="file" 
//             id="fileInput" 
//             onChange={handleProfilePictureUpload} 
//             style={{ display: 'none' }} 
//           />
//           {user.uploadedImage && (
//             <p className="uploaded-image">{user.uploadedImage.name}</p>
//           )}
//         </div>
//         <div className="profile-info">
//           <p>
//             <strong>Name:</strong> {user.name}
//           </p>
//           <p>
//             <strong>Class:</strong> {user.class}
//           </p>
//           <p>
//             <strong>Email:</strong> {user.email}
//           </p>
//           <p>
//             <strong>Address:</strong> {user.address}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;





// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import './Profile.css';

// const Profile = ({ user }) => {
//   const defaultUser = {
//     name: 'John Doe',
//     class: 'Class 10',
//     email: 'john.doe@example.com',
//     address: '123 Main St, City',
//     profilePicture: 'https://randomuser.me/api/portraits/men/75.jpg', // Default profile picture
//     uploadedImage: null,
//   };

//   const [profile, setProfile] = useState(defaultUser);

//   useEffect(() => {
//     if (user) {
//       setProfile({
//         name: `${user.firstName} ${user.lastName}`,
//         class: user.education,
//         email: user.email,
//         address: user.address,
//         profilePicture: user.profilePicture || defaultUser.profilePicture,
//         uploadedImage: user.profilePicture ? null : defaultUser.uploadedImage,
//       });
//     }
//   }, [user]);

//   const handleProfilePictureUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setProfile({ ...profile, profilePicture: reader.result, uploadedImage: file });
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleImageClick = () => {
//     document.getElementById('fileInput').click();
//   };

//   return (
//     <>
//       <Navbar isLoggedIn={true} onLogout={() => {}} />
//       <div className="profile-container">
//         <div className="profile-picture" onClick={handleImageClick}>
//           <h2>User Profile</h2>
//           <img src={profile.profilePicture} alt="Profile" />
//           <input 
//             type="file" 
//             id="fileInput" 
//             onChange={handleProfilePictureUpload} 
//             style={{ display: 'none' }} 
//           />
//           {profile.uploadedImage && (
//             <p className="uploaded-image">{profile.uploadedImage.name}</p>
//           )}
//         </div>
//         <div className="profile-info">
//           <p>
//             <strong>Name:</strong> {profile.name}
//           </p>
//           <p>
//             <strong>Class:</strong> {profile.class}
//           </p>
//           <p>
//             <strong>Email:</strong> {profile.email}
//           </p>
//           <p>
//             <strong>Address:</strong> {profile.address}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;










import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Profile.css';

const Profile = ({ user }) => {
  const defaultUser = {
    firstName: 'John',
    lastName: 'Doe',
    education: 'Class 10',
    email: 'john.doe@example.com',
    address: '123 Main St, City',
    profilePicture: 'https://randomuser.me/api/portraits/men/75.jpg', // Default profile picture
    uploadedImage: null,
  };

  const [profile, setProfile] = useState({ ...defaultUser });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (user) {
      setProfile({
        firstName: user.firstName || defaultUser.firstName,
        lastName: user.lastName || defaultUser.lastName,
        education: user.education || defaultUser.education,
        email: user.email || defaultUser.email,
        address: user.address || defaultUser.address,
        profilePicture: user.profilePicture || defaultUser.profilePicture,
        uploadedImage: user.profilePicture ? null : defaultUser.uploadedImage,
      });
    }
  }, [user]);

  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, profilePicture: reader.result, uploadedImage: file });
    };
    reader.readAsDataURL(file);
  };

  const handleImageClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setProfile({ ...defaultUser }); // Reset profile to default on cancel
  };

  const handleSaveProfile = () => {
    // Handle saving profile (not implemented for temporary changes)
    setEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <>
      <Navbar isLoggedIn={true} onLogout={() => {}} />
      <div className="profile-container">
        <div className="profile-picture" onClick={handleImageClick}>
          <h2>User Profile</h2>
          <img src={profile.profilePicture} alt="Profile" />
          <input
            type="file"
            id="fileInput"
            onChange={handleProfilePictureUpload}
            style={{ display: 'none' }}
          />
          {profile.uploadedImage && (
            <p className="uploaded-image">{profile.uploadedImage.name}</p>
          )}
        </div>
        <div className="profile-info">
          {editMode ? (
            <>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={profile.firstName}
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
                  value={profile.lastName}
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
                  value={profile.email}
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
                  value={profile.address}
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
                  value={profile.education}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="profile-button" onClick={handleSaveProfile}>
                Save Profile
              </button>
              <button className="profile-button" onClick={handleCancelEdit}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <p>
                <strong>Name:</strong> {profile.firstName} {profile.lastName}
                
              </p>
              <p>
                <strong>Class:</strong> {profile.education}
              </p>
              <p>
                <strong>Email:</strong> {profile.email}
              </p>
              <p>
                <strong>Address:</strong> {profile.address}
              </p><br></br>
              
              <button className="edit-button" onClick={handleEditProfile}>
                <center>  Edit</center>
                </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
