// EditorContext.js
/*eslint-disable*/
import { createContext, useState } from "react";

export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const [editorHtml, setEditorHtml] = useState("");

  const handleChange = (value) => {
    setEditorHtml(value);
  };

  return (
    <EditorContext.Provider value={{ editorHtml, handleChange }}>
      {children}
    </EditorContext.Provider>
  );
};
