import React from "react";
import "./UsersTable.scss";

const UserTable = () => {
  const users = [
    {
      username: "JohnDoe123",
      email: "john.doe@email.com",
      joined: "01/05/2024",
      status: "Offline",
    },
    {
      username: "JohnDoe123",
      email: "john.doe@email.com",
      joined: "01/05/2024",
      status: "Online",
    },
    {
      username: "JohnDoe123",
      email: "john.doe@email.com",
      joined: "01/05/2024",
      status: "Offline",
    },
    {
      username: "JohnDoe123",
      email: "john.doe@email.com",
      joined: "01/05/2024",
      status: "Online",
    },
  ];

  return (
    <table className="user-table">
      <thead>
        <tr className="h">
          <th style={{ marginRight: "15px" }}>
            <input type="checkbox" />
          </th>
          <th>Username</th>
          <th>Email</th>
          <th>Joined on</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <img src="/images/avator.jpeg" alt="avatar" className="avatar" />{" "}
              {user.username}
            </td>
            <td>{user.email}</td>
            <td>{user.joined}</td>
            <td
              className={`status ${user.status.toLowerCase()}`}
              style={{ height: "100%" }}
            >
              {user.status}
            </td>
            <td>
              <button className="view-btn">View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;

{
  /* <td className={`status ${user.status.toLowerCase()}`}>{user.status}</td> */
}
