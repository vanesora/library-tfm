export default function isError(
  value: string, regex = "", required = false,
  minLength = 0, maxLength = Number.MAX_VALUE
): boolean {
  const regexExp = new RegExp(regex);
  const error =
    !regexExp.test(value) ||
    (required && value === "") ||
    value.length < minLength || value.length > maxLength;
  return error;
}