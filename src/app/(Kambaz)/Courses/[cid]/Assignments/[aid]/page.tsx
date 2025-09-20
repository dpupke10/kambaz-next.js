export default function AssignmentEditor() {
  return (
    <div id="wd-assignment-editor">
      <h2>Assignment Editor</h2>
      <form>
        <label htmlFor="assignment-title">Title:</label>
        <input id="assignment-title" placeholder="Assignment Title" /><br />

        <label htmlFor="assignment-points">Points:</label>
        <input id="assignment-points" type="number" placeholder="100" /><br />

        <label htmlFor="assignment-due-date">Due Date:</label>
        <input id="assignment-due-date" type="date" /><br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}