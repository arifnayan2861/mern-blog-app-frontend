import { EditorContent, useEditor } from "@tiptap/react";
import "highlight.js/styles/atom-one-dark.css";
import MenuBar from "./MenuBar";
import { extensions } from "../../constants/tiptapExtensions";

const Editor = ({ onDataChange, content, editable }) => {
  const editor = useEditor({
    editable,
    extensions: extensions,
    editorProps: {
      attributes: {
        class:
          "text-black !prose !dark:prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none m-5 focus:outline-none prose-pre:bg-[#282c34] prose-pre:text-black",
      },
    },
    // [#abb2bf]
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      onDataChange(json);
    },
    content: content,
  });

  return (
    <div className="w-full relative">
      {editable && <MenuBar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;