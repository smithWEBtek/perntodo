import React from "react";
import classes from "./JsonEditor.module.css";

const JsonEditorControls = ({
    modifyData,
    copyModifiedData,
    importModifiedData,
    resetForm,
    copied,
    copyButtonText,
    modified,
    modifyBtnText,
    imported,
    importBtnText
}) => {

return (<div>
          <p>
        <button
          onClick={modifyData}
          className={modified ? classes.modified : undefined}
        >
          {modifyBtnText}
        </button>
        <button
          onClick={copyModifiedData}
          className={copied ? classes.copied : undefined}
        >
          {copyButtonText}
        </button>
        <button
          onClick={importModifiedData}
          className={imported ? classes.imported : undefined}
        >
          {importBtnText}
        </button>
        <button
          onClick={resetForm}
        >
          RESET
        </button>
      </p>
  </div>);
};

export default JsonEditorControls;
