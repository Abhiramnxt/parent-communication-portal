import { useState } from "react";

export default function MessagesPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Mrs. Priya Sharma",
      role: "Class Teacher",
      subject: "Aarjun's Progress Update",
      message: "Aarjun is doing great in class. Very attentive and completes assignments on time.",
      time: "Today 3:45 PM",
      read: false,
    },
    {
      id: 2,
      sender: "Mr. Rajesh Kumar",
      role: "Math Teacher",
      subject: "Homework Feedback",
      message: "Please ensure Aarjun practices more problems from Exercise 5.2. Great work overall!",
      time: "Yesterday 2:30 PM",
      read: true,
    },
    {
      id: 3,
      sender: "Ms. Anjali Verma",
      role: "English Teacher",
      subject: "Essay Submission",
      message: "The essay on My Role Model is due on 1 June. Excellent topic choice!",
      time: "2 days ago",
      read: true,
    },
  ]);

  const [replyMessage, setReplyMessage] = useState("");

  const handleSendMessage = () => {
    if (replyMessage.trim()) {
      alert("Message sent to Mrs. Priya Sharma!");
      setReplyMessage("");
    }
  };

  return (
    <div className="container page-content">
      <h2>💬 Messages & Communication</h2>

      <div className="messages-container">
        <div className="messages-list">
          <h3>Recent Messages</h3>
          {messages.map((msg) => (
            <div key={msg.id} className={`message-item ${msg.read ? "read" : "unread"}`}>
              <div className="message-sender">
                <strong>{msg.sender}</strong>
                <span className="role">{msg.role}</span>
              </div>
              <div className="message-subject">{msg.subject}</div>
              <div className="message-preview">{msg.message}</div>
              <div className="message-time">{msg.time}</div>
            </div>
          ))}
        </div>

        <div className="reply-section">
          <h3>Reply to Mrs. Priya Sharma</h3>
          <textarea
            value={replyMessage}
            onChange={(e) => setReplyMessage(e.target.value)}
            placeholder="Type your message here..."
            className="reply-textarea"
          />
          <button onClick={handleSendMessage} className="send-btn">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
