import React, { useState, useEffect } from "react";
import "../scss/_studentForm.scss";

const students = [
  {
    firstName: "Alice",
    lastName: "Smith",
    status: "active",
    gender: "female",
    points: 85,
    personalNumber: "1234567890",
    email: "alice@gmail.com",
    mobileNumber: "+1-234-567-8901",
    address: "123 Main Street, New York, NY 10001",
    dateOfBirth: "01/01/2000",
  },
  {
    firstName: "Bob",
    lastName: "Jones",
    status: "inactive",
    gender: "male",
    points: 75,
    personalNumber: "0987654321",
    email: "bob@yahoo.com",
    mobileNumber: "+1-987-654-3210",
    address: "456 Main Street, Los Angeles, CA 90001",
    dateOfBirth: "02/02/2001",
  },
  {
    firstName: "Charlie",
    lastName: "Brown",
    status: "active",
    gender: "male",
    points: 95,
    personalNumber: "1357924680",
    email: "charlie@outlook.com",
    mobileNumber: "+1-357-924-6801",
    address: "789 Main Street, Chicago, IL 60001",
    dateOfBirth: "03/03/2002",
  },
];

function StudentList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("students")) {
      setData(JSON.parse(localStorage.getItem("students")));
    } else {
      localStorage.setItem("students", JSON.stringify(students));
      setData(students);
    }
  }, []);

  const renderRow = (student) => {
    return (
      <tr key={student.personalNumber}>
        <td>
          {student.firstName}
          {student.lastName}
        </td>
        <td>{student.status}</td>
        <td>{student.gender}</td>
        <td>{student.points}</td>
        <td>{student.personalNumber}</td>
        <td>{student.email}</td>
        <td>{student.mobileNumber}</td>
        <td>{student.address}</td>
        <td>{student.dateOfBirth}</td>
      </tr>
    );
  };

  const renderHeader = () => {
    return (
      <tr className="headlines">
        <th>
          სტუდენტის სახელი <br /> და გვარი
        </th>
        <th>სტატუსი</th>
        <th>სქესი</th>
        <th>ქულები</th>
        <th>პირადი ნომერი</th>
        <th>მაილი</th>
        <th>ტელეფონის ნომერი</th>
        <th>მისამართი</th>
        <th>დაბადების თარიღი</th>
      </tr>
    );
  };

  return (
    <>
      <div className="student-list-container">
        <div>
          <table>
            <thead>{renderHeader()}</thead>
            <tbody>{data.map(renderRow)}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default StudentList;
