import React,{useState} from "react";
import dateFormatting from "../utils/dateUtils";
import './StudentForm.css';

function StudentForm (props) {
    const [studentName, setStudentName] = useState("");
    const [chosenCourse, setChosenCourse] = useState("");
    const [courseDate, setCourseDate] = useState("");

    const studentNameChangeHandler = (event) => {
        setStudentName(event.target.value);
    }

    const chosenCourseHandler = (event) => {
        var enteredCourse = event.target.value;
        setChosenCourse(enteredCourse);
        const selectedCourse = props.courses.find(course => {
            return course.name.toString() === enteredCourse.toString();
        });
        setCourseDate(selectedCourse.startDate);
    }

    const courseDateHandler = (event) => {
        setCourseDate(event.target.value);
    }

    const courseOptions = props.courses.map ( course => {
        return <option key={course.id} value={course.name}>{course.displayName}</option>
    })

    const submitHandler = (event) => {
        event.preventDefault();

        const selectedCourseObject = props.courses.find(course => {
            return course.name.toString() === chosenCourse.toString();
        })

        const registeredStudentData = {
            studentName: studentName,
            courseId: selectedCourseObject.id,
            date: courseDate
        }
        props.onSaveRegisteredStudentData(registeredStudentData);

        setStudentName('');
        setChosenCourse('');
        setCourseDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-registration__controls">
                <div className="new-registration__control">
                    <label>Student Name</label>
                    <input type="text" required onChange={studentNameChangeHandler} value={studentName}/>
                </div>
    
                <div className="new-registration__control">
                    <label>Course Name</label>
                    <select className="course-selection" defaultValue='' required onChange={chosenCourseHandler} value={chosenCourse}>
                        {courseOptions}
                    </select>
                </div>
    
                <div className="new-registration__control">
                    <label>Course Start Date</label>
                    <input type="date" disabled  value={courseDate} onChange={courseDateHandler}/>
                </div>
            </div>
            <br></br>
            <div className="new-registration__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Register Student</button>
            </div>
        </form>
    )
}

export default StudentForm;