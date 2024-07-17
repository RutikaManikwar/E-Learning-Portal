





// import React from 'react';
// import './UserDashboard.css';

// const Dashboard = () => {
//   // Example course data (replace with your actual data storage method)
//   const courses = [
//     {
//       id: 1,
//       title: 'Web Development',
//       description: '',
//       image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg',
//       enrolled: true, // Example of an enrolled course
//       progress: 50,   // Example progress (in percentage)
//     },
//     {
//       id: 1,
//       title: 'Cloud Computing',
//       description: '',
//       image: 'https://www.device42.com/blog/wp-content/uploads/2023/03/14_01edge-cloud-computing-900x600.jpg',
//       enrolled: true, // Example of an enrolled course
//       progress: 30,   // Example progress (in percentage)
//     },
//     {
//       id: 1,
//       title: 'Robotics',
//       description: '',
//       image: 'https://futureskillsprime.in/sites/default/files/inline-images/iStock-966248982.jpg',
//       enrolled: true, // Example of an enrolled course
//       progress: 80,   // Example progress (in percentage)
//     },
    
   
    
//     {
//       id: 2,
//       title: 'Data Science',
//       description: '',
//       image: 'https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg',
//       enrolled: false, // Example of a not enrolled course
//       progress: 0,     // No progress for not enrolled courses
//     },
//     {
//       id: 2,
//       title: 'Internet Of Things',
//       description: '',
//       image: 'https://images.prismic.io//intuzwebsite/078cae79-99e4-4114-80d7-c3beffd254c6_IoT+without+Internet-1.png?w=1200&q=80&auto=format,compress&fm=png8',
//       enrolled: false, // Example of a not enrolled course
//       progress: 0,     // No progress for not enrolled courses
//     },
//     {
//       id: 2,
//       title: 'Machine Learning',
//       description: '',
//       image: 'https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/machine-learning-pillar-page-overview.jpeg',
//       enrolled: false, // Example of a not enrolled course
//       progress: 0,     // No progress for not enrolled courses
//     },
//     {
//       id: 2,
//       title: 'Java',
//       description: '',
//       image: 'https://www.finoit.com/wp-content/uploads/2022/11/future-of-java-programming-language.jpg',
//       enrolled: false, // Example of a not enrolled course
//       progress: 0,     // No progress for not enrolled courses
//     },
//     {
//       id: 2,
//       title: 'Python',
//       description: '',
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-d6UfUk2wXOKauTqOgL8Usfnc9i7eNBD8_Q&s',
//       enrolled: false, // Example of a not enrolled course
//       progress: 0,     // No progress for not enrolled courses
//     },
//     {
//       id: 2,
//       title: 'Artifical Inteligence',
//       description: '',
//       image: 'https://www.imf.org/-/media/Images/IMF/FANDD/hero/2023/December/hero-B2B.ashx',
//       enrolled: false, // Example of a not enrolled course
//       progress: 0,     // No progress for not enrolled courses
//     },
//     // Add more courses as needed
//   ];

//   return (
//     <div className="dashboard-container">
//       <h2>Dashboard</h2>

//       <div className="enrolled-courses">
//         <h3>Enrolled Courses</h3>
//         <div className="course-list">
//           {courses
//             .filter(course => course.enrolled)
//             .map(course => (
//               <div key={course.id} className="course-card">
//                 <img src={course.image} alt={course.title} />
//                 <h4>{course.title}</h4>
//                 <p>{course.description}</p>
//                 <p>Progress: {course.progress}%</p>
//               </div>
//             ))}
//         </div>
//       </div>

//       <div className="default-courses">
//         <h3>Available Courses</h3>
//         <div className="course-list">
//           {courses
//             .filter(course => !course.enrolled)
//             .map(course => (
//               <div key={course.id} className="course-card">
//                 <img src={course.image} alt={course.title} />
//                 <h4>{course.title}</h4>
//                 <p>{course.description}</p>
//                 <button>Enroll</button>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;






// import React, { useState } from 'react';
// import './UserDashboard.css';

// const Dashboard = () => {
//   // Example course data (replace with your actual data storage method)
//   const initialCourses = [
//     {
//       id: 1,
//       title: 'Web Development',
//       description: '',
//       image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg',
//       enrolled:false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Example video URL
//     },
//     {
//       id: 2,
//       title: 'Cloud Computing',
//       description: '',
//       image: 'https://www.device42.com/blog/wp-content/uploads/2023/03/14_01edge-cloud-computing-900x600.jpg',
//       enrolled: false,
//       progress: 0,
//     },
//     {
//       id: 3,
//       title: 'Robotics',
//       description: '',
//       image: 'https://futureskillsprime.in/sites/default/files/inline-images/iStock-966248982.jpg',
//       enrolled: false,
//       progress: 0,
//     },
//     {
//       id: 4,
//       title: 'Data Science',
//       description: '',
//       image: 'https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg',
//       enrolled: false,
//       progress: 0,
//     },
//     {
//       id: 5,
//       title: 'Internet Of Things',
//       description: '',
//       image: 'https://images.prismic.io//intuzwebsite/078cae79-99e4-4114-80d7-c3beffd254c6_IoT+without+Internet-1.png?w=1200&q=80&auto=format,compress&fm=png8',
//       enrolled: false,
//       progress: 0,
//     },
//     {
//       id: 6,
//       title: 'Machine Learning',
//       description: '',
//       image: 'https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/machine-learning-pillar-page-overview.jpeg',
//       enrolled: false,
//       progress: 0,
//     },
//     {
//       id: 7,
//       title: 'Java',
//       description: '',
//       image: 'https://www.finoit.com/wp-content/uploads/2022/11/future-of-java-programming-language.jpg',
//       enrolled: false,
//       progress: 0,
//     },
//     {
//       id: 8,
//       title: 'Python',
//       description: '',
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-d6UfUk2wXOKauTqOgL8Usfnc9i7eNBD8_Q&s',
//       enrolled: false,
//       progress: 0,
//     },
//     {
//       id: 9,
//       title: 'Artifical Inteligence',
//       description: '',
//       image: 'https://www.imf.org/-/media/Images/IMF/FANDD/hero/2023/December/hero-B2B.ashx',
//       enrolled: false,
//       progress: 0,
//     },
//   ];

//   const [courses, setCourses] = useState(initialCourses);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);

//   const handleEnroll = (courseId) => {
//     const courseToEnroll = courses.find(course => course.id === courseId);
//     if (courseToEnroll && !courseToEnroll.enrolled) {
//       const updatedCourses = courses.map(course =>
//         course.id === courseId ? { ...course, enrolled: true, progress: 10 } : course
//       );
//       setCourses(updatedCourses);
//       setEnrolledCourses([...enrolledCourses, { ...courseToEnroll }]);
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <h2>Dashboard</h2>

//       <div className="enrolled-courses">
//         <h3>Enrolled Courses</h3>
//         <div className="course-list">
//           {enrolledCourses.map(course => (
//             <div key={course.id} className="course-card">
//               <img src={course.image} alt={course.title} />
//               <h4>{course.title}</h4>
//               <p>{course.description}</p>
//               <p>Progress: {course.progress}%</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="default-courses">
//         <h3>Available Courses</h3>
//         <div className="course-list">
//           {courses.map(course => (
//             <div key={course.id} className="course-card">
//               <img src={course.image} alt={course.title} />
//               <h4>{course.title}</h4>
//               <p>{course.description}</p>
//               {!course.enrolled && <button onClick={() => handleEnroll(course.id)}>Enroll</button>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;









// import React, { useState } from 'react';
// import './UserDashboard.css';

// const Dashboard = () => {
//   // Example course data (replace with your actual data storage method)
//   const initialCourses = [
//     {
//       id: 1,
//       title: 'Web Development',
//       description: '',
//       image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg',
//       enrolled:false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=G3e-cpL7ofc' // Example YouTube video URL
//     },
//     {
//       id: 2,
//       title: 'Cloud Computing',
//       description: '',
//       image: 'https://www.device42.com/blog/wp-content/uploads/2023/03/14_01edge-cloud-computing-900x600.jpg',
//       enrolled: false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=70oYrSnRgoI' // Example YouTube video URL
//     },
//     // Add more courses with their respective YouTube video URLs
//     {
//             id: 3,
//             title: 'Robotics',
//             description: '',
//             image: 'https://futureskillsprime.in/sites/default/files/inline-images/iStock-966248982.jpg',
//             enrolled: false,
//             progress: 0,
//             videoUrl: 'https://www.youtube.com/watch?v=J0ssFp7yN8Y'
//           },
//           {
//             id: 4,
//             title: 'Data Science',
//             description: '',
//             image: 'https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg',
//             enrolled: false,
//             progress: 0,
//             videoUrl: 'https://www.youtube.com/watch?v=-ETQ97mXXF0'
//           },
//           {
//             id: 5,
//             title: 'Internet Of Things',
//             description: '',
//             image: 'https://images.prismic.io//intuzwebsite/078cae79-99e4-4114-80d7-c3beffd254c6_IoT+without+Internet-1.png?w=1200&q=80&auto=format,compress&fm=png8',
//             enrolled: false,
//             progress: 0,
//             videoUrl: 'https://www.youtube.com/watch?v=6mBO2vqLv38'
//           },
//           {
//             id: 6,
//             title: 'Machine Learning',
//             description: '',
//             image: 'https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/machine-learning-pillar-page-overview.jpeg',
//             enrolled: false,
//             progress: 0,
//             videoUrl: 'https://www.youtube.com/watch?v=PeMlggyqz0Y'
//           },
//           {
//             id: 7,
//             title: 'Java',
//             description: '',
//             image: 'https://www.finoit.com/wp-content/uploads/2022/11/future-of-java-programming-language.jpg',
//             enrolled: false,
//             progress: 0,
//             videoUrl: 'https://www.youtube.com/watch?v=eIrMbAQSU34'
//           },
//           {
//             id: 8,
//             title: 'Python',
//             description: '',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-d6UfUk2wXOKauTqOgL8Usfnc9i7eNBD8_Q&s',
//             enrolled: false,
//             progress: 0,
//             videoUrl: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc'
//           },
//           {
//             id: 9,
//             title: 'Artifical Inteligence',
//             description: '',
//             image: 'https://www.imf.org/-/media/Images/IMF/FANDD/hero/2023/December/hero-B2B.ashx',
//             enrolled: false,
//             progress: 0,
//             videoUrl: 'https://www.youtube.com/watch?v=JMUxmLyrhSk'
//           },
    
  

//   ];

//   const [courses, setCourses] = useState(initialCourses);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);

//   const handleEnroll = (courseId) => {
//     const courseToEnroll = courses.find(course => course.id === courseId);
//     if (courseToEnroll && !courseToEnroll.enrolled) {
//       const updatedCourses = courses.map(course =>
//         course.id === courseId ? { ...course, enrolled: true, progress: 10 } : course
//       );
//       setCourses(updatedCourses);
//       setEnrolledCourses([...enrolledCourses, { ...courseToEnroll }]);
//     }
//   };

//   const handleShowVideo = (videoUrl) => {
//     window.open(videoUrl, '_blank'); // Open video URL in a new tab
//   };

//   return (
//     <div className="dashboard-container">
//       <h2>Dashboard</h2>

//       <div className="enrolled-courses">
//         <h3>Enrolled Courses</h3>
//         <div className="course-list">
//           {enrolledCourses.map(course => (
//             <div key={course.id} className="course-card">
//               <img src={course.image} alt={course.title} />
//               <h4>{course.title}</h4>
//               <p>{course.description}</p>
//               <p>Progress: {course.progress}%</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="default-courses">
//         <h3>Available Courses</h3>
//         <div className="course-list">
//           {courses.map(course => (
//             <div key={course.id} className="course-card">
//               <img
//                 src={course.image}
//                 alt={course.title}
//                 onClick={() => handleShowVideo(course.videoUrl)} // Click handler to open video URL
//                 style={{ cursor: 'pointer' }} // Set cursor to pointer to indicate clickable
//               />
//               <h4>{course.title}</h4>
//               <p>{course.description}</p>
//               {!course.enrolled && <button onClick={() => handleEnroll(course.id)}>Enroll</button>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;









// import React, { useState } from 'react';
// import './UserDashboard.css';

// const Dashboard = () => {
//   // Example course data (replace with your actual data storage method)
//   const initialCourses = [
//     {
//       id: 1,
//       title: 'Web Development',
//       description: '',
//       image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg',
//       enrolled: false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=G3e-cpL7ofc' // Example YouTube video URL
//     },
//     {
//       id: 2,
//       title: 'Cloud Computing',
//       description: '',
//       image: 'https://www.device42.com/blog/wp-content/uploads/2023/03/14_01edge-cloud-computing-900x600.jpg',
//       enrolled: false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=70oYrSnRgoI' // Example YouTube video URL
//     },
//     // Add more courses with their respective YouTube video URLs
//     {
//       id: 3,
//       title: 'Robotics',
//       description: '',
//       image: 'https://futureskillsprime.in/sites/default/files/inline-images/iStock-966248982.jpg',
//       enrolled: false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=J0ssFp7yN8Y'
//     },
//     {
//       id: 4,
//       title: 'Data Science',
//       description: '',
//       image: 'https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg',
//       enrolled: false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=-ETQ97mXXF0'
//     },
//     {
//       id: 5,
//       title: 'Internet Of Things',
//       description: '',
//       image: 'https://images.prismic.io//intuzwebsite/078cae79-99e4-4114-80d7-c3beffd254c6_IoT+without+Internet-1.png?w=1200&q=80&auto=format,compress&fm=png8',
//       enrolled: false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=6mBO2vqLv38'
//     },
//     {
//       id: 6,
//       title: 'Machine Learning',
//       description: '',
//       image: 'https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/machine-learning-pillar-page-overview.jpeg',
//       enrolled: false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=PeMlggyqz0Y'
//     },
//     {
//       id: 7,
//       title: 'Java',
//       description: '',
//       image: 'https://www.finoit.com/wp-content/uploads/2022/11/future-of-java-programming-language.jpg',
//       enrolled: false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=eIrMbAQSU34'
//     },
//     {
//       id: 8,
//       title: 'Python',
//       description: '',
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-d6UfUk2wXOKauTqOgL8Usfnc9i7eNBD8_Q&s',
//       enrolled: false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc'
//     },
//     {
//       id: 9,
//       title: 'Artificial Intelligence',
//       description: '',
//       image: 'https://www.imf.org/-/media/Images/IMF/FANDD/hero/2023/December/hero-B2B.ashx',
//       enrolled: false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=JMUxmLyrhSk'
//     },
//   ];

//   const [courses, setCourses] = useState(initialCourses);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);

//   const handleEnroll = (courseId) => {
//     const courseToEnroll = courses.find(course => course.id === courseId);
//     if (courseToEnroll && !courseToEnroll.enrolled) {
//       const updatedCourses = courses.map(course =>
//         course.id === courseId ? { ...course, enrolled: true, progress: 10 } : course
//       );
//       setCourses(updatedCourses);
//       setEnrolledCourses([...enrolledCourses, { ...courseToEnroll }]);
//     }
//   };

//   const handleShowVideo = (course) => {
//     if (!course.enrolled) {
//       window.open(course.videoUrl, '_blank'); // Open video URL in a new tab
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <h2>Dashboard</h2>

//       <div className="enrolled-courses">
//         <h3>Enrolled Courses</h3>
//         <div className="course-list">
//           {enrolledCourses.map(course => (
//             <div key={course.id} className="course-card">
//               <img src={course.image} alt={course.title} />
//               <h4>{course.title}</h4>
//               <p>{course.description}</p>
//               <p>Progress: {course.progress}%</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="default-courses">
//         <h3>Available Courses</h3>
//         <div className="course-list">
//           {courses.map(course => (
//             <div key={course.id} className="course-card">
//               <img
//                 src={course.image}
//                 alt={course.title}
//                 onClick={() => handleShowVideo(course)} // Click handler to open video URL or handle click based on enrollment
//                 style={{ cursor: 'pointer' }} // Set cursor to pointer to indicate clickable
//               />
//               <h4>{course.title}</h4>
//               <p>{course.description}</p>
//               {!course.enrolled && <button onClick={() => handleEnroll(course.id)}>Enroll</button>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;






// import React, { useState } from 'react';
// import './UserDashboard.css';

// const Dashboard = () => {
//   // Example course data (replace with your actual data storage method)
//   const initialCourses = [
//     {
//       id: 1,
//       title: 'Web Development',
//       description: '',
//       image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg',
//       enrolled: false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=G3e-cpL7ofc' // Example YouTube video URL
//     },
//     {
//       id: 2,
//       title: 'Cloud Computing',
//       description: '',
//       image: 'https://www.device42.com/blog/wp-content/uploads/2023/03/14_01edge-cloud-computing-900x600.jpg',
//       enrolled: false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=70oYrSnRgoI' // Example YouTube video URL
//     },
//     // Add more courses with their respective YouTube video URLs
//     {
//       id: 3,
//       title: 'Robotics',
//       description: '',
//       image: 'https://futureskillsprime.in/sites/default/files/inline-images/iStock-966248982.jpg',
//       enrolled: false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=J0ssFp7yN8Y'
//     },
//     {
//       id: 4,
//       title: 'Data Science',
//       description: '',
//       image: 'https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg',
//       enrolled: false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=-ETQ97mXXF0'
//     },
//     {
//       id: 5,
//       title: 'Internet Of Things',
//       description: '',
//       image: 'https://images.prismic.io//intuzwebsite/078cae79-99e4-4114-80d7-c3beffd254c6_IoT+without+Internet-1.png?w=1200&q=80&auto=format,compress&fm=png8',
//       enrolled: false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=6mBO2vqLv38'
//     },
//     {
//       id: 6,
//       title: 'Machine Learning',
//       description: '',
//       image: 'https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/machine-learning-pillar-page-overview.jpeg',
//       enrolled: false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=PeMlggyqz0Y'
//     },
//     {
//       id: 7,
//       title: 'Java',
//       description: '',
//       image: 'https://www.finoit.com/wp-content/uploads/2022/11/future-of-java-programming-language.jpg',
//       enrolled: false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=eIrMbAQSU34'
//     },
//     {
//       id: 8,
//       title: 'Python',
//       description: '',
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-d6UfUk2wXOKauTqOgL8Usfnc9i7eNBD8_Q&s',
//       enrolled: false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc'
//     },
//     {
//       id: 9,
//       title: 'Artificial Intelligence',
//       description: '',
//       image: 'https://www.imf.org/-/media/Images/IMF/FANDD/hero/2023/December/hero-B2B.ashx',
//       enrolled: false,
//       progress: 0,
//       videoUrl: 'https://www.youtube.com/watch?v=JMUxmLyrhSk'
//     },
//   ];

//   const [courses, setCourses] = useState(initialCourses);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);

//   const handleEnroll = (courseId) => {
//     const courseToEnroll = courses.find(course => course.id === courseId);
//     if (courseToEnroll && !courseToEnroll.enrolled) {
//       const updatedCourses = courses.map(course =>
//         course.id === courseId ? { ...course, enrolled: true, progress: 10 } : course
//       );
//       setCourses(updatedCourses);
//       setEnrolledCourses([...enrolledCourses, { ...courseToEnroll }]);
//     }
//   };

//   const handleShowVideo = (videoUrl) => {
//     window.open(videoUrl, '_blank'); // Always open video URL in a new tab
//   };

//   return (
//     <div className="dashboard-container">
//       <h2>Dashboard</h2>

//       <div className="enrolled-courses">
//         <h3>Enrolled Courses</h3>
//         <div className="course-list">
//           {enrolledCourses.map(course => (
//             <div key={course.id} className="course-card">
//               <img src={course.image} alt={course.title} onClick={() => handleShowVideo(course.videoUrl)} style={{ cursor: 'pointer' }} />
//               <h4>{course.title}</h4>
//               <p>{course.description}</p>
//               <p>Progress: {course.progress}%</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="default-courses">
//         <h3>Available Courses</h3>
//         <div className="course-list">
//           {courses.map(course => (
//             <div key={course.id} className="course-card">
//               <img src={course.image} alt={course.title} onClick={() => handleShowVideo(course.videoUrl)} style={{ cursor: 'pointer' }} />
//               <h4>{course.title}</h4>
//               <p>{course.description}</p>
//               {!course.enrolled && <button onClick={() => handleEnroll(course.id)}>Enroll</button>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;








import React, { useState } from 'react';
import './UserDashboard.css';

const Dashboard = () => {
  const initialCourses = [
    // Your initial course data here
    {
            id: 1,
            title: 'Web Development',
            description: '',
            image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg',
            enrolled: false,
            progress: 0,
            videoUrl: 'https://www.youtube.com/watch?v=G3e-cpL7ofc' // Example YouTube video URL
          },
          {
            id: 2,
            title: 'Cloud Computing',
            description: '',
            image: 'https://www.device42.com/blog/wp-content/uploads/2023/03/14_01edge-cloud-computing-900x600.jpg',
            enrolled: false,
            progress: 0,
            videoUrl: 'https://www.youtube.com/watch?v=70oYrSnRgoI' // Example YouTube video URL
          },
          // Add more courses with their respective YouTube video URLs
          {
            id: 3,
            title: 'Robotics',
            description: '',
            image: 'https://futureskillsprime.in/sites/default/files/inline-images/iStock-966248982.jpg',
            enrolled: false,
            progress: 0,
            videoUrl: 'https://www.youtube.com/watch?v=J0ssFp7yN8Y'
          },
          {
            id: 4,
            title: 'Data Science',
            description: '',
            image: 'https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg',
            enrolled: false,
            progress: 0,
            videoUrl: 'https://www.youtube.com/watch?v=-ETQ97mXXF0'
          },
          {
            id: 5,
            title: 'Internet Of Things',
            description: '',
            image: 'https://images.prismic.io//intuzwebsite/078cae79-99e4-4114-80d7-c3beffd254c6_IoT+without+Internet-1.png?w=1200&q=80&auto=format,compress&fm=png8',
            enrolled: false,
            progress: 0,
            videoUrl: 'https://www.youtube.com/watch?v=6mBO2vqLv38'
          },
          {
            id: 6,
            title: 'Machine Learning',
            description: '',
            image: 'https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/machine-learning-pillar-page-overview.jpeg',
            enrolled: false,
            progress: 0,
            videoUrl: 'https://www.youtube.com/watch?v=PeMlggyqz0Y'
          },
          {
            id: 7,
            title: 'Java',
            description: '',
            image: 'https://www.finoit.com/wp-content/uploads/2022/11/future-of-java-programming-language.jpg',
            enrolled: false,
            progress: 0,
            videoUrl: 'https://www.youtube.com/watch?v=eIrMbAQSU34'
          },
          {
            id: 8,
            title: 'Python',
            description: '',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-d6UfUk2wXOKauTqOgL8Usfnc9i7eNBD8_Q&s',
            enrolled: false,
            progress: 0,
            videoUrl: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc'
          },
          {
            id: 9,
            title: 'Artificial Intelligence',
            description: '',
            image: 'https://www.imf.org/-/media/Images/IMF/FANDD/hero/2023/December/hero-B2B.ashx',
            enrolled: false,
            progress: 0,
            videoUrl: 'https://www.youtube.com/watch?v=JMUxmLyrhSk'
          },
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (courseId) => {
    const courseToEnroll = courses.find(course => course.id === courseId);
    if (courseToEnroll && !courseToEnroll.enrolled) {
      const updatedCourses = courses.map(course =>
        course.id === courseId ? { ...course, enrolled: true, progress: 10 } : course
      );
      setCourses(updatedCourses);
      setEnrolledCourses([...enrolledCourses, { ...courseToEnroll, enrolled: true, progress: 10 }]);
    }
  };

  const handleUnenroll = (courseId) => {
    const courseToUnenroll = enrolledCourses.find(course => course.id === courseId);
    if (courseToUnenroll) {
      const updatedEnrolledCourses = enrolledCourses.filter(course => course.id !== courseId);
      const updatedCourses = courses.map(course =>
        course.id === courseId ? { ...course, enrolled: false, progress: 0 } : course
      );
      setEnrolledCourses(updatedEnrolledCourses);
      setCourses(updatedCourses);
    }
  };

  const handleShowVideo = (videoUrl) => {
    window.open(videoUrl, '_blank'); // Always open video URL in a new tab
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      <div className="enrolled-courses">
        <h3>Enrolled Courses</h3>
        <div className="course-list">
          {enrolledCourses.map(course => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} onClick={() => handleShowVideo(course.videoUrl)} style={{ cursor: 'pointer' }} />
              <h4>{course.title}</h4>
              <p>{course.description}</p>
              <p>Progress: {course.progress}%</p>
              <button onClick={() => handleUnenroll(course.id)}>Unenroll</button>
            </div>
          ))}
        </div>
      </div>

      <div className="default-courses">
        <h3>Available Courses</h3>
        <div className="course-list">
          {courses.filter(course => !course.enrolled).map(course => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} onClick={() => handleShowVideo(course.videoUrl)} style={{ cursor: 'pointer' }} />
              <h4>{course.title}</h4>
              <p>{course.description}</p>
              <button onClick={() => handleEnroll(course.id)}>Enroll</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;








