import React,{useState} from "react";
import './NewStudent.css';
import StudentForm from "./StudentForm";


function NewStudent(props){

    const [isEditing, setIsEditing] = useState(false);

    const stopEditing = () => {
        setIsEditing(false);
    }

    const startEditing = () => {
        setIsEditing(true);
    }
    return(
        <div className="new-registration">
            { (isEditing) ? <StudentForm onCancel={stopEditing} courses={props.courses} onSaveRegisteredStudentData={props.onSaveRegisteredStudentData}/> :
                            <button onClick={startEditing}>Register Student</button>}
        </div>
    )

}

export default NewStudent;