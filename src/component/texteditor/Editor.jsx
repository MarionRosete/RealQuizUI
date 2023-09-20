import React from "react";

import { createReactEditorJS } from "react-editor-js";

import { EDITOR_JS_TOOLS } from "./tools";

const ReactEditorJS = createReactEditorJS();

const ReactEditor = () => {
    return (
      <>
      <ReactEditorJS
        tools={EDITOR_JS_TOOLS}
      
      />
      </>
    );
  
}

export default ReactEditor