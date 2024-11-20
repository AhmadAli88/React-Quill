// App.js
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the Quill Snow theme CSS

function ImageUpload() {
  const [editorHtml, setEditorHtml] = useState("");

  // Handle content change
  const handleChange = (value) => {
    setEditorHtml(value);
  };

  // Custom image handler for uploading images
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const range = this.quill.getSelection();
        this.quill.insertEmbed(range.index, "image", reader.result);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    };
  };

  // Custom modules for image upload
  const modules = {
    toolbar: {
      container: [
        [{ 'header': '1' }, { 'header': '2' }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['bold', 'italic', 'underline'],
        ['link'],
        ['image'], // Add image button
      ],
      handlers: {
        'image': imageHandler, // Set custom image handler
      }
    }
  };

  return (
    <div className="App">
      <h1>React Quill with Image Upload</h1>
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        theme="snow"
        modules={modules} // Add image handler to toolbar
        placeholder="Add your content with images..."
      />
      <h2>Editor Content (HTML):</h2>
      <pre>{editorHtml}</pre>
      <h2>Formatted Output:</h2>
      <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
    </div>
  );
}

export default ImageUpload;
