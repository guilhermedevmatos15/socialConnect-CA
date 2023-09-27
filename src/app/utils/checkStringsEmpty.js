export default function checkStringsEmpty(...values) {
   return values.every((value) => String(value).length !== 0);
}
