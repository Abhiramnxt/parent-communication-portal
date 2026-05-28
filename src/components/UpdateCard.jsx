function UpdateCard({ item, deleteUpdate, togglePin }) {
  return (
    <div className="update-card">
      <div className="card-top">
        <h3>{item.title}</h3>

        <div className="card-actions">
          <button onClick={() => togglePin(item.id)}>
            {item.pinned ? "Unpin" : "Pin"}
          </button>

          <button
            className="delete-btn"
            onClick={() => deleteUpdate(item.id)}
          >
            Delete
          </button>
        </div>
      </div>

      <p>{item.message}</p>

      <div className="card-footer">
        <span>{item.category}</span>
        <span>{item.audience}</span>
        <span>{item.date}</span>
      </div>
    </div>
  );
}

export default UpdateCard;