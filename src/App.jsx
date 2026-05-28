import { useState } from "react";
import Navbar from "./components/Navbar";
import UpdateForm from "./components/UpdateForm";
import UpdateCard from "./components/UpdateCard";
import FilterBar from "./components/FilterBar";
import AttendancePage from "./components/AttendancePage";
import FeesPage from "./components/FeesPage";
import GradesPage from "./components/GradesPage";
import EventsPage from "./components/EventsPage";
import MessagesPage from "./components/MessagesPage";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [updates, setUpdates] = useState([
    {
      id: 1,
      title: "Math Test Reminder",
      message: "Math weekly test will be conducted on Friday.",
      category: "Test",
      audience: "Parents",
      date: "28 May 2026",
      pinned: true,
    },
    {
      id: 2,
      title: "Holiday Notice",
      message: "Centre will remain closed on Sunday.",
      category: "Holiday",
      audience: "All Members",
      date: "27 May 2026",
      pinned: false,
    },
  ]);

  const [students] = useState([
    { id: 1, name: "Aarjun Kumar", class: "10-A", rollNo: "15" },
    { id: 2, name: "Priya Singh", class: "10-B", rollNo: "22" },
  ]);

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const addUpdate = (newUpdate) => {
    setUpdates([
      {
        ...newUpdate,
        id: Date.now(),
        date: new Date().toLocaleDateString(),
      },
      ...updates,
    ]);
  };

  const deleteUpdate = (id) => {
    setUpdates(updates.filter((item) => item.id !== id));
  };

  const togglePin = (id) => {
    setUpdates(
      updates.map((item) =>
        item.id === id ? { ...item, pinned: !item.pinned } : item
      )
    );
  };

  const filteredUpdates = updates.filter((item) => {
    const matchCategory =
      filter === "All" || item.category === filter;

    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.message.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  const pinnedUpdates = filteredUpdates.filter((u) => u.pinned);
  const normalUpdates = filteredUpdates.filter((u) => !u.pinned);

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "Home" && (
        <div className="container">
          <div className="top-grid">
            <UpdateForm addUpdate={addUpdate} />

            <div className="stats-box">
              <h2>Portal Statistics</h2>

              <div className="stats-grid">
                <div className="stat-card">
                  <h3>{updates.length}</h3>
                  <p>Total Updates</p>
                </div>

                <div className="stat-card">
                  <h3>
                    {
                      updates.filter((item) => item.pinned).length
                    }
                  </h3>
                  <p>Pinned Updates</p>
                </div>

                <div className="stat-card">
                  <h3>
                    {
                      updates.filter(
                        (item) => item.category === "Homework"
                      ).length
                    }
                  </h3>
                  <p>Homework Notices</p>
                </div>
              </div>
            </div>
          </div>

          <FilterBar
            filter={filter}
            setFilter={setFilter}
            search={search}
            setSearch={setSearch}
          />

          {pinnedUpdates.length > 0 && (
            <>
              <h2 className="section-title">Pinned Updates</h2>

              <div className="updates-grid">
                {pinnedUpdates.map((item) => (
                  <UpdateCard
                    key={item.id}
                    item={item}
                    deleteUpdate={deleteUpdate}
                    togglePin={togglePin}
                  />
                ))}
              </div>
            </>
          )}

          <h2 className="section-title">All Updates</h2>

          <div className="updates-grid">
            {normalUpdates.map((item) => (
              <UpdateCard
                key={item.id}
                item={item}
                deleteUpdate={deleteUpdate}
                togglePin={togglePin}
              />
            ))}
          </div>
        </div>
      )}

      {currentPage === "Attendance" && (
        <AttendancePage students={students} />
      )}

      {currentPage === "Homework" && (
        <div className="container page-content">
          <h2>📚 Homework</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Mathematics</h3>
              <p><strong>Chapter 5:</strong> Quadratic Equations - Exercise 5.1 & 5.2</p>
              <p className="due-date">Due: 30 May 2026</p>
            </div>
            <div className="feature-card">
              <h3>English</h3>
              <p><strong>Assignment:</strong> Write an essay on "My Role Model"</p>
              <p className="due-date">Due: 1 June 2026</p>
            </div>
            <div className="feature-card">
              <h3>Science</h3>
              <p><strong>Project:</strong> Create a model of the solar system</p>
              <p className="due-date">Due: 2 June 2026</p>
            </div>
            <div className="feature-card">
              <h3>History</h3>
              <p><strong>Reading:</strong> Chapter 12 - Indian Independence Movement</p>
              <p className="due-date">Due: 29 May 2026</p>
            </div>
          </div>
        </div>
      )}

      {currentPage === "Tests" && (
        <div className="container page-content">
          <h2>📝 Upcoming Tests & Exams</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">29 May</div>
              <div className="timeline-content">
                <h3>Mathematics Test</h3>
                <p>Topics: Algebra, Geometry, Statistics</p>
                <p className="time">10:00 AM - 11:00 AM</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">31 May</div>
              <div className="timeline-content">
                <h3>English Test</h3>
                <p>Topics: Poetry, Prose, Grammar</p>
                <p className="time">11:00 AM - 12:00 PM</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2 June</div>
              <div className="timeline-content">
                <h3>Science Test</h3>
                <p>Topics: Physics, Chemistry, Biology</p>
                <p className="time">2:00 PM - 3:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentPage === "Announcements" && (
        <div className="container page-content">
          <h2>📢 General Announcements</h2>
          <div className="announcements-list">
            <div className="announcement-item">
              <span className="badge urgent">URGENT</span>
              <h3>Annual Sports Day - June 15</h3>
              <p>All students are requested to participate. Event starts at 9:00 AM. Parents are welcome to attend.</p>
            </div>
            <div className="announcement-item">
              <span className="badge event">EVENT</span>
              <h3>Science Fair 2026</h3>
              <p>Students can showcase their science projects. Registration ends on 5 June.</p>
            </div>
            <div className="announcement-item">
              <span className="badge info">INFO</span>
              <h3>School Reopens After Summer Break</h3>
              <p>School will reopen on 1 July 2026. Online orientation for new students on 25 June.</p>
            </div>
            <div className="announcement-item">
              <span className="badge">NOTICE</span>
              <h3>Uniform Distribution</h3>
              <p>New uniforms will be distributed on 28 May. Please collect from the office.</p>
            </div>
          </div>
        </div>
      )}

      {currentPage === "Fees" && (
        <FeesPage students={students} />
      )}

      {currentPage === "Grades" && (
        <GradesPage students={students} />
      )}

      {currentPage === "Events" && (
        <EventsPage />
      )}

      {currentPage === "Messages" && (
        <MessagesPage />
      )}
    </div>
  );
}

export default App;