import { useState } from "react";

function UpdateForm({ addUpdate }) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("Attendance");
  const [audience, setAudience] = useState("Parents");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !message) return;

    addUpdate({
      title,
      message,
      category,
      audience,
      pinned: false,
    });

    setTitle("");
    setMessage("");
    setCategory("Attendance");
    setAudience("Parents");
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <h2>Create Update</h2>

      <input
        type="text"
        placeholder="Enter update title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter update message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Attendance</option>
        <option>Homework</option>
        <option>Test</option>
        <option>Fees</option>
        <option>Holiday</option>
      </select>

      <select
        value={audience}
        onChange={(e) => setAudience(e.target.value)}
      >
        <option>Parents</option>
        <option>Students</option>
        <option>Teachers</option>
        <option>All Members</option>
      </select>

      <button type="submit">Add Update</button>
    </form>
  );
}

export default UpdateForm;