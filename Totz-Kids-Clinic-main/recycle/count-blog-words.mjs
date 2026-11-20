import fs from "fs";

const src = fs.readFileSync("lib/blog.ts", "utf8");
const postRe = /slug: "([^"]+)"[\s\S]*?blocks: \[([\s\S]*?)\n    \],/g;

function extract(body, key) {
  const re = new RegExp(`${key}: "((?:\\\\.|[^"\\\\])*)"`, "g");
  return [...body.matchAll(re)].map((x) =>
    x[1].replace(/\\n/g, " ").replace(/\\"/g, '"'),
  );
}

function extractLists(body) {
  const items = [];
  const re = /items: \[([\s\S]*?)\]/g;
  let m;
  while ((m = re.exec(body))) {
    const inner = m[1];
    items.push(
      ...[...inner.matchAll(/"((?:\\.|[^"\\])*)"/g)].map((x) =>
        x[1].replace(/\\n/g, " ").replace(/\\"/g, '"'),
      ),
    );
  }
  return items;
}

let m;
while ((m = postRe.exec(src))) {
  const slug = m[1];
  const body = m[2];
  const parts = [
    ...extract(body, "text"),
    ...extract(body, "question"),
    ...extract(body, "answer"),
    ...extractLists(body),
  ];
  const words = parts.join(" ").split(/\s+/).filter(Boolean).length;
  const flag = words >= 1000 && words <= 1300 ? "OK" : words < 1000 ? "SHORT" : "LONG";
  console.log(`${words}\t${flag}\t${slug}`);
}
