const core = require("@actions/core");
const fetch = require("node-fetch");
const fs = require("fs");

async function run() {
  try {
    const script = core.getInput("script", { required: true });

    const AsyncFunction = Object.getPrototypeOf(async () => {}).constructor;
    const execute = new AsyncFunction("$", script);
    const result = await execute({ fs: fs, fetch: fetch });

    core.setOutput("result", JSON.stringify(result));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
