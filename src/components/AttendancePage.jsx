export default function AttendancePage({ students }) {
  const attendanceData = {
    1: [
      { date: "28 May", status: "Present" },
      { date: "27 May", status: "Present" },
      { date: "26 May", status: "Absent" },
      { date: "25 May", status: "Present" },
      { date: "24 May", status: "Present" },
    ],
    2: [
      { date: "28 May", status: "Present" },
      { date: "27 May", status: "Present" },
      { date: "26 May", status: "Present" },
      { date: "25 May", status: "Late" },
      { date: "24 May", status: "Present" },
    ],
  };

  return (
    <div className="container page-content">
      <h2>📍 Attendance Record</h2>
      
      {students.map((student) => (
        <div key={student.id} className="attendance-section">
          <div className="student-header">
            <div>
              <h3>{student.name}</h3>
              <p>Class: {student.class} | Roll No: {student.rollNo}</p>
            </div>
            <div className="attendance-stats">
              <div className="stat">
                <span className="stat-value">92%</span>
                <span className="stat-label">Attendance</span>
              </div>
            </div>
          </div>

          <div className="attendance-table">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData[student.id].map((record, idx) => (
                  <tr key={idx}>
                    <td>{record.date}</td>
                    <td>
                      <span
                        className={`status-badge status-${record.status.toLowerCase()}`}
                      >
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
