export default function createID() {
  return new Date()
    .toJSON()
    .replace(/-/g, "")
    .replace(/:/g, "")
    .replace(/\./g, "");
}
