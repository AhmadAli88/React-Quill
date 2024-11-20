// App.js
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the Quill Snow theme CSS

function SavingOnServer() {
  const [editorHtml, setEditorHtml] = useState("");

  // Handle content change
  const handleChange = (value) => {
    setEditorHtml(value);
  };

  // Simulate saving data to a server
  const saveContent = () => {
    // Here you would typically send the content to your backend API
    console.log("Saving content to the server:", editorHtml);
    alert("Content saved successfully!");
  };

  return (
    <div className="App">
      <h1>React Quill with Save Button</h1>
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        theme="snow"
        placeholder="Write your content..."
      />
      <button onClick={saveContent}>Save Content</button>
      <h2>Editor Content (HTML):</h2>
      <pre>{editorHtml}</pre>
      <h2>Formatted Output:</h2>
      <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
    </div>
  );
}

export default SavingOnServer;
