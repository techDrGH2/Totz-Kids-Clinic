import fs from "node:fs";

const src = fs.readFileSync("lib/service-longform.ts", "utf8");
const expected = [
  "common-childhood-illnesses",
  "child-vaccination",
  "newborn-care",
  "well-child-visits",
  "child-nutrition",
  "child-allergy-asthma",
  "obesity-puberty",
  "developmental-assessment",
  "seizure-developmental-care",
];

const found = expected.filter((s) => src.includes(`"${s}": {`));
console.log("found", found.length, "/", expected.length);
console.log("missing", expected.filter((s) => !found.includes(s)));
console.log("TODO", /TODO|FIXME|placeholder/i.test(src));
console.log("fence", src.includes("```"));
console.log("getter", src.includes("export function getServiceLongform"));
console.log("types", src.includes("export type ServiceLongformSection"));
