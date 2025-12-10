import { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    setLoading(true);
    setError(null);
    setUsers([]);

    setTimeout(() => {
      const random = Math.random();

      if (random < 0.33) {
        setLoading(false);
        setError("Failed to load users.");
      } else if (random < 0.66) {
        setLoading(false);
        setUsers([]); // empty state
      } else {
        setLoading(false);
        setUsers([
          { id: 1, name: "Luka" },
          { id: 2, name: "Marko" },
        ]);
      }
    }, 1500);
  };

  // EARLY RETURNS
  if (loading) return <p className="loading">Loading...</p>;
  if (error)
    return (
      <div>
        <p className="error">{error}</p>
        <button onClick={fetchData}>Try Again</button>
      </div>
    );

  if (users.length === 0)
    return (
      <div className="container">
        <button onClick={fetchData}>Load Users</button>
        <p>No users found.</p>
      </div>
    );

  return (
    <div className="container">
      <button onClick={fetchData}>Reload</button>

      <ul className="list">
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
