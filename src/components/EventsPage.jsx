export default function EventsPage() {
  const events = [
    {
      id: 1,
      name: "Annual Sports Day",
      date: "15 June 2026",
      time: "9:00 AM - 4:00 PM",
      location: "School Ground",
      desc: "Inter-school sports competition with various events",
    },
    {
      id: 2,
      name: "Science Fair 2026",
      date: "10 June 2026",
      time: "10:00 AM - 3:00 PM",
      location: "School Auditorium",
      desc: "Students showcase their science projects and innovations",
    },
    {
      id: 3,
      name: "Cultural Program",
      date: "22 June 2026",
      time: "5:00 PM - 7:00 PM",
      location: "School Hall",
      desc: "Annual cultural program featuring dance, music, and drama",
    },
    {
      id: 4,
      name: "Parent-Teacher Meet",
      date: "5 June 2026",
      time: "3:00 PM - 6:00 PM",
      location: "School Premises",
      desc: "Discuss your child's progress with teachers",
    },
  ];

  return (
    <div className="container page-content">
      <h2>📅 School Events & Calendar</h2>
      
      <div className="events-timeline">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-date">
              <div className="date-day">{event.date.split(" ")[0]}</div>
              <div className="date-month">{event.date.split(" ")[1]}</div>
            </div>
            <div className="event-details">
              <h3>{event.name}</h3>
              <p className="event-time">🕐 {event.time}</p>
              <p className="event-location">📍 {event.location}</p>
              <p className="event-desc">{event.desc}</p>
              <button className="event-btn">Mark Interested</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
