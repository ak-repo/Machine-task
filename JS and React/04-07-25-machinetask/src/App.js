import "./App.css";
import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "Ak",
    age: 24,
  });

  // function for update userage
  const UpdateUser = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div className="App">
      <UserCard user={user} updateAge={UpdateUser} />
    </div>
  );
}

function UserCard({ user, updateAge }) {
  return (
    <div>
      <h2>User Card</h2>
      <h3>User Name: {user.name}</h3>
      <h3>User Age: {user.age}</h3>
      <button onClick={updateAge}>Update age</button>
    </div>
  );
}

export default App;
