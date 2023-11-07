// import React from "react";

// import { createReactEditorJS } from "react-editor-js";

// import { EDITOR_JS_TOOLS } from "./tools";
// const ReactEditorJS = createReactEditorJS();

// const ReactEditor = ({ id, onChange, placeholder, value, field }) => {
//   const editorCore = React.useRef(null);

//   const handleInitialize = React.useCallback((instance) => {
//     editorCore.current = instance;
//   }, []);

//   const handleSave = React.useCallback(async () => {
//     const savedData = await editorCore.current.save();
//     onChange(savedData, field, parseInt(id.charAt(0)));
//   }, []);
//   return (
//     <ReactEditorJS
//       onInitialize={handleInitialize}
//       onChange={handleSave}
//       tools={EDITOR_JS_TOOLS}
//       holder={id}
//       placeholder={placeholder.replace("_", " ")}
//       defaultValue={value}
//     >
//       <div
//         id={id}
//         className=" dark:text-white text-black dark:bg-gray-700 bg-gray-100 rounded-lg overflow-hidden capitalize"
//         style={{ height: "48vh", margin: 0 }}
//       />
//     </ReactEditorJS>
//   );
// };

// export default ReactEditor;
