import React, { useState } from "react";
import styles from "./texteditor.module.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const TextEditor = () => {
  const [value, setValue] = useState("");

  return (
    <div style={{padding: 10}}>
      <ReactQuill
        className={styles.editor}
        theme="snow"
        value={value}
        onChange={setValue}
      />
      ;
    </div>
  );
};

export default TextEditor;
