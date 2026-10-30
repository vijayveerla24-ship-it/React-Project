function Studentresult({ student, removeData }) {
  const total = student.java + student.python + student.database;
  const average = total / 3;
  const result =
    student.java >= 40 && student.python >= 40 && student.database >= 40
      ? "Pass"
      : "Fail";
  return (
    <tr>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.java}</td>
      <td>{student.python}</td>
      <td>{student.database}</td>
      <td>{average.toFixed(2)}</td>
      <td>{result}</td>
      <td>
        <button class="remove" onClick={() => removeData(student.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Studentresult;
