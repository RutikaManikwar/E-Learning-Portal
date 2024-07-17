import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css';

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch course details from API using courseId
    // setCourse(fetchedCourseData);
  }, [courseId]);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="course-details">
      <h1>{course.title}</h1>
      <div className="course-content">
        <h2>Videos</h2>
        <ul>
          {course.videos.map(video => (
            <li key={video.id}>
              <video src={video.url} controls />
              <p>{video.title}</p>
            </li>
          ))}
        </ul>
        <h2>PPTs</h2>
        <ul>
          {course.ppts.map(ppt => (
            <li key={ppt.id}>
              <a href={ppt.url} download>{ppt.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
