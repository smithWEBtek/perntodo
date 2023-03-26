import React, { useState, useEffect } from "react";

class Problem {
    constructor(obj){
        this.problem_id = obj.problem_id
        this.asset_id = obj.asset_id
        this.pat_json = obj.pat_json
    }
}
const ListProblems = (data) => {
  const [problems, setProblems] = useState([]);
  const getProblems = async () => {
    try {
      const response = await fetch("http://localhost:5000/problems");
      const jsonData = await response.json();
      setProblems(jsonData);
    } catch (error) {
      console.error("error: ", error.message);
    }
  };

  useEffect(() => {
    getProblems();
  }, []);


Problem.prototype.problemHtml = () => {
    // <p>${this.pat_json}</p>
    return (
        `<div>
            <h3>${this.problem_id}</h3>
         </div>   
        `)
    }

  const renderedProblems = problems.map((problem) => {
    console.log('problem: ', problem);
    // debugger
    return (
      <tr key={problem.problem_id}>
        <td>{problem.problem_id}</td>
        <td>{problem.asset_id}</td>
        <td>{problem.pat_json.type}</td>
        {/* <td>`${JSON.stringify(problem.pat_json.body.problem[0].tile[0].text)}`</td> */}
        <td>{problem.pat_json.body.problem[0].tile[0].text}</td>
      </tr>
    );
  });

  console.log("problems: ", problems);

  return (
    <div>
      <h2>Problems List</h2>
      <table>
        <tbody>{renderedProblems}</tbody>
      </table>
    </div>
  );
};

export default ListProblems;
