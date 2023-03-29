import SampleJson2 from "./JsonSample2";

const data = {
  asset_id: SampleJson2.asset_id,
  pat_problem_id: SampleJson2.pat_problem_id,
  pat_json_modified: `${JSON.stringify(SampleJson2.pat_json_modified)}`,
  pat_json: SampleJson2.pat_json,
};

// const JsonImport = async (problem) => {
const JsonImport = async () => {
  try {
    // const body = { problem };
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
