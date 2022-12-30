import React, { useState } from "react";
import styles from "./texteditor.module.css";
import commonStyles from "../../../styles/common.module.css";
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

  console.log(value);

  return (
    <div className={styles.container}>
      <div className={commonStyles.flex}>
        <input placeholder="Title" className={styles.title} />
        <button className={styles.button}>Save</button>
      </div>
      <ReactQuill
        className={styles.editor}
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default TextEditor;
