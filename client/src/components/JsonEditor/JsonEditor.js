import React, { useState, useEffect } from "react";
import JsonImport from "./JsonImport";
import classes from "./JsonEditor.module.css";

const JsonEditor = () => {
  const [patJson, setPatJson] = useState("");
  const [patJsonPlaceholder, setPatJsonPlaceholder] = useState(
    "Paste JSON here, then click COPY to Clipboard below"
  );
  const [copied, setCopied] = useState(false);
  const [copyButtonText, setCopycopyButtonText] = useState("COPY to clipboard");

  const [modifiedData, setModifiedData] = useState(false);
  const [modifyBtnText, setModifyBtnText] = useState("MODIFY JSON data");

  const [imported, setImported] = useState(false);
  const [importBtnText, setImportBtnText] = useState("IMPORT to database");

  const [patProblem, setPatProblem] = useState({
    pat_problem_id: "",
    asset_id: "",
    pat_json: "",
    pat_json_modified: "",
  });

  const onChangePatProblemId = (e) => {
    e.preventDefault();
    setPatProblem({ ...patProblem, pat_problem_id: e.target.value });
  };

  const onChangeAssetId = (e) => {
    e.preventDefault();
    setPatProblem({ ...patProblem, asset_id: e.target.value });
  };

  const onChangePatJson = (e) => {
    e.preventDefault();
    setPatJson(e.target.value);
    setPatProblem({...patProblem, pat_json: `'${e.target.value}'::jsonb`})
    // setPatProblem({ ...patProblem, pat_json: e.target.value });
    setCopied(false);
    setCopycopyButtonText("Copy to clipboard");
  };

  useEffect(() => {
    copied && setPatJson('')
  },[copied, patJson])

  const modifyData = () => {
    const replacements = {
      tilepoolfrac: "dropdownselect",
      dropdownselectfrac: "dropdownselect",
      TilePoolTemplate: "TilePool2",
      tilepool: "dropdownselect",
    };
    setPatJson(
      patJson.replace(
        /tilepool|TilePoolTemplate|tilepoolfrac|dropdownselectfrac/g,
        (matched) => replacements[matched]
      )
    );
    setModifiedData(
      patJson.replace(
        /tilepool|TilePoolTemplate|tilepoolfrac|dropdownselectfrac/g,
        (matched) => replacements[matched]
      )
    );
    setModifyBtnText('DATA MODIFIED')
    // setPatJson("asdf") // set back to placeholder
  };

  const copyModifiedData = () => {
    setCopied(true);
    setCopycopyButtonText("COPY SUCCESSFUL");
    let inputTextArea = document.getElementById("patjson");
    navigator.clipboard.writeText(inputTextArea.value);
    setPatJsonPlaceholder("JSON data copied to clipboard");
  };

  const importModifiedData = () => {
    console.log("patProblem: ", patProblem);
    setImportBtnText("JSON data imported!");
    // JsonImport(patProblem)
    JsonImport()
  };

  return (
    <div className={classes.jsonform}>
      <input
        id="patproblemid"
        name="patProblemId"
        value={patProblem.pat_problem_id}
        placeholder="pat_problem_id ..."
        onChange={onChangePatProblemId}
      />
      <input
        id="assetid"
        name="assetId"
        value={patProblem.asset_id}
        placeholder="asset_id ..."
        onChange={onChangeAssetId}
      />
      <textarea
        id="patjson"
        type="text"
        className={classes.inputBox}
        // value={modifiedData}
        // value={patProblem.pat_json || modifiedData}
        value={patJson}
        placeholder={patJsonPlaceholder}
        onChange={onChangePatJson}
      />
      <p>
        <button
          onClick={modifyData}
          className={modifiedData ? classes.modified : undefined}
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
      </p>
    </div>
  );
};

export default JsonEditor;
