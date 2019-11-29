import romanToNumber from './romanToNumber';
import numberToRoman from './numerToRoman';

function numberCompare(a, b) {
  if (
    a
      .split(' ')
      .slice(0, -1)
      .join() ===
    b
      .split(' ')
      .slice(0, -1)
      .join()
  ) {
    if (Number(a.substr(a.length - 2)) > Number(b.substr(b.length - 2))) {
      return 1;
    }
    return -1;
  }
  return a - b;
}
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export default function sortKings(kings) {
  let numericKings = [];
  let orderKings = [];

  const king = [
    {
      Name: [],
      Number: '',
      FullName: '',
    },
  ];

  // Translate roman to number to order the array
  kings.forEach(k => {
    king.Name = k.split(' ');
    king.Number = romanToNumber(king.Name[1]);
    king.FullName = `${capitalize(king.Name[0])} ${king.Number}`;
    numericKings = [...numericKings, king.FullName];
  });

  numericKings.sort((a, b) => numberCompare(a, b));

  // Getting roman numerics back
  numericKings.forEach(k => {
    king.Name = k.split(' ');
    king.Number = numberToRoman(king.Name[1]);
    king.FullName = `${king.Name[0]} ${king.Number}`;
    orderKings = [...orderKings, king.FullName];
  });

  return orderKings;
}
