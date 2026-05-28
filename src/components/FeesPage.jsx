import { useState } from "react";

export default function FeesPage({ students }) {
  const [selectedStudent, setSelectedStudent] = useState(1);

  const feesData = {
    1: [
      { month: "January", amount: 5000, status: "Paid", date: "5 Jan 2026" },
      { month: "February", amount: 5000, status: "Paid", date: "6 Feb 2026" },
      { month: "March", amount: 5000, status: "Pending", date: "-" },
      { month: "April", amount: 5000, status: "Pending", date: "-" },
      { month: "May", amount: 5000, status: "Pending", date: "-" },
    ],
    2: [
      { month: "January", amount: 5000, status: "Paid", date: "5 Jan 2026" },
      { month: "February", amount: 5000, status: "Paid", date: "7 Feb 2026" },
      { month: "March", amount: 5000, status: "Paid", date: "8 Mar 2026" },
      { month: "April", amount: 5000, status: "Pending", date: "-" },
      { month: "May", amount: 5000, status: "Pending", date: "-" },
    ],
  };

  const currentData = feesData[selectedStudent];
  const totalDue = currentData
    .filter((f) => f.status === "Pending")
    .reduce((sum, f) => sum + f.amount, 0);
  const totalPaid = currentData
    .filter((f) => f.status === "Paid")
    .reduce((sum, f) => sum + f.amount, 0);

  return (
    <div className="container page-content">
      <h2>💳 Fee Payment Tracking</h2>

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

      <div className="fees-summary">
        <div className="summary-card paid">
          <h3>Total Paid</h3>
          <p className="amount">₹{totalPaid}</p>
        </div>
        <div className="summary-card pending">
          <h3>Outstanding</h3>
          <p className="amount">₹{totalDue}</p>
        </div>
        <div className="summary-card total">
          <h3>Total Fees</h3>
          <p className="amount">₹{totalPaid + totalDue}</p>
        </div>
      </div>

      <div className="fees-table">
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((fee, idx) => (
              <tr key={idx}>
                <td>{fee.month}</td>
                <td>₹{fee.amount}</td>
                <td>
                  <span className={`fee-status status-${fee.status.toLowerCase()}`}>
                    {fee.status}
                  </span>
                </td>
                <td>{fee.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalDue > 0 && (
        <div className="payment-action">
          <button className="pay-btn">Pay Outstanding Amount →</button>
        </div>
      )}
    </div>
  );
}
