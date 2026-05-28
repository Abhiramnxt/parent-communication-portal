import { useState } from "react";

function Navbar({ currentPage, setCurrentPage }) {
  const [open, setOpen] = useState(false);

  const navItems = ["Attendance", "Homework", "Tests", "Announcements", "Fees", "Grades", "Events", "Messages"];

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <button
        className="home-btn"
        aria-label="Go to home"
        onClick={() => {
          setCurrentPage("Home");
          setOpen(false);
        }}
        title="Home"
      >
        🏠
      </button>

      <h1>Parent Communication Portal</h1>

      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((s) => !s)}
      >
        ☰
      </button>

      <div className={"nav-right" + (open ? " open" : "")}>
        {navItems.map((item) => (
          <button
            key={item}
            className={`nav-item ${currentPage === item ? "active" : ""}`}
            onClick={() => handleNavClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;