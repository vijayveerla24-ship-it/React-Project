// import './App.css'
// import Studentresult from "./Studentresult";
// function App() {
//   let student = [
//     {
//       id: 101,
//       name: "Surendra",
//       java: 80,
//       python: 90,
//       database: 70,
//     },
//     {
//       id: 102,
//       name: "Dattu",
//       java: 75,
//       python: 85,
//       database: 65,
//     },
//     {
//       id: 103,
//       name: "chetan",
//       java: 60,
//       python: 70,
//       database: 80,
//     },
//     {
//       id: 104,
//       name: "kumar",
//       java: 95,
//       python: 88,
//       database: 92,
//     },
//     {
//       id: 105,
//       name: "Sai",
//       java: 70,
//       python: 60,
//       database: 75,
//     },
//   ];

//   return (
//     <div>
//       <h1>Student Marks Table</h1>
//       <table>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Java</th>
//           <th>Python</th>
//           <th>Database</th>
//           <th>Average</th>
//           <th>Result</th>
//         </tr>
//         <tbody>
//           {student.map(function (s) {
//             const average = (s.java + s.python + s.database) / 3;
//             // const result= s.java>=35 && s.python>=35 && s.database>=35 ? "Pass" : "Fail";
//             return (
//               <tr key={s.id}>
//                 <td>{s.id}</td>
//                 <td>{s.name}</td>
//                 <td>{s.java}</td>
//                 <td>{s.python}</td>
//                 <td>{s.database}</td>
//                 <td>{average.toFixed(2)}</td>
//                 {/* <td>{result}</td> */}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import Studentresult from "./Studentresult";
import Welcome from "./welcome";
import { useState } from "react";
function App() {
  const a = "props";
  const [removeId,setRemoveId]=useState("");
  const[name,setName]=useState("");
  const[java,setJava]=useState("");
  const[python,setPython]=useState("");
  const[database,setDatabase]=useState(""); 
  const [student, setStudent] = useState([{
      id: 101,
      name: "Surendra",
      java: 80,
      python: 90,
      database: 70,
    },
    {
      id: 102,
      name: "Anjali",
      java: 75,
      python: 85,
      database: 65,
    },
    {
      id: 103,
      name: "Ravi",
      java: 60,
      python: 70,
      database: 80,
    },
    {
      id: 104,
      name: "Priya",
      java: 95,
      python: 88,
      database: 92,
    },
    {
      id: 105,
      name: "Kiran",
      java: 70,
      python: 60,
      database: 75,
    },]);
  
function addDummyData() {
const newStudent =[ { id: student.length+101, name: "Student" +(student.length+1), java:80, python:75, database:70}];
setStudent([...student, ...newStudent]);
}
function removeData(id){
  setStudent((previousStudents)=>{
    return previousStudents.filter((student)=>student.id !==id);});
  }
function deleteData(){
  setStudent((previousStudents)=>{
    return previousStudents.filter((student)=>student.id !==Number(removeId));
  });
  setRemoveId("");
}
function addStudent(event){
  event.preventDefault();
  if(name.trim() ===""){
    alert("Please enter student name");
    return;
  }
  if(java === "" || python === "" || database === ""){
    alert("Please enter marks for all subjects");
    return;
  }
  if(Number(java)<0 || Number(java)>100 || Number(python)<0 || Number(python)>100 || Number(database)<0 || Number(database)>100){
    alert("Please enter valid marks between 0 and 100");
    return;
  }
  const newStudent = {
    id: student.length + 101,
    name: name,
    java: Number(java),
    python: Number(python),
    database: Number(database),
  };
  setStudent(function (previousStudents) {
    return [...previousStudents, newStudent];
  });
  setName("");
  setJava("");
  setPython("");
  setDatabase("");
}
  return (
    <div>
      <h1>Student Marks Table</h1>

      <form class="student-form" onSubmit={addStudent}>
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
        
        <button type="submit">Add Student</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Java</th>
            <th>Python</th>
            <th>Database</th>
            <th>Average</th>
            <th>Result</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {student.map((s) => (
            <Studentresult 
            key={s.id}
            student={s}
            removeData={removeData}
              // deleteStudent={() => {
              //   setStudent(student.filter((student) => student.id !== s.id));
              // }} 
              />
            ))}
        </tbody>
      </table>
      {/* props (passing data from parent to child component) */}
      <Welcome avalue={a} />
      <br /> <br /> <br />
      <button onClick={addDummyData}>Add DummyButton</button>
    <br /> <br /> <br />
    <input  
    type="number"
    placeholder="Enter Student ID"
    value={removeId}
    onChange={(e) => setRemoveId(e.target.value)}
    />
    <button onClick={deleteData} disabled={student.length === 0}>
      Remove Student
    </button>
    </div>
  );
}

export default App;
