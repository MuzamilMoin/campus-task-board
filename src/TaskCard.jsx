// TaskCard shows ONE task. The task data comes from App using props.
function TaskCard(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>Category: {props.category}</p>
    </div>
  );
}

export default TaskCard;
