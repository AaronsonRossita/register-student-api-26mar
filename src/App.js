import { useState, useEffect } from 'react';
import './App.css';
import NewStudent from './newStudent/NewStudent';
import { getAllCourses } from './services/api';
import normalizeCourseName from './utils/courseUtils';

function App() {

  const [availableCourses, setAvailableCourses] = useState([]);

  useEffect( () => {
    getAllCourses().then( response => {
      const courses = response.data.map( course => {
        const displayName = normalizeCourseName(course.name);
        return( {...course, displayName})
      })
      setAvailableCourses(courses);
    });
  }, []);
  

  return (
    <div>
      <NewStudent courses={availableCourses}/>
    </div>
  );
}

export default App;
