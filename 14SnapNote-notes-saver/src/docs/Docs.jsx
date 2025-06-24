function Docs() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        📘 SnapNote Documentation
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What is SnapNote?</h2>
        <p>
          SnapNote is a simple tool that allows developers to quickly save,
          edit, and manage code snippets or notes, from anywhere.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 How to Use</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>📌 Add a title and content in the editor.</li>
          <li>✅ Click "Create My Snap" to save it.</li>
          <li>✏️ Use the icons to edit, view, copy, share, or delete.</li>
          <li>🔍 Search through your snaps using the search bar.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">🧠 Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Create and update code/notes easily</li>
          <li>Clipboard copy and web sharing support</li>
          <li>Search your saved snaps in real time</li>
          <li>Responsive and styled with Tailwind CSS</li>
        </ul>
      </section>
    </div>
  );
}

export default Docs;
