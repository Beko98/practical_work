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
  {
    firstName: "David",
    lastName: "Lee",
    status: "active",
    gender: "male",
    points: 80,
    personalNumber: "2468013579",
    email: "david@gmail.com",
    mobileNumber: "+1-246-801-3579",
    address: "101 Main Street, Boston, MA 20001",
    dateOfBirth: "04/04/2003",
  },
  {
    firstName: "Eve",
    lastName: "Green",
    status: "inactive",
    gender: "female",
    points: 70,
    personalNumber: "9753108642",
    email: "eve@yahoo.com",
    mobileNumber: "+1-975-310-8642",
    address: "121 Main Street, Seattle, WA 30001",
    dateOfBirth: "05/05/2004",
  },
  {
    firstName: "Frank",
    lastName: "White",
    status: "active",
    gender: "male",
    points: 90,
    personalNumber: "8642097531",
    email: "frank@outlook.com",
    mobileNumber: "+1-864-209-7531",
    address: "141 Main Street, Houston, TX 40001",
    dateOfBirth: "06/06/2005",
  },
  {
    firstName: "Grace",
    lastName: "Black",
    status: "active",
    gender: "female",
    points: 85,
    personalNumber: "7531086420",
    email: "grace@gmail.com",
    mobileNumber: "+1-753-108-6420",
    address: "161 Main Street, Miami, FL 50001",
    dateOfBirth: "07/07/2006",
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    status: "inactive",
    gender: "male",
    points: 65,
    personalNumber: "6420975310",
    email: "harry@yahoo.com",
    mobileNumber: "+1-642-097-5310",
    address: "181 Main Street, Denver, CO 60001",
    dateOfBirth: "08/08/2007",
  },
  {
    firstName: "Iris",
    lastName: "Wang",
    status: "active",
    gender: "female",
    points: 95,
    personalNumber: "5310864209",
    email: "iris@outlook.com",
    mobileNumber: "+1-531-086-4209",
    address: "201 Main Street, San Francisco, CA 70001",
    dateOfBirth: "09/09/2008",
  },
  {
    firstName: "Jack",
    lastName: "Chen",
    status: "active",
    gender: "male",
    points: 80,
    personalNumber: "4209753108",
    email: "jack@gmail.com",
    mobileNumber: "+1-420-975-3108",
    address: "221 Main Street, Las Vegas, NV 80001",
    dateOfBirth: "10/10/2009",
  },
  {
    firstName: "Kate",
    lastName: "Lee",
    status: "inactive",
    gender: "female",
    points: 75,
    personalNumber: "3108642097",
    email: "kate@yahoo.com",
    mobileNumber: "+1-310-864-2097",
    address: "241 Main Street, Atlanta, GA 90001",
    dateOfBirth: "11/11/2010",
  },
];

function LocalData() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5;

  useEffect(() => {
    localStorage.removeItem("students");
    if (localStorage.getItem("students")) {
      setData(JSON.parse(localStorage.getItem("students")));
    } else {
      localStorage.setItem("students", JSON.stringify(students));
      setData(students);
    }

    console.log("Number of students in data: ", data.length);
  }, []);

  const addStudent = (newStudent) => {
    const updatedStudents = [...data, newStudent];
    localStorage.setItem("students", JSON.stringify(updatedStudents));
    setData(updatedStudents);
  };

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = data.slice(indexOfFirstStudent, indexOfLastStudent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / studentsPerPage); i++) {
    pageNumbers.push(i);
  }

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
            <tbody>{currentStudents.map(renderRow)}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default LocalData;
