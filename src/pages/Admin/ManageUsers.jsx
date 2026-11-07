import AdminNavbar from "../../components/AdminNavbar";
import "../../styles/pages/ManageUsers.css";

export default function ManageUsers() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "user" },
    { id: 2, name: "Admin User", email: "admin@example.com", role: "admin" }
  ];

  return (
    <>
      <AdminNavbar />
      <div className="manage-users-container">
        <h2>👥 Manage Users</h2>
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td><td>{user.email}</td><td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
