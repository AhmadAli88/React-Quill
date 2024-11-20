// App.js
import { useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the Quill Snow theme CSS
import { EditorContext } from "./React Quill with React State Management";

function Index() {
  const { editorHtml, handleChange } = useContext(EditorContext);

  return (
    <div className="App">
      <h1>React Quill with React Context API</h1>
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        theme="snow"
        placeholder="Write here..."
      />
      <h2>Editor Content (HTML):</h2>
      <pre>{editorHtml}</pre>
      <h2>Formatted Output:</h2>
      <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
    </div>
  );
}



export default Index;