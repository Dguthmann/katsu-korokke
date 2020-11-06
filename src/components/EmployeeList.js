import React from "react";

function EmployeeList(props) {
  return (
    <tbody>
      {props.results.map(result => (
        <tr>
          <td>{result.name.first} {result.name.last}</td>
          <td>{result.location.street.number} {result.location.street.name}</td>
          <td>{result.location.city}, {result.location.state}</td>
          <td>{result.email}</td>
          <td>{result.phone}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default EmployeeList;
