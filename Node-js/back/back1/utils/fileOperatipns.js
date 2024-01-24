const fs = require("fs");

class FileIO {
  constructor(pathToFile) {
    this.pathToFile = pathToFile;
  }
  async areadFile() {
    const data = await fs.readFile(this.areadFile);
  }

  async writeFile() {}
}

async function writeFile(obj) {
  await fs.writeFile("./data.json", JSON.stringify(obj), (error) => {
    if (error) console.log(error);
  });
}

module.exports = { writeFile };
