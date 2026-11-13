import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import { zipSync } from "fflate";

const files = {};
async function collect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await collect(path);
    } else if (entry.isFile()) {
      files[relative("dist", path).split(sep).join("/")] = await readFile(path);
    }
  }
}

await collect("dist");
await writeFile("app.zip", zipSync(files, { level: 9 }));
console.log("Berhasil membuat app.zip");
