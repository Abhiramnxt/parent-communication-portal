import { useState } from "react";

const gradeToClassName = (grade) => {
  const normalized = grade.toLowerCase().replace("+", "plus").replace("-", "minus");
  return normalized;
};

export default function GradesPage({ students }) {
  const [selectedStudent, setSelectedStudent] = useState(1);

  const gradesData = {
    1: [
      { subject: "Mathematics", marks: 88, outOf: 100, grade: "A", trend: "↑" },
      { subject: "English", marks: 76, outOf: 100, grade: "B", trend: "→" },
      { subject: "Science", marks: 85, outOf: 100, grade: "A", trend: "↑" },
      { subject: "History", marks: 92, outOf: 100, grade: "A+", trend: "↑" },
      { subject: "Geography", marks: 78, outOf: 100, grade: "B", trend: "↓" },
    ],
    2: [
      { subject: "Mathematics", marks: 95, outOf: 100, grade: "A+", trend: "↑" },
      { subject: "English", marks: 88, outOf: 100, grade: "A", trend: "↑" },
      { subject: "Science", marks: 92, outOf: 100, grade: "A", trend: "→" },
      { subject: "History", marks: 85, outOf: 100, grade: "A", trend: "↑" },
      { subject: "Geography", marks: 80, outOf: 100, grade: "B", trend: "↑" },
    ],
  };

  const currentGrades = gradesData[selectedStudent];
  const avgMarks = Math.round(
    currentGrades.reduce((sum, g) => sum + g.marks, 0) / currentGrades.length
  );

  return (
    <div className="container page-content">
      <h2>📊 Academic Performance</h2>

      <div className="student-selector">
        {students.map((student) => (
          <button
            key={student.id}
            className={`student-btn ${selectedStudent === student.id ? "active" : ""}`}
            onClick={() => setSelectedStudent(student.id)}
          >
            {student.name}
          </button>
        ))}
      </div>

      <div className="grades-summary">
        <div className="grade-card">
          <h3>Average Score</h3>
          <div className="grade-circle">{avgMarks}%</div>
        </div>
      </div>

      <div className="grades-grid">
        {currentGrades.map((grade, idx) => (
          <div key={idx} className="grade-item">
            <div className="grade-header">
              <h3>{grade.subject}</h3>
              <span className="trend">{grade.trend}</span>
            </div>
            <div className="grade-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${(grade.marks / grade.outOf) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="grade-footer">
              <span className="marks">{grade.marks}/{grade.outOf}</span>
              <span className={`grade-badge grade-${gradeToClassName(grade.grade)}`}>
                {grade.grade}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
