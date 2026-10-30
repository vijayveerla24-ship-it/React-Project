import {useNavigate} from "react-router-dom";
import StudentForm from "../components/StudentForm";
import{
    addStudent
} from "../api/StudentApi";
function AddStudent(){
    const navigate=useNavigate();
    function handleSave(student){
        addStudent(student)
        .then(function(response){
            console.log("Created",response.data);
        alert("Student added successfully");
        navigate("/students");
    }