import fs from "fs";
import path from "path";

const load = () => {
  const file = fs.readFileSync(path.resolve(__dirname, "../../dist2/worker.js"), "utf8");

  return Promise.resolve({
    data: { file },
  });
};

export default load;
