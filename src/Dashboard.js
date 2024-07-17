import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // Example course data (replace with your actual data storage method)
  const courses = [
    {
      id: 1,
      title: 'Course A',
      description: 'Description of Course A',
      image: 'course_a.jpg',
      enrolled: true, // Example of an enrolled course
      progress: 50,   // Example progress (in percentage)
    },
    {
      id: 2,
      title: 'Course B',
      description: 'Description of Course B',
      image: 'course_b.jpg',
      enrolled: false, // Example of a not enrolled course
      progress: 0,     // No progress for not enrolled courses
    },
    // Add more courses as needed
  ];

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      <div className="enrolled-courses">
        <h3>Enrolled Courses</h3>
        <div className="course-list">
          {courses
            .filter(course => course.enrolled)
            .map(course => (
              <div key={course.id} className="course-card">
                <img src={course.image} alt={course.title} />
                <h4>{course.title}</h4>
                <p>{course.description}</p>
                <p>Progress: {course.progress}%</p>
              </div>
            ))}
        </div>
      </div>

      <div className="default-courses">
        <h3>Available Courses</h3>
        <div className="course-list">
          {courses
            .filter(course => !course.enrolled)
            .map(course => (
              <div key={course.id} className="course-card">
                <img src={course.image} alt={course.title} />
                <h4>{course.title}</h4>
                <p>{course.description}</p>
                <button>Enroll</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
