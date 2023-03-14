import React, { useState, useEffect } from "react";
import JsonImport from "./JsonImport";
import classes from "./JsonEditor.module.css";

const JsonEditor = () => {
  const [patJson, setPatJson] = useState("");
  const [patJsonPlaceholder, setPatJsonPlaceholder] = useState(
    "1: Paste JSON \n2: MODIFY \n3: COPY or IMPORT"
  );
  const [patProblemIdPlaceholder, setPatProblemIdPlaceholder] = useState("pat_problem_id")
  const [assetIdPlaceholder, setAssetIdPlaceholder] = useState("asset_id")
  
  
  const [copied, setCopied] = useState(false);
  const [copyButtonText, setCopycopyButtonText] = useState("COPY");

  const [modified, setModifiedData] = useState(false);
  const [modifyBtnText, setModifyBtnText] = useState("MODIFY");

  const [imported, setImported] = useState(false);
  const [importBtnText, setImportBtnText] = useState("IMPORT");

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
    setCopycopyButtonText("COPY");
  };

  useEffect(() => {
    copied && setPatJson('')
  },[copied, patJson])

  const modifyData = () => {
    const replacements = {
      tilepoolfrac: "dropdownselect",
      TilePoolTemplate: "TilePool2",
      tilepool: "dropdownselect",
    };
    setPatJson(
      patJson.replace(
        /tilepoolfrac|TilePoolTemplate|tilepool/g,
        (matched) => replacements[matched]
      )
    );
    setModifiedData(
      patJson.replace(
        /tilepoolfrac|TilePoolTemplate|tilepool/g,
        (matched) => replacements[matched]
      )
    );
    setModifyBtnText('MODIFIED')
    // setPatJson("") // set back to placeholder
  };

  const copyModifiedData = () => {
    setCopied(true);
    setCopycopyButtonText("COPIED!");
    let inputTextArea = document.getElementById("patjson");
    navigator.clipboard.writeText(inputTextArea.value);
    setPatJsonPlaceholder("JSON data copied to clipboard");
  };

  const importModifiedData = () => {
    console.log("patProblem: ", patProblem);
    setImportBtnText("IMPORTED!");
    // JsonImport(patProblem)
    JsonImport()
  };

  const resetForm = () => {
    setCopied(false)
    setCopycopyButtonText("COPY")
    setImported(false)
    setImportBtnText("IMPORT")
    setModifyBtnText("MODIFY")
    setPatJson("")
    setPatJsonPlaceholder("1: Paste JSON \n2: MODIFY \n3: COPY or IMPORT")
    setAssetIdPlaceholder("asset_id ...")
    setPatProblemIdPlaceholder("pat_problem_id ...")
    setPatProblem({
      pat_problem_id: "",
      asset_id: "",
      pat_json: "",
      pat_json_modified: "",
    });
  }

  return (
    <div className={classes.jsonform}>
      <label></label>
      <input
        id="patproblemid"
        name="patProblemId"
        value={patProblem.pat_problem_id}
        placeholder={patProblemIdPlaceholder}
        onChange={onChangePatProblemId}
      />
      <input
        id="assetid"
        name="assetId"
        value={patProblem.asset_id}
        placeholder={assetIdPlaceholder}
        onChange={onChangeAssetId}
      />
      <textarea
        id="patjson"
        type="text"
        className={classes.inputBox}
        // value={modified}
        // value={patProblem.pat_json || modified}
        value={patJson}
        placeholder={patJsonPlaceholder}
        onChange={onChangePatJson}
      />
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
    </div>
  );
};

export default JsonEditor;
