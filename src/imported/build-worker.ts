import fs from "fs";
import path from "path";

const load = async () => {
  const file = fs.readFileSync(path.resolve(__dirname, "../../dist2/worker.js"), "utf8");

  return {
    data: { file },
  };
};

export default load;
