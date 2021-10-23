const minimist = require("minimist");

const getInfo = (req, res) => {
  const args = minimist(process.argv.slice(2));
  const os = process.platform;
  const nodeVersion = process.version;
  const memoryUsage = process.memoryUsage().rss;
  const path = __dirname;
  const processId = process.pid;
  const workingDirectory = process.cwd();

  res.render("info", {
    args,
    os,
    nodeVersion,
    memoryUsage,
    path,
    processId,
    workingDirectory
  });
};

module.exports = { getInfo };
