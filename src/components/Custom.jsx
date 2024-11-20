// App.js
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the Quill Snow theme CSS

function Custom() {
  const [editorHtml, setEditorHtml] = useState("");

  // Handle change in content
  const handleChange = (value) => {
    setEditorHtml(value);
  };

  // Custom toolbar options
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline'],
      ['link'],
      [{ 'align': [] }],
      [{ 'color': [] }, { 'background': [] }],
      ['clean']
    ]
  };

  return (
    <div className="App">
      <h1>React Quill Custom Toolbar</h1>
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        theme="snow"
        modules={modules} // Custom toolbar configuration
        placeholder="Start typing..."
      />
      <h2>Editor Output:</h2>
      <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
    </div>
  );
}

export default Custom;
