import { createServer } from "node:http";
import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = normalize(join(fileURLToPath(new URL("../", import.meta.url))));
const distRoot = normalize(join(projectRoot, "dist"));
const root = normalize(process.env.SERVE_ROOT || ((await exists(distRoot)) ? distRoot : projectRoot));
const port = Number(process.env.PORT || 8017);
const host = process.env.HOST || "127.0.0.1";

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".mp4": "video/mp4",
  ".svg": "image/svg+xml; charset=utf-8"
};

async function exists(path) {
  try {
    await access(path, constants.R_OK);
    return true;
  } catch {
    return false;
  }
}

createServer(async (request, response) => {
  try {
    let pathname = decodeURIComponent((request.url || "/").split("?")[0]);
    if (pathname === "/") pathname = "/index.html";

    const filePath = normalize(join(root, pathname));
    if (!filePath.startsWith(root)) {
      response.writeHead(403);
      response.end("forbidden");
      return;
    }

    let body;
    let responsePath = filePath;
    try {
      body = await readFile(filePath);
    } catch (error) {
      if (extname(pathname)) throw error;
      responsePath = join(root, "index.html");
      body = await readFile(responsePath);
    }

    response.writeHead(200, {
      "content-type": mime[extname(responsePath)] || "application/octet-stream",
      "cache-control": "no-store"
    });
    response.end(body);
  } catch {
    response.writeHead(404);
    response.end("not found");
  }
}).listen(port, host, () => {
  console.log(`Portfolio preview: http://${host}:${port}`);
  console.log(`Serving: ${root}`);
});
