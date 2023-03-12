import SampleJson from "./JsonSample";

const data = {
  pat_problem_id: SampleJson.pat_problem_id,
  asset_id: SampleJson.asset_id,
  pat_json_modified: `${JSON.stringify(SampleJson.pat_json_modified)}`,
  pat_json: SampleJson.pat_json,
};

// const JsonImport = async ({problem}) => {
const JsonImport = async () => {
  console.log("------db -----data: ", data);
  try {
    const body = data;
    await fetch("http://localhost:5000/problem", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.error("error: ", error.message);
  }
};

export default JsonImport;
