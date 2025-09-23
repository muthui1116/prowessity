import React, { useEffect, useState } from 'react';

function RegisteredUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching users:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading users...</div>;

  return (
    <div className="card mt-5">
      <div className="card-header">
        <h5>Registered Users</h5>
      </div>
      <div className="card-body p-0">
        <table className="table mb-0">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center">No users found.</td>
              </tr>
            ) : (
              users.map((user, idx) => (
                <tr key={user.id}>
                  <td>{idx + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RegisteredUsers;