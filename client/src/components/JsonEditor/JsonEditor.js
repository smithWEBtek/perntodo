import React, { useState, useEffect } from "react";
import classes from './JsonEditor.module.css';

const JsonEditor = () => {
  const [jsonData, setJsonData] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyButtonText, setCopycopyButtonText] = useState("Copy to clipboard");
  const [imported, setImported] = useState(false);
  const [importButtonText, setImportButtonText] = useState("Import to database");
  
  const handleInputChange = (event) => {
    event.preventDefault();
    setCopied(false);
    setCopycopyButtonText("Copy to clipboard");
    setJsonData(event.target.value);
  };
  
  useEffect(() => {
    copied && setJsonData('')
  },[copied, jsonData])

  
  useEffect(() => {
    const replacements = {
      tilepoolfrac: "dropdownselect",
      dropdownselectfrac: "dropdownselect",
      TilePoolTemplate: "TilePool2",
      tilepool: "dropdownselect",
    };
    setJsonData(
      jsonData.replace(
        /tilepool|TilePoolTemplate|tilepoolfrac|dropdownselectfrac/g,
        (matched) => replacements[matched]
      )
      );
    }, [jsonData]);
    
    const copyUpdatedData = () => {
      setCopied(true);
      setCopycopyButtonText("COPY SUCCESSFUL");
      let inputTextArea = document.getElementById("copy-text-input");
      navigator.clipboard.writeText(inputTextArea.value);
      inputTextArea.innerText("Updated JSON copied to clipboard");
    };

    const importModifiedData = () => {
      
    };

  return (
    <div className="App">
      <textarea
        id="copy-text-input"
        type="text"
        className={classes.inputBox}
        value={jsonData}
        placeholder={"Paste JSON here, then click Copy to Clipboard below"}
        onChange={handleInputChange}
      />
      <p>
        <button onClick={copyUpdatedData} className={copied && classes.copied}>
          {copyButtonText}
        </button>
        <button onClick={importModifiedData} className={imported && classes.imported}>
          {importButtonText}
        </button>
      </p>
    </div>
  );
};

export default JsonEditor;
