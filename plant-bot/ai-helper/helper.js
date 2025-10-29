export function checkHeading(str) {
  return /^(\*)(\*)(.*)\*$/.test(str);
}

export function replaceHeadingStarts(str) {
  return str.replace(/^(\*)(\*)|(\*)$/g, "");
}
