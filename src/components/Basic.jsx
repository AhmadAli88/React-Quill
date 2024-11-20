// App.js
import { useState } from "react";
import ReactQuill from "react-quill"; // Import the ReactQuill component
import "react-quill/dist/quill.snow.css"; // Import the Quill Snow theme CSS

function Basic() {
  // State to store the editor content
  const [editorHtml, setEditorHtml] = useState("");

  // Handle change in content
  const handleChange = (value) => {
    setEditorHtml(value);
  };

  return (
    <div className="App">
      <h1>React Quill Example</h1>
      
      {/* React Quill editor */}
      <ReactQuill 
        value={editorHtml} 
        onChange={handleChange} 
        theme="snow" // 'snow' is the default theme, you can use other themes like 'bubble'
        placeholder="Start typing..."
      />
      
      {/* Display the raw HTML output */}
      <h2>Editor Content (HTML):</h2>
      <pre>{editorHtml}</pre>
      
      {/* You can also output the content as formatted HTML */}
      <h2>Formatted Output:</h2>
      <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
    </div>
  );
}

export default Basic;
