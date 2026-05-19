import fs from "node:fs";

export function readText(filePath) {
  return fs.readFileSync(filePath, "utf8").replace(/\r\n/g, "\n");
}

export function writeText(filePath, content) {
  fs.writeFileSync(filePath, content.endsWith("\n") ? content : `${content}\n`, "utf8");
}

export function readEntries(filePath) {
  const text = readText(filePath).trim();
  if (!text) return [];

  return text
    .split(/\n(?=- name: )/g)
    .filter(Boolean)
    .map((block) => parseEntry(block, filePath));
}

function parseEntry(block, filePath) {
  const entry = {
    __file: filePath,
    __block: block,
  };

  entry.name = scalar(block, "name", /^- name:\s*(.*)$/m);

  for (const key of [
    "organization",
    "owner",
    "vertical",
    "service_scope",
    "category",
    "official_status",
    "mcp_status",
    "skill_status",
    "evidence_level",
    "status",
    "reason",
    "last_checked",
    "notes",
  ]) {
    const value = scalar(block, key);
    if (value !== undefined) entry[key] = value;
  }

  for (const key of [
    "role",
    "protocols",
    "official_links",
    "supporting_links",
    "marketplace_links",
    "third_party_links",
    "risk_tags",
    "skill_format",
  ]) {
    const values = array(block, key);
    if (values.length) entry[key] = values;
  }

  return entry;
}

function scalar(block, key, customPattern) {
  const pattern = customPattern ?? new RegExp(`^  ${escapeRegExp(key)}:\\s*(.*)$`, "m");
  const match = block.match(pattern);
  if (!match) return undefined;
  return unquote(match[1].trim());
}

function array(block, key) {
  const lines = block.split("\n");
  const start = lines.findIndex((line) => line === `  ${key}:`);
  if (start === -1) return [];

  const values = [];
  for (let i = start + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (/^  [A-Za-z0-9_]+:/.test(line) || /^- name: /.test(line)) break;
    const match = line.match(/^    -\s+(.*)$/);
    if (match) values.push(unquote(match[1].trim()));
  }
  return values;
}

function unquote(value) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
