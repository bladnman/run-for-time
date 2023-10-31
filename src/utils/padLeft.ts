export default function padLeft(
  num: number,
  length = 2,
  padChar = "0",
): string {
  return num.toString().padStart(length, padChar);
}
