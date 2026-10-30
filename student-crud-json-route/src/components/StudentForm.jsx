import {useEffect, useState} from "react";
function StudentForm({selectedStudent,onsave,buttonText,})
 {
    const [name,setName]=useState("");
    const [java,setJava]=useState("");
    const [python,setPython]=useState("");
    const [database,setDatabase]=useState("");
 useEffect(function(){
    if(selectedStudent){
        setName(selectedStudent.name);
        setJava(selectedStudent.java);
        setPython(selectedStudent.python);
        setDatabase(selectedStudent.database);
    }
},[selectedStudent]);
function handleSubmit(event){
    event.preventDefault();
    if(name.trim() === "" ){
        alert("Please enter student name");
    return;
}
if(java === "" || python === "" || database === "")
{
    alert("Please enter marks for all subjects");
    return;
}
if(Number(java)<0 || Number(java)>100 || Number(python)<0 || Number(python)>100 || Number(database)<0 || Number(database)>100){
    alert("marks must be between 0 and 100");
    return;
}
const student={
    name:name.trim(),
    java:Number(java),
    python:Number(python),
    database:Number(database),
};
onsave(student);
}
return(
    <form
    className="student-form"
    onSubmit={handleSubmit}
    >   
    <input
    type="text"
    placeholder="Enter Student Name"
    value={name}
    onChange={function(event){setName(event.target.value);}}
    />
    <input
    type="number"
    placeholder="Enter Java Marks"
    value={java}
    onChange={function(event){setJava(event.target.value);}}
    />
    <input
    type="number"
    placeholder="Enter Python Marks"
    value={python}
    onChange={function(event){setPython(event.target.value);}}
    />
    <input
    type="number"
    placeholder="Enter Database Marks"
    value={database}
    onChange={function(event){setDatabase(event.target.value);}}
    />
    <button type="submit">{buttonText}</button>
    </form>
);
 }
 export default StudentForm;