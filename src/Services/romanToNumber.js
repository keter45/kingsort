function charToInt(c) {
  switch (c) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
    default:
      return -1;
  }
}
export default function romanToInt(str1) {
  if (str1 == null) return -1;
  let num = charToInt(str1.charAt(0));
  let pre;
  let curr;

  for (let i = 1; i < str1.length; i += 1) {
    curr = charToInt(str1.charAt(i));
    pre = charToInt(str1.charAt(i - 1));
    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }
  return num;
}
