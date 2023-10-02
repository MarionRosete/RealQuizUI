import React from "react";

import { createReactEditorJS } from "react-editor-js";

import { EDITOR_JS_TOOLS } from "./tools";
const ReactEditorJS = createReactEditorJS();

const ReactEditor = () => {
    return (
     
  

      <ReactEditorJS  tools={EDITOR_JS_TOOLS} holder="custom">
        <div id="custom" className="overflow-auto dark:text-white text-black "  style={{maxHeight:'35vh', margin:0,}}/>
      </ReactEditorJS>
    );
  
}

export default ReactEditor