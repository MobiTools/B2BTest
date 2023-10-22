import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Stilurile pentru editor

const ArticleEditor = (props) => {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <ReactQuill
        style={{ height: 300, marginBottom: 40 }}
        value={props.content}
        onChange={props.handleContentChange}
        theme="snow" // Optional editor theme
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link", "image", "video"],
            ["clean"],
          ],
        }}
        formats={[
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
          "video",
        ]}
        placeholder="Enter your text here..." // Placeholder text
        readOnly={false} // Set to true for read-only mode
      />
    </div>
  );
};

export default ArticleEditor;
